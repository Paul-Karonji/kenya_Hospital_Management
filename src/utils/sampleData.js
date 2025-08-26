export const sampleData = {
  patients: [
    {
      id: 1,
      name: 'Grace Wanjiku',
      idNumber: '12345678',
      phone: '0712345678',
      age: 34,
      gender: 'Female',
      county: 'Nairobi',
      nhifNumber: 'NHIF001234',
      nextOfKin: 'John Wanjiku - 0723456789',
      medicalHistory: 'Hypertension',
      lastVisit: '2025-01-15'
    },
    {
      id: 2,
      name: 'James Kipchoge',
      idNumber: '87654321',
      phone: '0723456789',
      age: 28,
      gender: 'Male',
      county: 'Nakuru',
      nhifNumber: 'NHIF005678',
      nextOfKin: 'Mary Kipchoge - 0734567890',
      medicalHistory: 'No known allergies',
      lastVisit: '2025-01-10'
    }
  ],

  appointments: [
    {
      id: 1,
      patientId: 1,
      patientName: 'Grace Wanjiku',
      doctor: 'Dr. Sarah Mutua',
      department: 'Cardiology',
      date: '2025-01-20',
      time: '10:00 AM',
      status: 'Scheduled',
      reason: 'Routine Checkup'
    },
    {
      id: 2,
      patientId: 2,
      patientName: 'James Kipchoge',
      doctor: 'Dr. Peter Kamau',
      department: 'General Medicine',
      date: '2025-01-18',
      time: '2:00 PM',
      status: 'Confirmed',
      reason: 'Fever and headache'
    }
  ],

  inventory: [
    {
      id: 1,
      name: 'Panadol (500mg)',
      category: 'Medication',
      quantity: 500,
      minStock: 100,
      supplier: 'Pharmaceutical Access Ltd',
      price: 2.50,
      expiry: '2025-12-31'
    },
    {
      id: 2,
      name: 'Surgical Gloves',
      category: 'Medical Supplies',
      quantity: 200,
      minStock: 50,
      supplier: 'Medical Supplies Kenya',
      price: 1.20,
      expiry: '2026-06-30'
    }
  ],

  bills: [
    {
      id: 1,
      patientId: 1,
      patientName: 'Grace Wanjiku',
      services: 'Consultation, Blood Test',
      amount: 2500,
      nhifCovered: 1500,
      patientPays: 1000,
      date: '2025-01-15',
      status: 'Paid'
    },
    {
      id: 2,
      patientId: 2,
      patientName: 'James Kipchoge',
      services: 'Consultation, Medication',
      amount: 1800,
      nhifCovered: 1200,
      patientPays: 600,
      date: '2025-01-10',
      status: 'Pending'
    }
  ]
};