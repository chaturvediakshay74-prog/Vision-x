import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Users, FileText, BarChart3 } from 'lucide-react';

export default function TeacherHome() {
  const stats = [
    { icon: Users, label: 'Total Students', value: '245', color: 'bg-blue-100 text-blue-600' },
    { icon: FileText, label: 'Courses', value: '5', color: 'bg-purple-100 text-purple-600' },
    { icon: BarChart3, label: 'Avg Attendance', value: '87%', color: 'bg-green-100 text-green-600' },
    { icon: Radio, label: 'Live Classes', value: '3', color: 'bg-orange-100 text-orange-600' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-2">Welcome Back, Teacher! 👨‍🏫</h1>
        <p className="opacity-90">Manage your courses and engage with your students</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card p-6"
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card p-6"
      >
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition font-semibold">
            🔴 Start Live Class
          </button>
          <button className="p-4 border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition font-semibold">
            📚 Create Assignment
          </button>
          <button className="p-4 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition font-semibold">
            📊 View Analytics
          </button>
        </div>
      </motion.div>

      {/* Upcoming Classes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card p-6"
      >
        <h2 className="text-xl font-bold mb-4">Upcoming Classes</h2>
        <div className="space-y-3">
          {[
            { course: 'Python Fundamentals', time: 'Today at 2:00 PM', students: 45 },
            { course: 'Web Development', time: 'Tomorrow at 10:00 AM', students: 38 },
            { course: 'React Mastery', time: 'Mar 15 at 3:00 PM', students: 32 },
          ].map((cls, i) => (
            <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-darkAlt rounded-lg">
              <div>
                <p className="font-bold">{cls.course}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cls.time}</p>
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:shadow-md transition">
                Join
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
