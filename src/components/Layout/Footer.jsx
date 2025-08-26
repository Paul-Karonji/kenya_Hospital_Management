import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2025 WIK™. Kenya Hospital Management System. Built for Kenyan healthcare facilities.
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Emergency: 999</span>
            <span>Support: 0800-HEALTH</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;