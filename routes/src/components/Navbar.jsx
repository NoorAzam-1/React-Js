import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex gap-6 text-white">
        <li>
          <Link to="/" className="hover:text-amber-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-amber-400">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-amber-400">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
