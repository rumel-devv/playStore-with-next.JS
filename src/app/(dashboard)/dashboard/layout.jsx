import Link from 'next/link';
import React from 'react';
import { FaChartPie, FaCog, FaHome, FaMobileAlt } from 'react-icons/fa';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex justify-between px-15'>
              <div className="h-screen w-64 bg-white shadow-lg border-r flex flex-col">
      
      {/* Logo / Title */}
      <div className="p-5 border-b">
        <h1 className="text-2xl font-bold text-purple-600">
          App Dashboard
        </h1>
        <p className="text-sm text-gray-500">Manage your apps</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        
        <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition">
          <FaHome />
          <span>Home</span>
        </Link>

        <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 text-purple-600 font-medium">
          <FaChartPie />
          <span>Dashboard</span>
        </Link>

        <Link href="/apps" className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-600 transition">
          <FaMobileAlt />
          <span>Apps</span>
        </Link>

        <Link href="/settings" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition">
          <FaCog/>
          <span>Settings</span>
        </Link>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t text-sm text-gray-500">
        © 2026 App Manager
      </div>
        </div>
               {children}
        </div>
    );
};

export default DashboardLayout;