'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if admin is logged in on mount
    const adminStatus = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsAdminLoggedIn(adminStatus);
    setIsLoading(false);
  }, []);

  const login = () => {
    setIsAdminLoggedIn(true);
    localStorage.setItem('isAdminLoggedIn', 'true');
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('isAdminLoggedIn');
  };

  return (
    <AdminContext.Provider value={{
      isAdminLoggedIn,
      isLoading,
      login,
      logout
    }}>
      {children}
    </AdminContext.Provider>
  );
};