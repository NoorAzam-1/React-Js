"use client"
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

// Example:
// API Calling, Login, Data Fetching, Timer, Local Storage, 

useEffect(() => {
    // jab bhi component render hoga
    console.log("useEffect Running");

  }, [count]);

  return (

    <div className="h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-90">

        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          {count}
        </h1>

        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-3 bg-green-500 text-white rounded-lg"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;