import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X, LogOut, Moon, Sun } from 'lucide-react';
import { useAuthStore } from '../contexts/authStore';

export default function Sidebar({ menuItems, role }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={`flex h-screen bg-gray-100 dark:bg-dark`}>
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-primary to-secondary text-white transition-all duration-300 fixed h-screen shadow-lg z-40`}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          {isOpen && <h1 className="text-2xl font-bold">Smgxtiom</h1>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-white/20 rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* User Info */}
        <div className="px-4 py-4 border-b border-white/20">
          <div
            className={`flex items-center gap-3 ${
              isOpen ? '' : 'justify-center'
            }`}
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
              {user?.fullName?.charAt(0) || 'U'}
            </div>
            {isOpen && (
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">
                  {user?.fullName || 'User'}
                </p>
                <p className="text-xs text-white/70 capitalize">{role}</p>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="mt-4 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="flex items-center gap-4 px-4 py-3 hover:bg-white/20 transition-colors group"
              title={isOpen ? '' : item.label}
            >
              <item.icon size={24} className="flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-white/20 p-4 space-y-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-full flex items-center gap-4 px-4 py-3 hover:bg-white/20 rounded-lg transition-colors"
            title={isOpen ? '' : 'Toggle Dark Mode'}
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
            {isOpen && <span className="text-sm font-medium">Dark Mode</span>}
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 hover:bg-red-500/20 rounded-lg transition-colors text-red-200"
            title={isOpen ? '' : 'Logout'}
          >
            <LogOut size={24} />
            {isOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${isOpen ? 'ml-64' : 'ml-20'} flex-1 overflow-auto transition-all duration-300`}>
        {/* Top Bar */}
        <div className="bg-white dark:bg-darkAlt shadow-sm sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
            {role} Dashboard
          </h2>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-dark rounded-lg">
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              🔔
            </button>
          </div>
        </div>

        {/* Page Placeholder */}
        <div className="p-6">
          {/* Content will be rendered here */}
        </div>
      </div>
    </div>
  );
}
