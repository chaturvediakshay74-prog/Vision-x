import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Add authorization header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Courses
export const courseService = {
  getAll: () => api.get('/courses'),
  getById: (id) => api.get(`/courses/${id}`),
  create: (data) => api.post('/courses', data),
  update: (id, data) => api.put(`/courses/${id}`, data),
  delete: (id) => api.delete(`/courses/${id}`),
  search: (query) => api.get(`/courses/search?q=${query}`),
};

// Videos
export const videoService = {
  getById: (courseId, videoId) => api.get(`/courses/${courseId}/videos/${videoId}`),
  upload: (courseId, formData) => api.post(`/courses/${courseId}/videos`, formData),
};

// Enrollments
export const enrollmentService = {
  enroll: (courseId) => api.post(`/enrollments`, { courseId }),
  getMyEnrollments: () => api.get('/enrollments/my-courses'),
  getProgress: (courseId) => api.get(`/enrollments/${courseId}/progress`),
};

// Announcements
export const announcementService = {
  getAll: () => api.get('/announcements'),
  create: (data) => api.post('/announcements', data),
};

// Attendance
export const attendanceService = {
  getMyAttendance: () => api.get('/attendance/my-attendance'),
  recordAttendance: (studentId) => api.post('/attendance', { studentId }),
};

// Users
export const userService = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
  getAll: () => api.get('/users'),
  create: (data) => api.post('/users', data),
  delete: (id) => api.delete(`/users/${id}`),
};

// Exams & Tests
export const examService = {
  getAll: () => api.get('/exams'),
  getById: (id) => api.get(`/exams/${id}`),
  submitAnswer: (examId, answers) => api.post(`/exams/${examId}/submit`, { answers }),
  getResults: () => api.get('/exams/results'),
};

// Timetable
export const timetableService = {
  get: () => api.get('/timetable'),
  update: (data) => api.put('/timetable', data),
};

// Holidays
export const holidayService = {
  getAll: () => api.get('/holidays'),
};

export default api;
