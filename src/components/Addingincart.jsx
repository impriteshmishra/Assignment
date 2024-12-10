'use client';
import React, { useState } from 'react';

const Addingincart = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div className="flex items-center space-x-4 rounded w-1/5 border-2">
      <button 
        onClick={decrement} 
        className="px-4 py-2  text-black  hover:bg-gray-200"
      >
        -
      </button>
      <span className="text-xl font-normal">{count}</span>
      <button 
        onClick={increment} 
        className="px-4 py-2  text-black  hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

export default Addingincart;