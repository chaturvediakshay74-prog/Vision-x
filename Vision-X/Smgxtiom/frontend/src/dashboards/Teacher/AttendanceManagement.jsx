import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AttendanceManagement() {
  const attendanceData = [
    { date: 'Mon', percentage: 95 },
    { date: 'Tue', percentage: 88 },
    { date: 'Wed', percentage: 92 },
    { date: 'Thu', percentage: 85 },
    { date: 'Fri', percentage: 90 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold">Attendance Management</h1>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6"
      >
        <h2 className="font-bold text-lg mb-4">Weekly Attendance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="percentage" fill="#667eea" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Mark Attendance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6"
      >
        <h2 className="font-bold text-lg mb-4">Mark Attendance for Today</h2>
        <div className="space-y-3">
          {[
            { id: 1, name: 'Alice Johnson', present: true },
            { id: 2, name: 'Bob Smith', present: false },
            { id: 3, name: 'Carol Davis', present: true },
            { id: 4, name: 'David Lee', present: true },
          ].map((student) => (
            <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-darkAlt rounded-lg">
              <p className="font-medium">{student.name}</p>
              <div className="flex gap-2">
                <button className={`px-4 py-1 rounded font-semibold transition ${student.present ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  ✓ Present
                </button>
                <button className={`px-4 py-1 rounded font-semibold transition ${!student.present ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  ✗ Absent
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold hover:shadow-lg transition">
          Save Attendance
        </button>
      </motion.div>
    </motion.div>
  );
}
