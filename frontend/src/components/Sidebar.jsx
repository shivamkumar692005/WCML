import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Sidebar</h1>
      <ul>
        <li className="mb-2">
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li className="mb-2">
            <Link to="/auth" className="hover:text-gray-400">Auth</Link>
        </li>
        <li className="mb-2">
        <Link to="/" className="hover:text-gray-400">Settings</Link>
        </li>
      </ul>
    </div>
  );
}