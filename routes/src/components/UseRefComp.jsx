import { useEffect, useRef, useState } from "react";

export default function UseRefComp() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("tarun");
  const refCount = useRef(0);
  const previousCount = useRef(0);
  const inputRef = useRef(null);
  console.log("inputRef",inputRef.current);
  let normalCount = 0;

  function handleNormalIncrease() {
    normalCount += 1;
    console.log("Normal:", normalCount);
  }

  function handleStateIncrease() {
    setCount((prev) => prev + 1);
  }

  function handleRefIncrease() {
    refCount.current += 1;
    console.log("Ref:", refCount.current);
  }

    function handleFocus() {
      inputRef.current.focus();
    }

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-md">
        <h1 className="mb-2 text-3xl font-bold">useRef Demo</h1>

        {/* Normal variable */}
        <div className="mb-4 rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Normal Variable</h2>

          <p className="my-2">
            Normal Count: <strong>{normalCount}</strong>
          </p>

          <button
            onClick={handleNormalIncrease}
            className="rounded-lg bg-orange-500 px-4 py-2 text-white"
          >
            Increase Normal
          </button>

          <p className="mt-2 text-sm text-gray-500">
            Re-render hone par reset ho jayega.
          </p>
        </div>

        {/* useRef */}
        <div className="mb-4 rounded-lg border p-4">
          <h2 className="text-xl font-semibold">useRef</h2>

          <p className="my-2">
            Ref Count: <strong>{refCount.current}</strong>
          </p>

          <button
            onClick={handleRefIncrease}
            value={count}
            className="rounded-lg bg-green-600 px-4 py-2 text-white"
          >
            Increase Ref
          </button>

          <p className="mt-2 text-sm text-gray-500">
            Ref change se component re-render nahi hota.
          </p>
        </div>

        {/* DOM ref */}
        <div className="rounded-lg border p-4">
          <h2 className="mb-3 text-xl font-semibold">
            DOM useRef
          </h2>

          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
              className="flex-1 rounded-lg border px-3 py-2"
            />

            <button
              onClick={handleFocus}
              className="rounded-lg bg-purple-600 px-4 py-2 text-white"
            >
              Focus
            </button>
          </div>
        </div>

        {/* useState */}
        <div className="mb-4 rounded-lg border p-4">
          <h2 className="text-xl font-semibold">useState</h2>

          <p className="my-2">
            Current Count: <strong>{count}</strong>
          </p>

          <p className="mb-3">
            Previous Count: <strong>{previousCount.current}</strong>
          </p>

          <button
            onClick={handleStateIncrease}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            Increase State
          </button>
        </div>
      </div>
    </div>
  );
}
