import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Maximize, SkipBack, SkipForward } from 'lucide-react';

export default function CoursePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const course = {
    title: 'Python Fundamentals',
    videos: [
      { id: 1, title: 'Introduction to Python', duration: '15:32', watched: true },
      { id: 2, title: 'Variables and Data Types', duration: '22:45', watched: true },
      { id: 3, title: 'Operators and Expressions', duration: '18:20', watched: true },
      { id: 4, title: 'Control Flow (If, Else)', duration: '25:10', watched: false },
      { id: 5, title: 'Loops in Python', duration: '28:35', watched: false },
      { id: 6, title: 'Functions and Scope', duration: '31:20', watched: false },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold">{course.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card overflow-hidden"
          >
            {/* Video Container */}
            <div className="bg-black aspect-video flex items-center justify-center group relative">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23667eea'/%3E%3Cpolygon points='40,30 40,70 70,50' fill='white'/%3E%3C/svg%3E"
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />

              {/* Play Button Overlay */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute z-10 hover:scale-110 transition-transform"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur hover:bg-white/30 rounded-full flex items-center justify-center">
                  {isPlaying ? (
                    <Pause size={40} className="text-white" />
                  ) : (
                    <Play size={40} className="text-white ml-1" />
                  )}
                </div>
              </button>
            </div>

            {/* Video Controls */}
            <div className="p-4 bg-gray-900">
              <div className="flex items-center gap-2 text-white text-sm mb-2">
                <div className="flex-1 h-1 bg-gray-700 rounded-full">
                  <div
                    className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: '35%' }}
                  ></div>
                </div>
                <span>8:45 / 25:10</span>
              </div>

              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <button className="hover:text-primary transition">
                    <SkipBack size={20} />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-primary transition"
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <button className="hover:text-primary transition">
                    <SkipForward size={20} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button className="hover:text-primary transition">
                    <Volume2 size={20} />
                  </button>
                  <button className="hover:text-primary transition">
                    <Maximize size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                {course.videos[currentVideo].title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Duration: {course.videos[currentVideo].duration}
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card p-6 mt-6"
          >
            <h3 className="font-bold text-lg mb-2">About this Video</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn the fundamentals of control flow in Python. Understand how to use if, elif, and else statements to control the flow of your program.
            </p>

            <div className="mt-4 space-y-2">
              <h4 className="font-semibold">Topics Covered:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>If and else statements</li>
                <li>Boolean operators</li>
                <li>Nested conditionals</li>
                <li>Ternary operators</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Sidebar - Playlist */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="card p-6 sticky top-6"
          >
            <h3 className="font-bold text-lg mb-4">Course Modules</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {course.videos.map((video, index) => (
                <motion.button
                  key={video.id}
                  onClick={() => setCurrentVideo(index)}
                  whileHover={{ marginLeft: 8 }}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    currentVideo === index
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                      : 'hover:bg-gray-100 dark:hover:bg-darkAlt'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <div
                      className={`mt-1 ${
                        video.watched ? 'text-green-500' : 'text-gray-400'
                      }`}
                    >
                      {video.watched ? '✓' : '○'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{video.title}</p>
                      <p className="text-xs opacity-75">{video.duration}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
