import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  BarChart3,
  Settings,
  Lock,
  BookOpen,
  Home,
  Camera,
  Trash2,
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

// Admin sections
import AdminHome from './Admin/AdminHome';
import UserManagement from './Admin/UserManagement';
import CourseManagement from './Admin/CourseManagement';
import SecuritySettings from './Admin/SecuritySettings';
import CameraManagement from './Admin/CameraManagement';
import Analytics from './Admin/Analytics';

const menuItems = [
  { id: 1, icon: Home, label: 'Dashboard', path: '/admin' },
  { id: 2, icon: Users, label: 'User Management', path: '/admin/users' },
  { id: 3, icon: BookOpen, label: 'Courses', path: '/admin/courses' },
  { id: 4, icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
  { id: 5, icon: Camera, label: 'Cameras', path: '/admin/cameras' },
  { id: 6, icon: Lock, label: 'Security', path: '/admin/security' },
  { id: 7, icon: Settings, label: 'Settings', path: '/admin/settings' },
];

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-dark">
      <Sidebar menuItems={menuItems} role="admin" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <Routes>
            <Route index element={<AdminHome />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="courses" element={<CourseManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="cameras" element={<CameraManagement />} />
            <Route path="security" element={<SecuritySettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
