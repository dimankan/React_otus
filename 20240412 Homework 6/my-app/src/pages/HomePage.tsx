import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/userSlice';
import withAuth from '../hoc/withAuth';
import { Button, Container } from '@mui/material';

function HomePage() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <h1>Home Page</h1>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}

export default withAuth(HomePage);
