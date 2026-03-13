import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,

      login: async (email, password) => {
        set({ loading: true });
        try {
          const response = await api.post('/auth/login', { email, password });
          const { user, token } = response.data;

          localStorage.setItem('token', token);
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          set({ user, isAuthenticated: true, loading: false });
          return { success: true, user };
        } catch (error) {
          set({ loading: false });
          return { success: false, message: error.response?.data?.message || 'Login failed' };
        }
      },

      register: async (data) => {
        set({ loading: true });
        try {
          const response = await api.post('/auth/register', data);
          const { user, token } = response.data;

          localStorage.setItem('token', token);
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          set({ user, isAuthenticated: true, loading: false });
          return { success: true, user };
        } catch (error) {
          set({ loading: false });
          return { success: false, message: error.response?.data?.message || 'Registration failed' };
        }
      },

      logout: async () => {
        try {
          await api.post('/auth/logout');
        } catch (error) {
          console.error('Logout error:', error);
        }
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
        set({ user: null, isAuthenticated: false });
      },

      checkAuth: async () => {
        const token = localStorage.getItem('token');
        if (!token) return;

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        try {
          const response = await api.get('/auth/me');
          set({ user: response.data, isAuthenticated: true });
        } catch (error) {
          localStorage.removeItem('token');
          delete api.defaults.headers.common['Authorization'];
          set({ user: null, isAuthenticated: false });
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export const apiClient = api;
