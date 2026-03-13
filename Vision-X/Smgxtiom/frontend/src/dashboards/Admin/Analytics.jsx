import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, BookOpen, Activity } from 'lucide-react';

export default function Analytics() {
  const activityData = [
    { day: 'Mon', logins: 420, courses: 240 },
    { day: 'Tue', logins: 320, courses: 221 },
    { day: 'Wed', logins: 500, courses: 229 },
    { day: 'Thu', logins: 450, courses: 200 },
    { day: 'Fri', logins: 600, courses: 321 },
    { day: 'Sat', logins: 350, courses: 213 },
    { day: 'Sun', logins: 280, courses: 190 },
  ];

  const coursePopularity = [
    { name: 'Python', value: 245 },
    { name: 'Web Dev', value: 198 },
    { name: 'React', value: 156 },
    { name: 'Data Science', value: 202 },
    { name: 'Others', value: 199 },
  ];

  const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold">Analytics & Reports</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { icon: Users, label: 'Active Users', value: '1,850', color: 'bg-blue-100 text-blue-600' },
          { icon: Activity, label: 'Daily Active', value: '580', color: 'bg-green-100 text-green-600' },
          { icon: BookOpen, label: 'Total Courses', value: '48', color: 'bg-purple-100 text-purple-600' },
          { icon: TrendingUp, label: 'Growth Rate', value: '+24%', color: 'bg-orange-100 text-orange-600' },
        ].map((stat, i) => (
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

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6"
        >
          <h2 className="text-xl font-bold mb-4">Weekly Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="logins" fill="#667eea" name="Logins" />
              <Bar dataKey="courses" fill="#764ba2" name="Courses Accessed" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Course Popularity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6"
        >
          <h2 className="text-xl font-bold mb-4">Course Popularity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={coursePopularity}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} (${value})`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {coursePopularity.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Detailed Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card p-6"
      >
        <h2 className="text-xl font-bold mb-4">Detailed Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Avg Session Duration', value: '47 mins', trend: '+12%' },
            { label: 'Course Completion Rate', value: '68%', trend: '+8%' },
            { label: 'User Retention', value: '82%', trend: '+5%' },
          ].map((metric, i) => (
            <div key={i} className="p-4 bg-gray-50 dark:bg-darkAlt rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{metric.label}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">{metric.value}</p>
                <span className="text-green-500 text-sm font-semibold">{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
