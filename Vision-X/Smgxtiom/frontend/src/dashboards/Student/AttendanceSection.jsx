import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, CheckCircle } from 'lucide-react';

export default function AttendanceSection() {
  const [selectedMonth, setSelectedMonth] = useState('March');

  const attendanceData = {
    'March': [
      { date: '1', status: 'present', subject: 'Python Fundamentals' },
      { date: '2', status: 'present', subject: 'Web Development' },
      { date: '3', status: 'absent', subject: 'React Mastery' },
      { date: '4', status: 'present', subject: 'Data Science' },
      { date: '5', status: 'present', subject: 'JavaScript' },
      { date: '6', status: 'leave', subject: 'UI/UX Design' },
      { date: '7', status: 'present', subject: 'Python Fundamentals' },
      { date: '8', status: 'present', subject: 'Web Development' },
      { date: '9', status: 'present', subject: 'React Mastery' },
      { date: '10', status: 'present', subject: 'Data Science' },
      { date: '11', status: 'absent', subject: 'JavaScript' },
      { date: '12', status: 'present', subject: 'UI/UX Design' },
      { date: '13', status: 'present', subject: 'Python Fundamentals' },
    ],
  };

  const stats = {
    totalClasses: 45,
    present: 40,
    absent: 3,
    leave: 2,
    percentage: 88.9,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">Attendance Report</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your attendance and performance tracking
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: 'Total Classes', value: stats.totalClasses, color: 'bg-blue-100 text-blue-600' },
          { label: 'Present', value: stats.present, color: 'bg-green-100 text-green-600' },
          { label: 'Absent', value: stats.absent, color: 'bg-red-100 text-red-600' },
          { label: 'Leave', value: stats.leave, color: 'bg-yellow-100 text-yellow-600' },
          { label: 'Percentage', value: `${stats.percentage}%`, color: 'bg-purple-100 text-purple-600' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`${stat.color} rounded-lg p-4 text-center`}
          >
            <p className="text-sm font-semibold opacity-75">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Month Selector */}
      <div className="flex gap-2">
        {['January', 'February', 'March'].map((month) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedMonth === month
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                : 'bg-white dark:bg-darkAlt hover:shadow-md'
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Attendance Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card p-6"
      >
        <h2 className="font-bold text-lg mb-4">Daily Attendance</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {attendanceData[selectedMonth].map((day, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-4 rounded-lg text-center cursor-pointer transition-all ${
                day.status === 'present'
                  ? 'bg-green-100 dark:bg-green-900 border-2 border-green-500'
                  : day.status === 'absent'
                  ? 'bg-red-100 dark:bg-red-900 border-2 border-red-500'
                  : 'bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-500'
              }`}
              title={day.subject}
            >
              <p className="font-bold text-lg">{day.date}</p>
              <p className="text-xs font-semibold capitalize">
                {day.status === 'present' ? '✓ Present' : day.status === 'absent' ? '✗ Absent' : '📝 Leave'}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Legend */}
      <div className="card p-6">
        <h3 className="font-bold mb-4">Legend</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { status: 'present', color: 'bg-green-500', label: 'Present' },
            { status: 'absent', color: 'bg-red-500', label: 'Absent' },
            { status: 'leave', color: 'bg-yellow-500', label: 'Leave' },
          ].map((legend) => (
            <div key={legend.status} className="flex items-center gap-2">
              <div className={`w-4 h-4 ${legend.color} rounded`}></div>
              <span className="text-sm font-medium">{legend.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
