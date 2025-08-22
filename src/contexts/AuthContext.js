'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Simple session management
let currentUser = null;

export const auth = {
  signIn: (email, password) => {
    if (email === 'admin@example.com' && password === 'password123') {
      currentUser = {
        id: 1,
        email: 'admin@example.com',
        name: 'Admin User',
      };
      // Store in localStorage for persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(currentUser));
      }
      return Promise.resolve(currentUser);
    }
    return Promise.resolve(null);
  },
  signOut: () => {
    currentUser = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    return Promise.resolve();
  },
  getSession: () => {
    if (currentUser) {
      return Promise.resolve(currentUser);
    }

    // Check localStorage for existing session
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        currentUser = JSON.parse(storedUser);
        return Promise.resolve(currentUser);
      }
    }

    return Promise.resolve(null);
  },
};

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.getSession().then(user => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  const signIn = async (email, password) => {
    const user = await auth.signIn(email, password);
    setUser(user);
    return user;
  };

  const signOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  const value = {
    user,
    signIn,
    signOut,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
