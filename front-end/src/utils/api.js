import axios from 'axios';

// Base URL for the API
const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Generic GET request
 * @param {string} endpoint - API endpoint
 * @returns {Promise}
 */
export const getRequest = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('GET Request Error:', error);
    throw error.response.data;
  }
};

/**
 * Generic POST request
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request payload
 * @returns {Promise}
 */
export const postRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('POST Request Error:', error);
    throw error.response.data;
  }
};

/**
 * Generic PUT request
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request payload
 * @returns {Promise}
 */
export const putRequest = async (endpoint, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('PUT Request Error:', error);
    throw error.response.data;
  }
};

/**
 * Generic DELETE request
 * @param {string} endpoint - API endpoint
 * @returns {Promise}
 */
export const deleteRequest = async (endpoint) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('DELETE Request Error:', error);
    throw error.response.data;
  }
};
