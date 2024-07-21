import React from 'react';
import { Button, TextField, Container } from '@mui/material';

function Login() {
  return (
    <Container maxWidth="sm">
      <h1>Login Page</h1>
      <form>
        <TextField label="Username" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
}

export default Login;
