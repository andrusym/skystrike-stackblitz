import React from 'react';
import Sidebar from './Sidebar';
import './global.css'; // restored working styles

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-full grid grid-cols-[240px_1fr] bg-gray-50 text-gray-900">
      <aside className="h-full bg-white shadow border-r border-gray-200">
        <Sidebar />
      </aside>
      <main className="overflow-y-auto p-6">{children}</main>
    </div>
  );
};

export default Layout;
