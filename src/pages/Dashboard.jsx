import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="text-sm text-slate-400">Overview</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/list" className="group card p-4 block transform transition duration-200 hover:scale-105 shadow-sm hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-slate-400">Employees</div>
              <div className="text-2xl font-bold mt-2">128</div>
            </div>

            <div className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
              ➜
            </div>
          </div>

          <div className="mt-4 text-indigo-300 group-hover:underline">View list</div>
        </Link>

        <Link to="/map" className="group card p-4 block transform transition duration-200 hover:scale-105 shadow-sm hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-slate-400">Map</div>
              <div className="text-2xl font-bold mt-2">Global</div>
            </div>

            <div className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">➜</div>
          </div>

          <div className="mt-4 text-indigo-300 group-hover:underline">Open map</div>
        </Link>

        <Link to="/photo" className="group card p-4 block transform transition duration-200 hover:scale-105 shadow-sm hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-slate-400">Photos</div>
              <div className="text-2xl font-bold mt-2">12</div>
            </div>

            <div className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">➜</div>
          </div>

          <div className="mt-4 text-indigo-300 group-hover:underline">Open camera</div>
        </Link>
      </div>
    </div>
  );
}
