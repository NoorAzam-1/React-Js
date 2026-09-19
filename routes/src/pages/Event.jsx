import { useState } from "react";

export default function Event() {
  const [log, setLog] = useState([]);
  const [hoverColor, setHoverColor] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const addLog = (msg) => {
    setLog((prev) => [...prev.slice(-6), { id: Date.now(), text: msg }]);
  };

  const clearLog = () => setLog([]);

  const handleClick = () => addLog("Button clicked!");

  const handleDelete = (id) => addLog(`Deleted item with id: ${id}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addLog(`Form submitted: ${formData.name} - ${formData.email}`);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 md:p-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
          React Events
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          React me events handle karna seekho — click, hover, keyboard, form
          submissions aur bahut kuch interactive examples ke saath.
        </p>
      </div>

      {/* Live Console Log */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="bg-gray-950 border border-gray-700 rounded-xl p-4 shadow-lg shadow-blue-500/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-2 text-sm text-gray-400 font-mono">
                Console Output
              </span>
            </div>
            <button
              onClick={clearLog}
              className="text-xs text-gray-500 hover:text-red-400 transition cursor-pointer"
            >
              Clear
            </button>
          </div>
          <div className="bg-black rounded-lg p-3 min-h-[60px] max-h-[150px] overflow-y-auto font-mono text-sm">
            {log.length === 0 ? (
              <span className="text-gray-600">
                // Events trigger karne par output yahan dikhega...
              </span>
            ) : (
              log.map((entry, i) => (
                <div key={entry.id} className="text-green-400">
                  <span className="text-gray-500">{">"} </span>
                  {entry.text}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section 1: onClick Event */}
        <Section
          title="1. onClick Event"
          subtitle="Jab button ya koi element pe click hota hai"
          color="blue"
        >
          <CodeBlock>
            {`<button onClick={handleClick}>Click me</button>

{/* Arrow function use karo agar data pass karna ho */}
<button onClick={() => handleDelete(42)}>Delete</button>`}
          </CodeBlock>
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={handleClick}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all duration-200 cursor-pointer shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-95"
            >
              Click Me
            </button>
            <button
              onClick={() => handleDelete(42)}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-500 rounded-lg font-medium transition-all duration-200 cursor-pointer shadow-lg shadow-red-500/25 hover:shadow-red-500/40 active:scale-95"
            >
              Delete Item #42
            </button>
          </div>
        </Section>

        {/* Section 2: Common Mistake */}
        <Section
          title="2. Common Mistake"
          subtitle="Function ko call mat karo — reference pass karo"
          color="red"
        >
          <CodeBlock variant="error">
            {`// ❌ WRONG — function turant call ho jayega!
<button onClick={handleClick()}>Click me</button>

// ✅ CORRECT — sirf reference pass ho raha hai
<button onClick={handleClick}>Click me</button>

// ✅ CORRECT — arrow function use karo
<button onClick={() => handleClick()}>Click me</button>`}
          </CodeBlock>
        </Section>

        {/* Section 3: Mouse Events */}
        <Section
          title="3. Mouse Events"
          subtitle="Mouse se related saare events"
          color="purple"
        >
          <CodeBlock>
            {`<button onDoubleClick={() => console.log("double clicked")}>
  Double Click
</button>

<div onMouseEnter={() => console.log("hovered")}>
  Hover me
</div>`}
          </CodeBlock>
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onDoubleClick={() => addLog("Double clicked!")}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition-all duration-200 cursor-pointer shadow-lg shadow-purple-500/25 active:scale-95"
            >
              Double Click Me
            </button>
            <div
              onMouseEnter={() => {
                setHoverColor(true);
                addLog("Mouse entered the box!");
              }}
              onMouseLeave={() => {
                setHoverColor(false);
                addLog("Mouse left the box!");
              }}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 cursor-pointer select-none ${
                hoverColor
                  ? "bg-pink-500 scale-105 shadow-lg shadow-pink-500/40"
                  : "bg-gray-700"
              }`}
            >
              {hoverColor ? "You found me!" : "Hover Over Me"}
            </div>
          </div>
        </Section>

        {/* Section 4: Keyboard Events */}
        <Section
          title="4. Keyboard Events"
          subtitle="Keyboard inputs capture karo — keyDown aur keyUp"
          color="green"
        >
          <CodeBlock>
            {`<input onKeyDown={(e) => console.log(e.key)} />
<input onKeyUp={(e) => console.log(e.key)} />`}
          </CodeBlock>
          <div className="mt-4 space-y-3">
            <input
              onKeyDown={(e) => addLog(`Key Down: "${e.key}"`)}
              onKeyUp={(e) => addLog(`Key Up: "${e.key}"`)}
              placeholder="Type something... keys log me dikhenge"
              className="w-full px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition placeholder-gray-500"
            />
          </div>
        </Section>

        {/* Section 5: Form Events */}
        <Section
          title="5. Form Events"
          subtitle="Form submit, input change, focus aur blur events"
          color="yellow"
        >
          <CodeBlock>
            {`<form onSubmit={handleSubmit}>
  <input
    value={formData.name}
    onChange={(e) =>
      setFormData({ ...formData, name: e.target.value })
    }
  />
  <button type="submit">Submit</button>
</form>`}
          </CodeBlock>
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              onFocus={() => addLog("Name input focused")}
              onBlur={() => addLog("Name input blurred")}
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/30 transition placeholder-gray-500"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              onFocus={() => addLog("Email input focused")}
              onBlur={() => addLog("Email input blurred")}
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/30 transition placeholder-gray-500"
            />
            <button
              type="submit"
              className="w-full px-5 py-2.5 bg-yellow-600 hover:bg-yellow-500 rounded-lg font-medium transition-all duration-200 cursor-pointer shadow-lg shadow-yellow-500/25 active:scale-95"
            >
              Submit Form
            </button>
          </form>
        </Section>

        {/* Section 6: Clipboard & Change Events */}
        <Section
          title="6. Clipboard & Change Events"
          subtitle="Copy, paste aur onChange events handle karo"
          color="cyan"
        >
          <CodeBlock>
            {`<input onChange={(e) => console.log(e.target.value)} />
<input onCopy={() => console.log("copied")} />
<input onPaste={() => console.log("pasted")} />`}
          </CodeBlock>
          <div className="mt-4 space-y-3">
            <input
              onChange={(e) => addLog(`Input changed: "${e.target.value}"`)}
              placeholder="Type to see onChange in action"
              className="w-full px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition placeholder-gray-500"
            />
            <input
              onCopy={() => addLog("Text copied!")}
              onPaste={() => addLog("Text pasted!")}
              defaultValue="Copy or paste this text"
              className="w-full px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition text-center"
            />
          </div>
        </Section>

        {/* Section 7: Event Object */}
        <Section
          title="7. Event Object (e)"
          subtitle="Har event ka ek object hota hai jisme useful data hota hai"
          color="orange"
        >
          <CodeBlock>
            {`const handleClick = (e) => {
  console.log(e.target);      // konsa element click hua
  console.log(e.type);        // "click" type
  console.log(e.timeStamp);   // kab click hua
};`}
          </CodeBlock>
          <button
            onClick={(e) =>
              addLog(
                `target: ${e.target.tagName}, type: ${e.type}, time: ${Math.round(e.timeStamp)}ms`,
              )
            }
            className="mt-4 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 rounded-lg font-medium transition-all duration-200 cursor-pointer shadow-lg shadow-orange-500/25 active:scale-95"
          >
            Check Event Object
          </button>
        </Section>

        {/* Section 8: Event Bubbling */}
        <Section
          title="8. Event Bubbling"
          subtitle="Event parent tak propagate hota hai — stopPropagation se rok sakte ho"
          color="indigo"
        >
          <CodeBlock>
            {`// Parent pe event listener hai — child ka click bhi parent tak jaata hai
<div onClick={() => console.log("parent clicked")}>
  <button onClick={() => console.log("child clicked")}>
    Click me
  </button>
</div>

// stopPropagation use karo rokne ke liye
<button onClick={(e) => {
  e.stopPropagation();
  console.log("only child!");
}}>Click me</button>`}
          </CodeBlock>
          <div className="mt-4 space-y-3">
            <div
              onClick={() => addLog("Parent div clicked!")}
              className="p-4 bg-indigo-900/50 border border-indigo-700 rounded-xl cursor-pointer transition-all hover:bg-indigo-900/70"
            >
              <span className="text-sm text-indigo-300 block mb-2">
                Parent Div (click me)
              </span>
              <div className="flex gap-3">
                <button
                  onClick={() => addLog("Child button clicked! (bubbles up)")}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition cursor-pointer"
                >
                  Bubbles Up
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addLog("Child clicked — propagation stopped!");
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition cursor-pointer"
                >
                  Stop Propagation
                </button>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-500 text-sm">
        React Events Page — Teaching Example
      </div>
    </div>
  );
}

function Section({ title, subtitle, color, children }) {
  const colors = {
    blue: "border-blue-500/30 from-blue-500/10",
    red: "border-red-500/30 from-red-500/10",
    purple: "border-purple-500/30 from-purple-500/10",
    green: "border-green-500/30 from-green-500/10",
    yellow: "border-yellow-500/30 from-yellow-500/10",
    cyan: "border-cyan-500/30 from-cyan-500/10",
    orange: "border-orange-500/30 from-orange-500/10",
    indigo: "border-indigo-500/30 from-indigo-500/10",
  };

  return (
    <div
      className={`bg-linear-to-br ${colors[color]} bg-gray-900/80 border rounded-2xl p-6 backdrop-blur-sm`}
    >
      <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
      <p className="text-gray-400 text-sm mb-4">{subtitle}</p>
      {children}
    </div>
  );
}

function CodeBlock({ children, variant }) {
  return (
    <pre
      className={`text-sm rounded-xl p-4 overflow-x-auto font-mono leading-relaxed ${
        variant === "error"
          ? "bg-red-950/50 border border-red-800/50 text-red-300"
          : "bg-gray-950 border border-gray-800 text-gray-300"
      }`}
    >
      <code>{children}</code>
    </pre>
  );
}
