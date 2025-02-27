import React from "react";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Sidebar</h1>
      <ul>
        <li className="mb-2">
          <a href="/" className="hover:text-gray-400">Home</a>
        </li>
        <li className="mb-2">
          <a href="/auth" className="hover:text-gray-400">Auth</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-400">Settings</a>
        </li>
      </ul>
    </div>
  );
}