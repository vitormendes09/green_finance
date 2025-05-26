'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import authControllerLogin from '@/controllers/User/Userlogin';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import { styled } from '@mui/system';
import  Register from '@/app/register/page'; 



// Container estilizado
const Container = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f4f8',
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  borderRadius: theme.spacing(2),
  textAlign: 'center',
}));

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const user = await authControllerLogin.loginUser(email, password);
      if (user) {

        router.push('/pages/dashboard');
      } else {
        setError('Email ou senha inválidos');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Erro ao fazer login. Tente novamente.');
    }
  };

  const hanleClick = () => {
    router.push('/register');
  };

  return (
    <Container>
      <FormWrapper>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontFamily: '"TCCC Unity", sans-serif', color: '#2e7d32' }}
        >
          Green Finance
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontFamily: 'Arial, sans-serif', color: '#555' }}
        >
          Seja bem-vindo!
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button type="submit" variant="contained" color="success" fullWidth sx={{ mr: 1 }}>
              Login
            </Button>
            <Button variant="outlined" color="primary" fullWidth sx={{ ml: 1 }} onClick={hanleClick}>
              Registrar-se
            </Button>
          </Box>
        </form>
      </FormWrapper>
    </Container>
  );
}
