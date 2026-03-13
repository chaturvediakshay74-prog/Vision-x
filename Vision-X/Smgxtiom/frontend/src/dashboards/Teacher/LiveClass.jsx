import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Users, Settings, Mic, Video, Share2 } from 'lucide-react';

export default function LiveClass() {
  const [isLive, setIsLive] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [studentCount, setStudentCount] = useState(0);

  React.useEffect(() => {
    if (isLive) {
      setStudentCount(Math.floor(Math.random() * 45) + 10);
    }
  }, [isLive]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold">Live Classroom</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Video Stream */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card overflow-hidden"
          >
            {/* Camera Feed Container */}
            <div className={`bg-black aspect-video flex items-center justify-center relative ${isLive ? 'ring-4 ring-green-500' : ''}`}>
              {isCameraOn ? (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <div className="text-center text-white">
                    <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="opacity-75">Camera Preview</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <div className="text-center text-white">
                    <Video className="w-16 h-16 mx-auto mb-4 opacity-30" />
                    <p className="opacity-50">Camera Off</p>
                  </div>
                </div>
              )}

              {/* Status Badge */}
              {isLive && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Radio size={16} className="animate-pulse" />
                  LIVE
                </div>
              )}

              {/* Student Count */}
              {isLive && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <Users size={16} />
                  {studentCount} Watching
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="p-6 bg-gray-900">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold">Python Fundamentals - Live Session</h3>
                <span className="text-gray-400 text-sm">Classroom Control</span>
              </div>

              <div className="flex flex-wrap gap-3">
                {/* Camera Toggle */}
                <button
                  onClick={() => setIsCameraOn(!isCameraOn)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                    isCameraOn
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-red-500 text-white hover:bg-red-600'
                  }`}
                >
                  <Video size={20} />
                  {isCameraOn ? 'Camera On' : 'Camera Off'}
                </button>

                {/* Mic Toggle */}
                <button
                  onClick={() => setIsMicOn(!isMicOn)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                    isMicOn
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-red-500 text-white hover:bg-red-600'
                  }`}
                >
                  <Mic size={20} />
                  {isMicOn ? 'Mic On' : 'Mic Off'}
                </button>

                {/* Screen Share */}
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition">
                  <Share2 size={20} />
                  Share Screen
                </button>

                {/* Start/Stop Class */}
                <button
                  onClick={() => setIsLive(!isLive)}
                  className={`flex items-center gap-2 px-6 py-2 ml-auto rounded-lg font-bold transition ${
                    isLive
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  <Radio size={20} />
                  {isLive ? 'End Class' : 'Start Class'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Participants */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="card p-6 sticky top-6 h-fit"
        >
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Users size={20} /> Participants ({studentCount})
          </h3>

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {Array.from({ length: studentCount }).map((_, i) => (
              <div key={i} className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-darkAlt rounded">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {String.fromCharCode(65 + (i % 26))}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Student {i + 1}</p>
                  <p className="text-xs text-gray-500">Online</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Chat Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6"
      >
        <h3 className="font-bold text-lg mb-4">Class Chat</h3>
        <div className="bg-gray-100 dark:bg-darkAlt rounded-lg p-4 h-48 overflow-y-auto mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">Messages will appear here...</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Send a message..."
            className="input-field flex-1"
            disabled={!isLive}
          />
          <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:shadow-md transition" disabled={!isLive}>
            Send
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
