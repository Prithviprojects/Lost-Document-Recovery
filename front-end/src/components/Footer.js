import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Lost Document Recovery App. All rights reserved.
        </p>
        <p className="text-sm">
          Made with <span className="text-red-500">&hearts;</span> by TEAM 48
        </p>
      </div>
    </footer>
  );
}

export default Footer;
