import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BookOpen, Calendar, Award, TrendingUp } from 'lucide-react';

export default function StudentHome() {
  const attendanceData = [
    { name: 'Week 1', percentage: 95 },
    { name: 'Week 2', percentage: 88 },
    { name: 'Week 3', percentage: 92 },
    { name: 'Week 4', percentage: 85 },
  ];

  const stats = [
    { icon: BookOpen, label: 'Courses Enrolled', value: '5', color: 'bg-blue-100 text-blue-600' },
    { icon: TrendingUp, label: 'Learning Rate', value: '65%', color: 'bg-green-100 text-green-600' },
    { icon: Award, label: 'Certificate Earned', value: '3', color: 'bg-purple-100 text-purple-600' },
    { icon: Calendar, label: 'Days Streak', value: '12', color: 'bg-orange-100 text-orange-600' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-2">Welcome Back, Student! 👋</h1>
        <p className="opacity-90">Keep up the momentum. You're doing great!</p>
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-6"
        >
          <h2 className="text-xl font-bold mb-4">Attendance Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="percentage" fill="#667eea" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card p-6"
        >
          <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
          <div className="space-y-3">
            {[
              { title: 'Completed React Module', time: '2 hours ago' },
              { title: 'Submitted Python Assignment', time: '5 hours ago' },
              { title: 'Attended Live Class', time: '1 day ago' },
              { title: 'Earned Certificate', time: '3 days ago' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between pb-3 border-b dark:border-gray-700">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Upcoming Classes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card p-6"
      >
        <h2 className="text-xl font-bold mb-4">Upcoming Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { subject: 'Python Fundamentals', time: 'Today at 2:00 PM', instructor: 'John Doe' },
            { subject: 'Web Development', time: 'Tomorrow at 10:00 AM', instructor: 'Jane Smith' },
            { subject: 'React Mastery', time: 'Mar 15 at 3:00 PM', instructor: 'Mike Chen' },
          ].map((cls, i) => (
            <div key={i} className="border-l-4 border-primary pl-4 py-2">
              <p className="font-bold">{cls.subject}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cls.time}</p>
              <p className="text-xs text-gray-500">with {cls.instructor}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
