/**
 * Format a date to `DD/MM/YYYY`
 * @param {string|Date} date
 * @returns {string}
 */
export const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  /**
   * Capitalize the first letter of a string
   * @param {string} str
   * @returns {string}
   */
  export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * Handle API errors and extract messages
   * @param {Object} error - Error object from API response
   * @returns {string}
   */
  export const handleApiError = (error) => {
    if (error && error.message) {
      return error.message;
    } else if (error && error.response && error.response.data) {
      return error.response.data.message || 'An unknown error occurred.';
    }
    return 'An unknown error occurred.';
  };
  
  /**
   * Generate a random string for temporary IDs or keys
   * @param {number} length - Length of the random string
   * @returns {string}
   */
  export const generateRandomString = (length = 8) => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };
  