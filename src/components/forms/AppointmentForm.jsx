import React from 'react';

const AppointmentForm = ({ formData, handleChange, patients }) => {
  return (
    <>
      <select
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.patientId || ''}
        onChange={(e) => {
          const patient = patients.find(p => p.id === parseInt(e.target.value));
          handleChange('patientId', parseInt(e.target.value));
          handleChange('patientName', patient?.name || '');
        }}
        required
      >
        <option value="">Select Patient</option>
        {patients.map(patient => (
          <option key={patient.id} value={patient.id}>{patient.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Doctor Name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.doctor || ''}
        onChange={(e) => handleChange('doctor', e.target.value)}
        required
      />
      <select
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.department || ''}
        onChange={(e) => handleChange('department', e.target.value)}
        required
      >
        <option value="">Select Department</option>
        <option value="General Medicine">General Medicine</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Pediatrics">Pediatrics</option>
        <option value="Orthopedics">Orthopedics</option>
        <option value="Gynecology">Gynecology</option>
        <option value="Surgery">Surgery</option>
        <option value="Dentistry">Dentistry</option>
        <option value="Ophthalmology">Ophthalmology</option>
      </select>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.date || ''}
          onChange={(e) => handleChange('date', e.target.value)}
          required
        />
        <input
          type="time"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.time || ''}
          onChange={(e) => handleChange('time', e.target.value)}
          required
        />
      </div>
      <select
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.status || ''}
        onChange={(e) => handleChange('status', e.target.value)}
        required
      >
        <option value="">Select Status</option>
        <option value="Scheduled">Scheduled</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
      </select>
      <textarea
        placeholder="Reason for visit"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows="2"
        value={formData.reason || ''}
        onChange={(e) => handleChange('reason', e.target.value)}
      />
    </>
  );
};

export default AppointmentForm;