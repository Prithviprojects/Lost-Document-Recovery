/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Validate password strength
   * (At least 8 characters, one uppercase letter, one lowercase letter, and one digit)
   * @param {string} password
   * @returns {boolean}
   */
  export const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  
  /**
   * Validate serial number format (alphanumeric only)
   * @param {string} serialNumber
   * @returns {boolean}
   */
  export const isValidSerialNumber = (serialNumber) => {
    const serialRegex = /^[A-Za-z0-9]+$/;
    return serialRegex.test(serialNumber);
  };
  
  /**
   * Check if a required field is not empty
   * @param {string} value
   * @returns {boolean}
   */
  export const isNotEmpty = (value) => {
    return value.trim() !== '';
  };
  