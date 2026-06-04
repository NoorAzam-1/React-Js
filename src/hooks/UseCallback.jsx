"use client";
import Child from "@/components/Child";
import React, { useCallback, useState } from "react";

const UseCallback = () => {
  // counter state
  const [count, setCount] = useState(0);

  // useCallback function ko memoize kar raha hai
  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-3xl mb-5 text-black">Count : {count}</h1>

        {/* count increase */}
        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-3 bg-green-500 text-white rounded-lg mr-3"
        >
          Increase
        </button>

        <Child handleClick={handleClick} />
      </div>
    </div>
  );
};

export default UseCallback;
