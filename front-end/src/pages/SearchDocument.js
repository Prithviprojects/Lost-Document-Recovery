import React, { useState } from 'react';
import axios from 'axios';

function SearchDocument() {
  const [searchParams, setSearchParams] = useState({
    docType: '',
    serialNumber: '',
    location: '',
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.get('http://localhost:5000/api/documents/search', {
        params: searchParams, // Send search parameters
      });

      if (response.data.length === 0) {
        setMessage('No matching documents found.');
      }
      setResults(response.data);
    } catch (error) {
      setMessage('Error fetching documents. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Search for Documents</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Document Type:</label>
            <input
              type="text"
              name="docType"
              value={searchParams.docType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Serial Number:</label>
            <input
              type="text"
              name="serialNumber"
              value={searchParams.serialNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Location:</label>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {message && <p className="text-center text-red-500 mt-4">{message}</p>}

        {results.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Search Results:</h3>
            <ul>
              {results.map((doc) => (
                <li key={doc._id} className="p-4 border-b">
                  <p><strong>Type:</strong> {doc.docType}</p>
                  <p><strong>Serial Number:</strong> {doc.serialNumber}</p>
                  <p><strong>Location:</strong> {doc.location}</p>
                  {doc.photo && (
                    <img src={doc.photo} alt="Document" className="mt-2 w-32 h-32 object-cover" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchDocument;
