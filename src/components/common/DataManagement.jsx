import React from 'react';
import { Package, Trash2 } from 'lucide-react';

const DataManagement = ({ exportData, clearAllData }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Data Management</h3>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={exportData}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          <Package className="h-4 w-4" />
          Export Data Backup
        </button>
        <button
          onClick={clearAllData}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
        >
          <Trash2 className="h-4 w-4" />
          Clear All Data
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-3">
        <strong>Data Storage:</strong> All data is automatically saved to your browser's local storage. 
        Export regular backups to keep your data safe. Data persists between browser sessions.
      </p>
    </div>
  );
};

export default DataManagement;