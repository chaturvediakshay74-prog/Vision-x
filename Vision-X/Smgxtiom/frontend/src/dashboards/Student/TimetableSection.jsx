import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

export default function TimetableSection() {
  const [selectedDay, setSelectedDay] = useState(0);

  const timetable = {
    Monday: [
      { time: '9:00 AM', subject: 'Python Fundamentals', instructor: 'John Doe', room: 'Lab-A1' },
      { time: '11:00 AM', subject: 'Web Development', instructor: 'Jane Smith', room: 'Room-201' },
      { time: '1:00 PM', subject: 'Lunch Break', instructor: '', room: 'Cafeteria' },
      { time: '2:00 PM', subject: 'React Mastery', instructor: 'Mike Chen', room: 'Lab-A2' },
    ],
    Tuesday: [
      { time: '10:00 AM', subject: 'Data Science 101', instructor: 'Sarah Wilson', room: 'Lab-B1' },
      { time: '12:00 PM', subject: 'JavaScript Advanced', instructor: 'David Lee', room: 'Room-202' },
      { time: '2:00 PM', subject: 'UI/UX Design', instructor: 'Emma Davis', room: 'Lab-C1' },
    ],
    Wednesday: [
      { time: '9:00 AM', subject: 'Python Fundamentals', instructor: 'John Doe', room: 'Lab-A1' },
      { time: '11:00 AM', subject: 'Database Design', instructor: 'Alex Johnson', room: 'Room-203' },
      { time: '1:00 PM', subject: 'Lunch Break', instructor: '', room: 'Cafeteria' },
      { time: '3:00 PM', subject: 'Project Work', instructor: 'Team Lead', room: 'Project-Lab' },
    ],
    Thursday: [
      { time: '10:00 AM', subject: 'Cloud Computing', instructor: 'Sam Parker', room: 'Lab-D1' },
      { time: '12:00 PM', subject: 'DevOps Basics', instructor: 'Chris Evans', room: 'Room-204' },
      { time: '2:00 PM', subject: 'Web Development', instructor: 'Jane Smith', room: 'Lab-A2' },
    ],
    Friday: [
      { time: '9:00 AM', subject: 'Open Lab Session', instructor: 'All Instructors', room: 'Lab-A1' },
      { time: '11:00 AM', subject: 'Project Presentation', instructor: 'Team Lead', room: 'Auditorium' },
      { time: '2:00 PM', subject: 'Weekly Quiz', instructor: 'Test Admin', room: 'Online' },
    ],
  };

  const days = Object.keys(timetable);
  const currentDayClasses = timetable[days[selectedDay]];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">Timetable</h1>
        <p className="text-gray-600 dark:text-gray-400">Your weekly class schedule</p>
      </div>

      {/* Day Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex gap-2 overflow-x-auto pb-2"
      >
        {days.map((day, index) => (
          <button
            key={day}
            onClick={() => setSelectedDay(index)}
            className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
              selectedDay === index
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                : 'bg-white dark:bg-darkAlt hover:shadow-md'
            }`}
          >
            {day}
          </button>
        ))}
      </motion.div>

      {/* Classes for Selected Day */}
      <div className="space-y-4">
        {currentDayClasses.length === 0 ? (
          <div className="card p-8 text-center">
            <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 dark:text-gray-400">No classes scheduled for this day</p>
          </div>
        ) : (
          currentDayClasses.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 border-l-4 border-primary hover:shadow-lg transition-smooth"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{cls.subject}</h3>
                  {cls.instructor && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Instructor: {cls.instructor}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Location: {cls.room}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-primary font-bold">
                  <Clock size={20} />
                  {cls.time}
                </div>
              </div>

              {cls.instructor && (
                <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:shadow-md transition-smooth text-sm font-semibold">
                  Join Class
                </button>
              )}
            </motion.div>
          ))
        )}
      </div>

      {/* Holiday List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card p-6 mt-8"
      >
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Calendar size={24} /> Holidays & Breaks
        </h2>

        <div className="space-y-2">
          {[
            { date: 'Mar 17 - Mar 18', name: 'Weekend' },
            { date: 'Mar 30 - Apr 5', name: 'Spring Break' },
            { date: 'May 1', name: 'Labour Day' },
            { date: 'May 26 - Jun 2', name: 'Summer Vacation Begins' },
          ].map((holiday, i) => (
            <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-darkAlt rounded-lg transition">
              <p className="font-medium">{holiday.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{holiday.date}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
