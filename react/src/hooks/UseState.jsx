"use client"
import React, { useState } from "react";

const Counter = () => {
  // count = current state value
  // setCount = function to update/change state
  // useState(0) = initial value of state
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <div className="w-90 bg-white p-8 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-6">
          Counter App
        </h1>
        <h2 className="text-7xl font-bold text-blue-600 mb-8">
          {count}
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={decrementHandler}
            className="px-5 py-3 bg-red-500 hover:bg-red-600 text-white text-2xl rounded-lg transition-all duration-300"
          >
            -
          </button>

         <button
            onClick={incrementHandler}
            className="px-5 py-3 bg-green-500 hover:bg-green-600 text-white text-2xl rounded-lg transition-all duration-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
