import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Snackbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/slices/userSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Предположим, что правильные учетные данные:
    const correctUsername = 'admin';
    const correctPassword = 'password';

    if (username === correctUsername && password === correctPassword) {
      dispatch(login());
      setOpenSnackbar(true); // Показать уведомление
      setTimeout(() => navigate('/'), 1500); // Перенаправление через 1.5 секунды
    } else {
      setError('Invalid username or password');
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button variant="contained" color="primary" fullWidth type="submit">
          Login
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message="Login successful"
      />
    </Container>
  );
}

export default Login;
