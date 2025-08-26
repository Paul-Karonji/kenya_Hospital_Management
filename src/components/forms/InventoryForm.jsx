import React from 'react';

const InventoryForm = ({ formData, handleChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Item Name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.name || ''}
        onChange={(e) => handleChange('name', e.target.value)}
        required
      />
      <select
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.category || ''}
        onChange={(e) => handleChange('category', e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="Medication">Medication</option>
        <option value="Medical Supplies">Medical Supplies</option>
        <option value="Equipment">Equipment</option>
        <option value="Surgical Instruments">Surgical Instruments</option>
        <option value="Laboratory Supplies">Laboratory Supplies</option>
      </select>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Quantity"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.quantity || ''}
          onChange={(e) => handleChange('quantity', parseInt(e.target.value))}
          required
        />
        <input
          type="number"
          placeholder="Minimum Stock"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.minStock || ''}
          onChange={(e) => handleChange('minStock', parseInt(e.target.value))}
          required
        />
      </div>
      <input
        type="text"
        placeholder="Supplier"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.supplier || ''}
        onChange={(e) => handleChange('supplier', e.target.value)}
        required
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          step="0.01"
          placeholder="Price (KES)"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.price || ''}
          onChange={(e) => handleChange('price', parseFloat(e.target.value))}
          required
        />
        <input
          type="date"
          placeholder="Expiry Date"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.expiry || ''}
          onChange={(e) => handleChange('expiry', e.target.value)}
          required
        />
      </div>
    </>
  );
};

export default InventoryForm;