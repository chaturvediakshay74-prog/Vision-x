import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search } from 'lucide-react';

export default function StudentManagement() {
  const [students] = React.useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', courseProgress: 65, attendance: '95%' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', courseProgress: 45, attendance: '80%' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', courseProgress: 80, attendance: '92%' },
    { id: 4, name: 'David Lee', email: 'david@example.com', courseProgress: 55, attendance: '85%' },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold">Manage Students</h1>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search students..."
          className="input-field pl-12"
        />
      </div>

      {/* Students Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-darkAlt border-b">
              <tr>
                <th className="px-6 py-3 text-left font-bold">Name</th>
                <th className="px-6 py-3 text-left font-bold">Email</th>
                <th className="px-6 py-3 text-left font-bold">Progress</th>
                <th className="px-6 py-3 text-left font-bold">Attendance</th>
                <th className="px-6 py-3 text-left font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50 dark:hover:bg-darkAlt">
                  <td className="px-6 py-4 font-medium">{student.name}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{student.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                          style={{ width: `${student.courseProgress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold">{student.courseProgress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full text-sm font-bold">
                      {student.attendance}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="text-sm px-3 py-1 bg-primary text-white rounded hover:shadow-md transition">
                      View
                    </button>
                    <button className="text-sm px-3 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
                      Remove
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
