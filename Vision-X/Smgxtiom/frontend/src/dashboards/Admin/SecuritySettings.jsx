import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, Key, AlertTriangle } from 'lucide-react';

export default function SecuritySettings() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 max-w-4xl"
    >
      <h1 className="text-3xl font-bold">Security Settings</h1>

      {/* General Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6"
      >
        <h2 className="font-bold text-lg flex items-center gap-2 mb-4">
          <Shield size={24} /> General Security
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-darkAlt rounded-lg">
            <div>
              <p className="font-bold">Two-Factor Authentication</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Require 2FA for all admin accounts</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked readOnly />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-darkAlt rounded-lg">
            <div>
              <p className="font-bold">Password Expiry</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Force password change every 90 days</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked readOnly />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-darkAlt rounded-lg">
            <div>
              <p className="font-bold">SSL/TLS Enforcement</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Force HTTPS for all connections</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked readOnly />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </motion.div>

      {/* API Keys */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card p-6"
      >
        <h2 className="font-bold text-lg flex items-center gap-2 mb-4">
          <Key size={24} /> API Keys
        </h2>

        <div className="space-y-3">
          {[
            { name: 'Production API Key', status: 'active', created: '2024-01-15' },
            { name: 'Development API Key', status: 'active', created: '2024-01-10' },
            { name: 'Testing API Key', status: 'inactive', created: '2024-02-01' },
          ].map((key, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-darkAlt rounded-lg">
              <div>
                <p className="font-bold">{key.name}</p>
                <p className="text-xs text-gray-500">Created: {key.created}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${key.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'}`}>
                  {key.status}
                </span>
                <button className="text-sm text-red-500 hover:text-red-700">Revoke</button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Suspicious Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6"
      >
        <h2 className="font-bold text-lg flex items-center gap-2 mb-4">
          <AlertTriangle size={24} className="text-yellow-500" /> Suspicious Activity Log
        </h2>

        <div className="space-y-2">
          {[
            { type: 'Failed Login', details: 'Admin account from unknown IP', time: '1 hour ago' },
            { type: 'File Upload', details: 'Large file uploaded to system', time: '3 hours ago' },
            { type: 'Permission Change', details: 'User permissions modified', time: '5 hours ago' },
          ].map((activity, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
              <div>
                <p className="font-bold text-sm">{activity.type}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{activity.details}</p>
              </div>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Save Button */}
      <button className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold hover:shadow-lg transition">
        Save Security Settings
      </button>
    </motion.div>
  );
}
