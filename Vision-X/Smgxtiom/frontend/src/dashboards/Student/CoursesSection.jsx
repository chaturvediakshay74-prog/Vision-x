import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Star, Clock, Play } from 'lucide-react';

export default function CoursesSection() {
  const [enrolledCourses] = useState([
    {
      id: 1,
      title: 'Python Fundamentals',
      instructor: 'John Doe',
      progress: 65,
      rating: 4.8,
      students: 1250,
      image: 'bg-blue-500',
      modules: 12,
      completedModules: 8,
    },
    {
      id: 2,
      title: 'React Mastery',
      instructor: 'Mike Chen',
      progress: 45,
      rating: 4.7,
      students: 850,
      image: 'bg-pink-500',
      modules: 15,
      completedModules: 7,
    },
    {
      id: 3,
      title: 'Web Development',
      instructor: 'Jane Smith',
      progress: 80,
      rating: 4.9,
      students: 980,
      image: 'bg-purple-500',
      modules: 10,
      completedModules: 8,
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">My Courses</h1>
        <p className="text-gray-600 dark:text-gray-400">
          You are enrolled in {enrolledCourses.length} courses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card overflow-hidden hover:shadow-xl transition-smooth"
          >
            {/* Course Image */}
            <div className={`h-40 ${course.image}`}></div>

            {/* Course Info */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-bold text-lg">{course.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  by {course.instructor}
                </p>
              </div>

              {/* Rating and Students */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <Users size={16} />
                  <span>{course.students}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Progress</span>
                  <span className="text-sm text-gray-600">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Modules */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <BookOpen size={16} />
                <span>{course.completedModules}/{course.modules} modules completed</span>
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-lg font-semibold hover:shadow-md transition-smooth flex items-center justify-center gap-2">
                <Play size={16} /> Continue Learning
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
