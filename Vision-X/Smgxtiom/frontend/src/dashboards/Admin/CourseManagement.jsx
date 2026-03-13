import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Star, Plus } from 'lucide-react';

export default function CourseManagement() {
  const [courses] = React.useState([
    { id: 1, title: 'Python Fundamentals', instructor: 'John Doe', students: 245, rating: 4.8, status: 'active' },
    { id: 2, title: 'Web Development', instructor: 'Jane Smith', students: 198, rating: 4.9, status: 'active' },
    { id: 3, title: 'React Mastery', instructor: 'Mike Chen', students: 156, rating: 4.7, status: 'active' },
    { id: 4, title: 'Data Science 101', instructor: 'Sarah Wilson', students: 202, rating: 4.6, status: 'inactive' },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Course Management</h1>
        <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold hover:shadow-lg transition">
          <Plus size={20} /> New Course
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
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${course.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'}`}>
                {course.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              by {course.instructor}
            </p>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <Users size={16} /> {course.students} Students
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-yellow-400" /> {course.rating} Rating
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:shadow-md transition">
                Edit
              </button>
              <button className="flex-1 px-3 py-2 border border-red-500 text-red-500 rounded-lg text-sm font-semibold hover:bg-red-500 hover:text-white transition">
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
