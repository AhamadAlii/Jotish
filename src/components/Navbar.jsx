import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
        <div className="font-bold text-lg">MyApp</div>
        <div className="ml-6 flex space-x-4">
          <Link to="/dashboard" className="hover:text-indigo-300">Dashboard</Link>
          <Link to="/list" className="hover:text-indigo-300">List</Link>
          <Link to="/map" className="hover:text-indigo-300">Map</Link>
          <Link to="/photo" className="hover:text-indigo-300">Photo</Link>
          <Link to="/chart" className="hover:text-indigo-300">Charts</Link>
        </div>
        <div className="ml-auto text-sm text-slate-400">Signed in as <span className="text-white ml-2">Demo</span></div>
      </div>
    </nav>
  );
}
