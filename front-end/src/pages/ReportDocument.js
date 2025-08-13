import React, { useState } from 'react';
import axios from 'axios';

function ReportDocument() {
  const [formData, setFormData] = useState({
    docType: '',
    serialNumber: '',
    location: '',
    photo: '', // Store image as Base64
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Convert image to Base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData({
          ...formData,
        });
      };
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Send JSON object
      const response = await axios.post('http://localhost:5000/api/documents/report', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      setSuccess('Document reported successfully!');
      setFormData({ docType: '', serialNumber: '', location: '', photo: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Error reporting document');
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Report a Found Document
        </h2>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Document Type:</label>
            <input
              type="text"
              name="docType"
              value={formData.docType}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Serial Number:</label>
            <input
              type="text"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Upload Photo:</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full"
            />
          </div>
          {formData.photo && (
            <div className="mb-4">
              <p className="text-gray-700">Preview:</p>
              <img src={formData.photo} alt="Preview" className="w-full h-40 object-cover mt-2 rounded" />
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportDocument;
