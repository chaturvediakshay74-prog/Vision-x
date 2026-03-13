import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Save, Edit2 } from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'John Student',
    email: 'student@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Education City',
    bio: 'Passionate about learning and technology',
    rollNumber: 'STU-2024-001',
    enrollmentDate: '2024-01-15',
    course: 'Technology & Programming',
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 max-w-2xl"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:shadow-md transition"
        >
          <Edit2 size={20} />
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-8"
      >
        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
            {profile.fullName.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold">{profile.fullName}</h2>
          <p className="text-gray-600 dark:text-gray-400">{profile.course}</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              disabled={!isEditing}
              className={`input-field ${!isEditing && 'opacity-75 cursor-not-allowed'}`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
              <Mail size={16} /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`input-field ${!isEditing && 'opacity-75 cursor-not-allowed'}`}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
              <Phone size={16} /> Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className={`input-field ${!isEditing && 'opacity-75 cursor-not-allowed'}`}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
              <MapPin size={16} /> Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
              className={`input-field ${!isEditing && 'opacity-75 cursor-not-allowed'}`}
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-semibold mb-2">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              disabled={!isEditing}
              className={`input-field resize-none h-24 ${!isEditing && 'opacity-75 cursor-not-allowed'}`}
            />
          </div>

          {/* Roll Number (Read-only) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Roll Number</label>
              <input
                type="text"
                value={profile.rollNumber}
                disabled
                className="input-field opacity-50 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Enrollment Date</label>
              <input
                type="text"
                value={new Date(profile.enrollmentDate).toLocaleDateString()}
                disabled
                className="input-field opacity-50 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleSave}
              className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-bold hover:shadow-lg transition-smooth"
            >
              <Save size={20} /> Save Changes
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6"
      >
        <h3 className="font-bold text-lg mb-4">Account Information</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between pb-2 border-b dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Account Status</span>
            <span className="font-semibold text-green-600">Active</span>
          </div>
          <div className="flex justify-between pb-2 border-b dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Member Since</span>
            <span className="font-semibold">January 15, 2024</span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="text-gray-600 dark:text-gray-400">Last Login</span>
            <span className="font-semibold">Today at 10:30 AM</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
