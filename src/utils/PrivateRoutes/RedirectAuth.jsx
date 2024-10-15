import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { checkAuth } from '../api';
import { useStore } from '../store/store';

const RedirectAuth = ({ children }) => {
  const location = useLocation();
  const { loading, isAuthenticated } = useStore();

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to='/login' replace state={{ from: location }} />
  );
};

export default RedirectAuth;
