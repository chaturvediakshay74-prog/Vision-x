import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  BookOpen,
  BarChart3,
  AlertCircle,
  TrendingUp,
  Camera,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export default function AdminHome() {
  const stats = [
    { icon: Users, label: 'Total Users', value: '1,850', color: 'bg-blue-100 text-blue-600' },
    { icon: BookOpen, label: 'Active Courses', value: '48', color: 'bg-purple-100 text-purple-600' },
    { icon: BarChart3, label: 'Avg Engagement', value: '78%', color: 'bg-green-100 text-green-600' },
    { icon: Camera, label: 'Active Cameras', value: '24', color: 'bg-orange-100 text-orange-600' },
  ];

  const chartData = [
    { month: 'Jan', users: 400, courses: 24 },
    { month: 'Feb', users: 520, courses: 31 },
    { month: 'Mar', users: 680, courses: 42 },
    { month: 'Apr', users: 850, courses: 48 },
  ];

  const userDistribution = [
    { name: 'Students', value: 1200, color: '#667eea' },
    { name: 'Teachers', value: 450, color: '#764ba2' },
    { name: 'Admin', value: 5, color: '#f093fb' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="opacity-90">System overview and management center</p>
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

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 card p-6"
        >
          <h2 className="text-xl font-bold mb-4">Platform Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#667eea" name="Users" />
              <Line type="monotone" dataKey="courses" stroke="#764ba2" name="Courses" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* User Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card p-6"
        >
          <h2 className="text-xl font-bold mb-4">User Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={userDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} (${value})`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {userDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* System Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card p-6"
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BarChart3 size={24} /> System Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Server Status', status: 'Online', color: 'green' },
            { name: 'Database', status: 'Connected', color: 'green' },
            { name: 'API Latency', status: '45ms', color: 'green' },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 dark:bg-darkAlt rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.name}</p>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                <p className="font-bold">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="card p-6"
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <AlertCircle size={24} className="text-yellow-500" /> System Alerts
        </h2>
        <div className="space-y-2">
          <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
            <p className="text-sm font-medium">Storage usage at 78%</p>
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
            <p className="text-sm font-medium">5 users pending approval</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
