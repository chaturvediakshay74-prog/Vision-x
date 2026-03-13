import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Plus } from 'lucide-react';

export default function UserManagement() {
  const [users] = useState([
    { id: 1, name: 'John Student', email: 'john@example.com', role: 'student', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Teacher', email: 'jane@example.com', role: 'teacher', status: 'active', joinDate: '2024-01-10' },
    { id: 3, name: 'Bob Student', email: 'bob@example.com', role: 'student', status: 'inactive', joinDate: '2024-02-01' },
    { id: 4, name: 'Alice Teacher', email: 'alice@example.com', role: 'teacher', status: 'active', joinDate: '2024-01-20' },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Management</h1>
        <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold hover:shadow-lg transition">
          <Plus size={20} /> Add User
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search users..."
          className="input-field pl-12"
        />
      </div>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-darkAlt border-b">
              <tr>
                <th className="px-6 py-3 text-left font-bold">Name</th>
                <th className="px-6 py-3 text-left font-bold">Email</th>
                <th className="px-6 py-3 text-left font-bold">Role</th>
                <th className="px-6 py-3 text-left font-bold">Status</th>
                <th className="px-6 py-3 text-left font-bold">Joined</th>
                <th className="px-6 py-3 text-left font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50 dark:hover:bg-darkAlt">
                  <td className="px-6 py-4 font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{user.email}</td>
                  <td className="px-6 py-4 capitalize">{user.role}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${user.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{user.joinDate}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="text-sm px-3 py-1 bg-primary text-white rounded hover:shadow-md transition">
                      Edit
                    </button>
                    <button className="text-sm px-3 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
