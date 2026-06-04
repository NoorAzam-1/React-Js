import React from "react";

const Child = ({ handleClick }) => {

  console.log("Child Rendered");

  return (

    <button
      onClick={handleClick}
      className="px-5 py-3 bg-blue-500 text-white rounded-lg"
    >
      Click
    </button>

  );
};

export default React.memo(Child);