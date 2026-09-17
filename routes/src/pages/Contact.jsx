import { useState } from "react";

export default function Contact() {
  const [count, setCount] = useState(0);

  console.log("Component rendered");

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}