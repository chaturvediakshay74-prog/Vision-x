import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Video, File } from 'lucide-react';

export default function UploadMaterials() {
  const [uploadType, setUploadType] = useState('video');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold">Upload Materials</h1>

      {/* Upload Type Selector */}
      <div className="flex gap-2">
        {[
          { id: 'video', label: 'Videos', icon: Video },
          { id: 'document', label: 'Documents', icon: FileText },
          { id: 'resource', label: 'Resources', icon: File },
        ].map((type) => (
          <button
            key={type.id}
            onClick={() => setUploadType(type.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              uploadType === type.id
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                : 'bg-white dark:bg-darkAlt hover:shadow-md'
            }`}
          >
            <type.icon size={20} />
            {type.label}
          </button>
        ))}
      </div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-12 border-2 border-dashed border-primary text-center hover:bg-gray-50 dark:hover:bg-darkAlt transition cursor-pointer"
      >
        <Upload className="w-16 h-16 mx-auto text-primary mb-4" />
        <h3 className="text-xl font-bold mb-2">
          {uploadType === 'video' ? 'Upload Video' : uploadType === 'document' ? 'Upload Document' : 'Upload Resource'}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Drag and drop your file here or click to browse
        </p>
        <input type="file" className="hidden" accept={uploadType === 'video' ? 'video/*' : uploadType === 'document' ? '.pdf,.doc,.docx' : '*'} />
        <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:shadow-md transition">
          Select File
        </button>
      </motion.div>

      {/* Recent Uploads */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6"
      >
        <h2 className="font-bold text-lg mb-4">Recent Uploads</h2>
        <div className="space-y-3">
          {[
            { name: 'Python Basics Lecture', type: 'video', date: '5 mins ago', size: '450 MB' },
            { name: 'Course Syllabus', type: 'document', date: '2 hours ago', size: '2.3 MB' },
            { name: 'Assignment Template', type: 'document', date: '1 day ago', size: '850 KB' },
          ].map((upload, i) => (
            <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-darkAlt rounded-lg">
              <div className="flex items-center gap-3">
                {upload.type === 'video' ? <Video size={20} className="text-blue-500" /> : <FileText size={20} className="text-orange-500" />}
                <div>
                  <p className="font-medium">{upload.name}</p>
                  <p className="text-xs text-gray-500">{upload.size} • {upload.date}</p>
                </div>
              </div>
              <button className="text-sm text-gray-500 hover:text-red-500">Delete</button>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
