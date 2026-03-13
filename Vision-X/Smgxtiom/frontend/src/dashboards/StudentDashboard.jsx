import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  BarChart3,
  FileText,
  Play,
  Settings,
  Award,
  Home,
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

// Student Dashboard Sections
import StudentHome from './Student/StudentHome';
import CoursesSection from './Student/CoursesSection';
import CoursePlayer from './Student/CoursePlayer';
import TimetableSection from './Student/TimetableSection';
import AttendanceSection from './Student/AttendanceSection';
import ExamResults from './Student/ExamResults';
import ProfilePage from './Student/ProfilePage';

const menuItems = [
  { id: 1, icon: Home, label: 'Dashboard', path: '/student' },
  { id: 2, icon: BookOpen, label: 'My Courses', path: '/student/courses' },
  { id: 3, icon: Play, label: 'Course Player', path: '/student/player' },
  { id: 4, icon: Calendar, label: 'Timetable', path: '/student/timetable' },
  { id: 5, icon: BarChart3, label: 'Attendance', path: '/student/attendance' },
  { id: 6, icon: Award, label: 'Exam Results', path: '/student/results' },
  { id: 7, icon: FileText, label: 'Assignments', path: '/student/assignments' },
  { id: 8, icon: Settings, label: 'Profile', path: '/student/profile' },
];

export default function StudentDashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-dark">
      <Sidebar menuItems={menuItems} role="student" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <Routes>
            <Route index element={<StudentHome />} />
            <Route path="courses" element={<CoursesSection />} />
            <Route path="player" element={<CoursePlayer />} />
            <Route path="timetable" element={<TimetableSection />} />
            <Route path="attendance" element={<AttendanceSection />} />
            <Route path="results" element={<ExamResults />} />
            <Route path="assignments" element={<AssignmentsSection />} />
            <Route path="profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function AssignmentsSection() {
  const assignments = [
    {
      id: 1,
      title: 'Python Basics Project',
      course: 'Python Fundamentals',
      dueDate: '2024-03-20',
      submitted: true,
      grade: 95,
    },
    {
      id: 2,
      title: 'React Component Assignment',
      course: 'React Mastery',
      dueDate: '2024-03-22',
      submitted: false,
      grade: null,
    },
    {
      id: 3,
      title: 'Data Analysis Challenge',
      course: 'Data Science 101',
      dueDate: '2024-03-25',
      submitted: false,
      grade: null,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold">Assignments</h1>

      <div className="grid gap-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="card p-6 hover:shadow-lg transition-smooth">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-lg">{assignment.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.course}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  assignment.submitted
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                }`}
              >
                {assignment.submitted ? 'Submitted' : 'Pending'}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Due: {new Date(assignment.dueDate).toLocaleDateString()}
              </p>
              <div className="flex gap-2">
                {assignment.submitted && assignment.grade && (
                  <span className="text-lg font-bold text-green-500">{assignment.grade}%</span>
                )}
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:shadow-md transition-smooth">
                  {assignment.submitted ? 'View' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
