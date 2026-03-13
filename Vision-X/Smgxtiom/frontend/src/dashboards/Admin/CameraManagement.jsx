import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Plus, Trash2 } from 'lucide-react';

export default function CameraManagement() {
  const [cameras] = React.useState([
    { id: 1, name: 'Lab-A1 Camera', room: 'Lab A1', status: 'active', quality: '1080p', lastCheck: '2 mins ago' },
    { id: 2, name: 'Lab-A2 Camera', room: 'Lab A2', status: 'active', quality: '720p', lastCheck: '5 mins ago' },
    { id: 3, name: 'Classroom-201 Camera', room: 'Room 201', status: 'offline', quality: '1080p', lastCheck: '2 hours ago' },
    { id: 4, name: 'Lab-B1 Camera', room: 'Lab B1', status: 'active', quality: '1080p', lastCheck: '1 min ago' },
    { id: 5, name: 'Auditorium Camera', room: 'Auditorium', status: 'active', quality: '4K', lastCheck: '3 mins ago' },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Camera Management</h1>
        <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold hover:shadow-lg transition">
          <Plus size={20} /> Add Camera
        </button>
      </div>

      {/* Camera Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cameras.map((camera) => (
          <motion.div
            key={camera.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card overflow-hidden hover:shadow-lg transition-smooth"
          >
            {/* Camera Feed Preview */}
            <div className="h-40 bg-black flex items-center justify-center relative group">
              <Camera className="w-12 h-12 text-gray-600" />
              <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${camera.status === 'active' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
            </div>

            {/* Camera Info */}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{camera.name}</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <p>Location: {camera.room}</p>
                <p>Quality: {camera.quality}</p>
                <p>Status: <span className={camera.status === 'active' ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>{camera.status}</span></p>
                <p>Last Check: {camera.lastCheck}</p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:shadow-md transition">
                  Edit
                </button>
                <button className="px-3 py-2 border border-red-500 text-red-500 rounded-lg text-sm font-semibold hover:bg-red-500 hover:text-white transition">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card p-6 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Total Cameras</p>
          <p className="text-4xl font-bold">5</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Active</p>
          <p className="text-4xl font-bold text-green-500">4</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Offline</p>
          <p className="text-4xl font-bold text-red-500">1</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
