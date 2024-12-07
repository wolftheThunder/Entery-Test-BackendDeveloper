
import React from 'react';

function IteamList({ items }) {
  if (items.length === 0) {
    return <p className="text-center text-lg text-gray-500">No items available</p>;
  }

  return (
    <div className="mt-4">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 hover:border-blue-500 transition-all duration-200"
          >
            <span className="text-lg font-medium text-gray-700">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IteamList;
