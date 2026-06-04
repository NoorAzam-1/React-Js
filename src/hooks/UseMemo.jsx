"use client";
import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);

  function textChange() {
    setClick(!click);
  }

  const expensiveCalculation = () => {
    console.log("Calculation Running...");
    let total = 0;
    for (let i = 0; i < 100; i++) {
      total += i;
    }
    return total;
  };

  const result = useMemo(() => {
    console.log("use memo use")
    return expensiveCalculation();
  }, [count]);

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100 text-black">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center text-black">
        <h1 className="text-2xl mb-5 text-black">Count : {count}</h1>

        <h1 className="text-xl mb-5">Result : {result}</h1>

        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-3 bg-blue-500 text-white rounded-lg mr-3 cursor-pointer"
        >
          Increase
        </button>

        <button
          onClick={textChange}
          className="px-5 py-3 bg-blue-500 text-white rounded-lg mr-3 cursor-pointer"
        >
          Testing
        </button>
      </div>
    </div>
  );
};

export default UseMemo;
