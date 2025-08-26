import React, { useState, useEffect } from 'react';
import { Calendar, Users, FileText, CreditCard, Package, Plus, Search, Edit, Trash2, Save, X, Phone, MapPin, User, Clock, AlertCircle } from 'lucide-react';
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import DashboardView from './views/DashboardView';
import PatientView from './views/PatientView';
import AppointmentView from './views/AppointmentView';
import InventoryView from './views/InventoryView';
import BillingView from './views/BillingView';
import Modal from './common/Modal';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { sampleData } from '../utils/sampleData';

const HospitalManagement = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [patients, setPatients] = useLocalStorage('hospital_patients', sampleData.patients);
  const [appointments, setAppointments] = useLocalStorage('hospital_appointments', sampleData.appointments);
  const [inventory, setInventory] = useLocalStorage('hospital_inventory', sampleData.inventory);
  const [bills, setBills] = useLocalStorage('hospital_bills', sampleData.bills);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = (type, item = null) => {
    setModalType(type);
    setEditingItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
  };

  const saveItem = (formData) => {
    if (modalType === 'patient') {
      if (editingItem) {
        setPatients(patients.map(p => p.id === editingItem.id ? { ...formData, id: editingItem.id } : p));
      } else {
        setPatients([...patients, { ...formData, id: Date.now() }]);
      }
    } else if (modalType === 'appointment') {
      if (editingItem) {
        setAppointments(appointments.map(a => a.id === editingItem.id ? { ...formData, id: editingItem.id } : a));
      } else {
        setAppointments([...appointments, { ...formData, id: Date.now() }]);
      }
    } else if (modalType === 'inventory') {
      if (editingItem) {
        setInventory(inventory.map(i => i.id === editingItem.id ? { ...formData, id: editingItem.id } : i));
      } else {
        setInventory([...inventory, { ...formData, id: Date.now() }]);
      }
    }
    closeModal();
  };

  const deleteItem = (type, id) => {
    if (type === 'patient') {
      setPatients(patients.filter(p => p.id !== id));
    } else if (type === 'appointment') {
      setAppointments(appointments.filter(a => a.id !== id));
    } else if (type === 'inventory') {
      setInventory(inventory.filter(i => i.id !== id));
    }
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all hospital data? This action cannot be undone.')) {
      localStorage.removeItem('hospital_patients');
      localStorage.removeItem('hospital_appointments');
      localStorage.removeItem('hospital_inventory');
      localStorage.removeItem('hospital_bills');
      
      setPatients([]);
      setAppointments([]);
      setInventory([]);
      setBills([]);
      
      alert('All data has been cleared successfully.');
    }
  };

  const exportData = () => {
    const data = {
      patients,
      appointments,
      inventory,
      bills,
      exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hospital-data-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const props = {
    patients,
    appointments,
    inventory,
    bills,
    openModal,
    deleteItem,
    searchTerm,
    setSearchTerm,
    clearAllData,
    exportData
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {activeTab === 'dashboard' && <DashboardView {...props} />}
        {activeTab === 'patients' && <PatientView {...props} />}
        {activeTab === 'appointments' && <AppointmentView {...props} />}
        {activeTab === 'inventory' && <InventoryView {...props} />}
        {activeTab === 'billing' && <BillingView {...props} />}
      </main>

      <Modal
        showModal={showModal}
        modalType={modalType}
        editingItem={editingItem}
        closeModal={closeModal}
        saveItem={saveItem}
        patients={patients}
      />

      <Footer />
    </div>
  );
};

export default HospitalManagement;