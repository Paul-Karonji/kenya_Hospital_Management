import React from 'react';

const StatusBadge = ({ status, variant = 'default' }) => {
  const getStatusClasses = () => {
    if (variant === 'success') {
      return 'bg-green-100 text-green-800';
    }
    if (variant === 'error') {
      return 'bg-red-100 text-red-800';
    }

    // Default appointment status colors
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusClasses()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;