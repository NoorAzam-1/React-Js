import { useState, useRef } from 'react';

export default function Contact() {
  const [count, setCount] = useState(0);
  const renders = useRef(0); // Render count track karne ke liye

  renders.current++; // Jab bhi component render hoga, yeh badhega lekin re-trigger nahi karega

  return (
    <div>
      <p>Count: {count}</p>
      <p>Component isne baar render hua: {renders.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}