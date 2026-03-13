import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Plus } from 'lucide-react';

export default function ExamManagement() {
  const [exams] = useState([
    { id: 1, name: 'Python Midterm', totalMarks: 100, submissions: 32, date: '2024-02-15' },
    { id: 2, name: 'Web Dev Quiz 1', totalMarks: 50, submissions: 45, date: '2024-02-20' },
    { id: 3, name: 'React Final', totalMarks: 100, submissions: 28, date: '2024-03-01' },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Exams & Tests</h1>
        <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold hover:shadow-lg transition">
          <Plus size={20} /> Create New
        </button>
      </div>

      {/* Create Exam Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6"
      >
        <h2 className="font-bold text-lg mb-4">Create New Exam</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Exam Name"
            className="input-field"
          />
          <input
            type="number"
            placeholder="Total Marks"
            className="input-field"
          />
          <input
            type="datetime-local"
            className="input-field"
          />
        </div>
        <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg font-bold hover:shadow-md transition">
          Create Exam
        </button>
      </motion.div>

      {/* Exams List */}
      <div className="space-y-4">
        {exams.map((exam) => (
          <motion.div
            key={exam.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card p-6 hover:shadow-lg transition-smooth"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <FileText size={20} className="text-blue-500" />
                  {exam.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Date: {new Date(exam.date).toLocaleDateString()} | Total Marks: {exam.totalMarks}
                </p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-bold text-primary">{exam.submissions}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Submissions</p>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:shadow-md transition">
                View Submissions
              </button>
              <button className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition">
                Edit
              </button>
              <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg text-sm font-semibold hover:bg-red-500 hover:text-white transition">
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
