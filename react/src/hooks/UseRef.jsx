"use client";
import React, { useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const refCount = useRef(0);
  // DOM element access karne
  // value store karne
  // re-render bina data save karne

  return (
    <div className="h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          useState vs useRef
        </h1>
        <div className="bg-blue-50 rounded-2xl p-5 mb-6 shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            State Count
          </h2>

          <p className="text-4xl font-bold text-gray-800 mb-3">{count}</p>

          <button
            onClick={() => {
              setCount(count + 1);
              console.log("Count Value:", count);
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-xl font-semibold cursor-pointer"
          >
            Increase State
          </button>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 shadow">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">
            Ref Count
          </h2>

          <p className="text-4xl font-bold text-gray-800 mb-4">
            {refCount.current}
          </p>

          <button
            onClick={() => {
              refCount.current++;
              console.log("Ref Value:", refCount.current);
            }}
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white py-3 rounded-xl font-semibold cursor-pointer"
          >
            Increase Ref
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;

// "use client";
// import React, { useRef } from "react";
// const App = () => {
//   const inputRef = useRef("asdfgh");
//   const focusInput = () => {
//     inputRef.current.focus();
//     console.log("inpt",inputRef.current.value)
//   };

//   return (

//     <div className="h-screen flex justify-center items-center bg-slate-100">
//       <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
//         <input
//           ref={inputRef}
//           type="text"
//           placeholder="Enter Name"
//           className="border p-3 rounded-lg outline-none text-black"
//         />
//         <button
//           onClick={focusInput}
//           className="ml-3 px-5 py-6 bg-blue-500 text-white rounded-lg cursor-pointer"
//         >
//           Focus Input
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
