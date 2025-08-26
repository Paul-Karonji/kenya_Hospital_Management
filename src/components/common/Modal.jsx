import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import PatientForm from '../forms/PatientForm';
import AppointmentForm from '../forms/AppointmentForm';
import InventoryForm from '../forms/InventoryForm';

const Modal = ({ showModal, modalType, editingItem, closeModal, saveItem, patients }) => {
  const [formData, setFormData] = useState(editingItem || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    saveItem(formData);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  if (!showModal) return null;

  const renderForm = () => {
    switch (modalType) {
      case 'patient':
        return <PatientForm formData={formData} handleChange={handleChange} />;
      case 'appointment':
        return <AppointmentForm formData={formData} handleChange={handleChange} patients={patients} />;
      case 'inventory':
        return <InventoryForm formData={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {editingItem ? 'Edit' : 'Add'} {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
          </h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {renderForm()}

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;