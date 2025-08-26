import React from 'react';

const PatientForm = ({ formData, handleChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.name || ''}
        onChange={(e) => handleChange('name', e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="ID Number"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.idNumber || ''}
        onChange={(e) => handleChange('idNumber', e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number (e.g., 0712345678)"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.phone || ''}
        onChange={(e) => handleChange('phone', e.target.value)}
        required
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Age"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.age || ''}
          onChange={(e) => handleChange('age', parseInt(e.target.value))}
          required
        />
        <select
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.gender || ''}
          onChange={(e) => handleChange('gender', e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <select
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.county || ''}
        onChange={(e) => handleChange('county', e.target.value)}
        required
      >
        <option value="">Select County</option>
        <option value="Nairobi">Nairobi</option>
        <option value="Mombasa">Mombasa</option>
        <option value="Kiambu">Kiambu</option>
        <option value="Nakuru">Nakuru</option>
        <option value="Machakos">Machakos</option>
        <option value="Kisumu">Kisumu</option>
        <option value="Uasin Gishu">Uasin Gishu</option>
      </select>
      <input
        type="text"
        placeholder="NHIF Number"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.nhifNumber || ''}
        onChange={(e) => handleChange('nhifNumber', e.target.value)}
      />
      <input
        type="text"
        placeholder="Next of Kin (Name - Phone)"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.nextOfKin || ''}
        onChange={(e) => handleChange('nextOfKin', e.target.value)}
      />
      <textarea
        placeholder="Medical History"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows="3"
        value={formData.medicalHistory || ''}
        onChange={(e) => handleChange('medicalHistory', e.target.value)}
      />
    </>
  );
};

export default PatientForm;