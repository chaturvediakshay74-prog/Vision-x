import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock } from 'lucide-react';

export default function ManageCourses() {
  const [courses] = useState([
    {
      id: 1,
      title: 'Python Fundamentals',
      students: 45,
      modules: 12,
      rating: 4.8,
      status: 'active',
    },
    {
      id: 2,
      title: 'Web Development',
      students: 38,
      modules: 15,
      rating: 4.9,
      status: 'active',
    },
    {
      id: 3,
      title: 'React Mastery',
      students: 32,
      modules: 10,
      rating: 4.7,
      status: 'active',
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold hover:shadow-lg transition">
          Create New Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-6 hover:shadow-lg transition-smooth"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-lg">{course.title}</h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs font-bold rounded-full">
                {course.status}
              </span>
            </div>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <Users size={16} /> {course.students} Students
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={16} /> {course.modules} Modules
              </div>
              <div className="flex items-center gap-2">
                ⭐ Rating: {course.rating}
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:shadow-md transition">
                Edit
              </button>
              <button className="flex-1 px-3 py-2 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition">
                View
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
