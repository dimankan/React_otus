import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Navigate } from 'react-router-dom';

function withAuth(Component: React.ComponentType) {
  return function AuthComponent(props: any) {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };
}

export default withAuth;
