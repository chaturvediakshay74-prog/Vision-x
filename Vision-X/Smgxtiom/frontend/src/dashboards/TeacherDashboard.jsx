import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Video,
  Users,
  FileText,
  BarChart3,
  Calendar,
  Upload,
  Settings,
  Home,
  Radio,
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

// Teacher sections
import TeacherHome from './Teacher/TeacherHome';
import LiveClass from './Teacher/LiveClass';
import ManageCourses from './Teacher/ManageCourses';
import UploadMaterials from './Teacher/UploadMaterials';
import StudentManagement from './Teacher/StudentManagement';
import AttendanceManagement from './Teacher/AttendanceManagement';
import ExamManagement from './Teacher/ExamManagement';

const menuItems = [
  { id: 1, icon: Home, label: 'Dashboard', path: '/teacher' },
  { id: 2, icon: Radio, label: 'Live Class', path: '/teacher/live-class' },
  { id: 3, icon: Video, label: 'My Courses', path: '/teacher/courses' },
  { id: 4, icon: Upload, label: 'Upload Materials', path: '/teacher/upload' },
  { id: 5, icon: Users, label: 'Students', path: '/teacher/students' },
  { id: 6, icon: BarChart3, label: 'Attendance', path: '/teacher/attendance' },
  { id: 7, icon: FileText, label: 'Exams & Tests', path: '/teacher/exams' },
  { id: 8, icon: Settings, label: 'Settings', path: '/teacher/settings' },
];

export default function TeacherDashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-dark">
      <Sidebar menuItems={menuItems} role="teacher" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <Routes>
            <Route index element={<TeacherHome />} />
            <Route path="live-class" element={<LiveClass />} />
            <Route path="courses" element={<ManageCourses />} />
            <Route path="upload" element={<UploadMaterials />} />
            <Route path="students" element={<StudentManagement />} />
            <Route path="attendance" element={<AttendanceManagement />} />
            <Route path="exams" element={<ExamManagement />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
