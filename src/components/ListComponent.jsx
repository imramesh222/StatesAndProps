import React from 'react';

const ListComponent = () => {
  const fruits = ['Apple', 'Orange', 'Mango'];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Fruits List</h2>
      <ul className="list-disc list-inside space-y-2">
        {fruits.map((fruit, index) => (
          <li key={index} className="text-lg text-gray-700 bg-white p-2 rounded-lg shadow-sm">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
