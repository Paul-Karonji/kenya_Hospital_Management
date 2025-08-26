import React from 'react';

const StatCard = ({ title, value, icon: Icon, color }) => {
  const colorClasses = {
    blue: 'bg-gradient-to-r from-blue-500 to-blue-600 text-blue-100',
    green: 'bg-gradient-to-r from-green-500 to-green-600 text-green-100',
    yellow: 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-yellow-100',
    purple: 'bg-gradient-to-r from-purple-500 to-purple-600 text-purple-100'
  };

  const iconColorClasses = {
    blue: 'text-blue-200',
    green: 'text-green-200',
    yellow: 'text-yellow-200',
    purple: 'text-purple-200'
  };

  return (
    <div className={`${colorClasses[color]} text-white p-6 rounded-lg shadow-lg`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={colorClasses[color].split(' ')[4]}>{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <Icon className={`h-12 w-12 ${iconColorClasses[color]}`} />
      </div>
    </div>
  );
};

export default StatCard;