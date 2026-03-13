import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../contexts/authStore';
import { LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-darkAlt shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold gradient-text">
          Smgxtiom
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {user?.fullName} ({user?.role})
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold"
              >
                <LogOut size={20} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-secondary">
                Sign In
              </Link>
              <Link to="/register" className="btn-primary">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden p-4 border-t dark:border-gray-700">
          {isAuthenticated ? (
            <>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {user?.fullName} ({user?.role})
              </p>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 text-red-500 hover:text-red-600 font-semibold py-2"
              >
                <LogOut size={20} /> Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Link to="/login" className="btn-secondary text-center">
                Sign In
              </Link>
              <Link to="/register" className="btn-primary text-center">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
