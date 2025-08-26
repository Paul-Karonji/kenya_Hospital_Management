import React from 'react';
import { Users, Calendar, Package, CreditCard, Trash2 } from 'lucide-react';
import StatCard from '../common/StatCard';
import DataManagement from '../common/DataManagement';

const DashboardView = ({ patients, appointments, inventory, bills, clearAllData, exportData }) => {
  const stats = [
    {
      title: 'Total Patients',
      value: patients.length,
      icon: Users,
      color: 'blue'
    },
    {
      title: "Today's Appointments",
      value: appointments.filter(a => a.date === new Date().toISOString().split('T')[0]).length,
      icon: Calendar,
      color: 'green'
    },
    {
      title: 'Low Stock Items',
      value: inventory.filter(i => i.quantity <= i.minStock).length,
      icon: Package,
      color: 'yellow'
    },
    {
      title: 'Pending Bills',
      value: `KES ${bills.filter(b => b.status === 'Pending').reduce((sum, bill) => sum + bill.patientPays, 0).toLocaleString()}`,
      icon: CreditCard,
      color: 'purple'
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <DataManagement exportData={exportData} clearAllData={clearAllData} />

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Patients</h3>
          <div className="space-y-3">
            {patients.slice(-3).reverse().map(patient => (
              <div key={patient.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{patient.name}</p>
                  <p className="text-sm text-gray-500">{patient.phone}</p>
                </div>
                <span className="text-sm text-gray-500">{patient.lastVisit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Appointments</h3>
          <div className="space-y-3">
            {appointments.filter(a => new Date(a.date) >= new Date()).slice(0, 3).map(appointment => (
              <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{appointment.patientName}</p>
                  <p className="text-sm text-gray-500">{appointment.doctor} - {appointment.department}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                  <p className="text-sm text-gray-500">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;