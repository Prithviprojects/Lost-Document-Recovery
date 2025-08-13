import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Name */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-200 text-white">
          Lost Documents
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/report"
              className="hover:text-gray-200 transition duration-300 text-white"
            >
              Report Document
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="hover:text-gray-200 transition duration-300 text-white"
            >
              Search Document
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-gray-200 transition text-white duration-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="hover:text-gray-200 transition text-white duration-300"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
