import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp } from 'lucide-react';

export default function ExamResults() {
  const [results] = React.useState([
    {
      id: 1,
      examName: 'Python Fundamentals - Midterm',
      subject: 'Python Fundamentals',
      date: '2024-02-15',
      totalMarks: 100,
      obtainedMarks: 92,
      percentage: 92,
      grade: 'A+',
      status: 'passed',
    },
    {
      id: 2,
      examName: 'Web Development - Quiz 1',
      subject: 'Web Development',
      date: '2024-02-20',
      totalMarks: 50,
      obtainedMarks: 42,
      percentage: 84,
      grade: 'A',
      status: 'passed',
    },
    {
      id: 3,
      examName: 'React Mastery - Final',
      subject: 'React Mastery',
      date: '2024-03-01',
      totalMarks: 100,
      obtainedMarks: 78,
      percentage: 78,
      grade: 'B+',
      status: 'passed',
    },
    {
      id: 4,
      examName: 'Data Science 101 - Quiz 2',
      subject: 'Data Science',
      date: '2024-03-05',
      totalMarks: 50,
      obtainedMarks: 35,
      percentage: 70,
      grade: 'B',
      status: 'passed',
    },
  ]);

  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'text-green-600 bg-green-50 dark:bg-green-900';
    if (grade === 'B+' || grade === 'B') return 'text-blue-600 bg-blue-50 dark:bg-blue-900';
    return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900';
  };

  const getPercentageColor = (percentage) => {
    if (percentage >= 90) return 'text-green-500';
    if (percentage >= 80) return 'text-blue-500';
    if (percentage >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">Exam Results</h1>
        <p className="text-gray-600 dark:text-gray-400">
          View your exam scores and performance
        </p>
      </div>

      {/* Performance Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
      >
        <div className="flex items-center gap-4">
          <div className="p-4 bg-white dark:bg-darkAlt rounded-full">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Overall Average</p>
            <p className="text-4xl font-bold">86%</p>
          </div>
        </div>
      </motion.div>

      {/* Results Table */}
      <div className="space-y-4">
        {results.map((result, index) => (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card p-6 hover:shadow-lg transition-smooth"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* Exam Info */}
              <div className="md:col-span-2">
                <h3 className="font-bold text-lg">{result.examName}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(result.date).toLocaleDateString()}
                </p>
              </div>

              {/* Score */}
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Score</p>
                  <p className="text-2xl font-bold">
                    {result.obtainedMarks}
                    <span className="text-sm text-gray-500">/{result.totalMarks}</span>
                  </p>
                </div>
              </div>

              {/* Percentage */}
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Percentage</p>
                <div className="flex items-center gap-2">
                  <div className={getPercentageColor(result.percentage) + ' font-bold text-lg'}>
                    {result.percentage}%
                  </div>
                  <TrendingUp size={20} className={getPercentageColor(result.percentage)} />
                </div>
              </div>

              {/* Grade */}
              <div className="text-right">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Grade</p>
                <div className={`inline-block px-4 py-2 rounded-lg font-bold ${getGradeColor(result.grade)}`}>
                  {result.grade}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold">Progress</span>
                <span className={`text-sm font-bold ${getPercentageColor(result.percentage)}`}>
                  {result.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    result.percentage >= 90
                      ? 'bg-gradient-to-r from-green-400 to-green-600'
                      : result.percentage >= 80
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                      : result.percentage >= 70
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                      : 'bg-gradient-to-r from-red-400 to-red-600'
                  }`}
                  style={{ width: `${result.percentage}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Test/Quiz Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card p-6"
      >
        <h2 className="font-bold text-lg mb-4">Practice Tests & Quizzes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Python Basics Quiz', questions: 10, time: '15 mins', attempts: 3 },
            { name: 'Web Development Practice', questions: 20, time: '30 mins', attempts: 2 },
            { name: 'React Concepts Test', questions: 15, time: '25 mins', attempts: 1 },
          ].map((test, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-bold">{test.name}</h3>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span>📝 {test.questions} Questions</span>
                <span>⏱️ {test.time}</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-gray-500">Attempts: {test.attempts}</p>
                <button className="px-3 py-1 bg-primary text-white rounded text-sm hover:shadow-md transition">
                  Attempt
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
