'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import authControllerRegister from '@/controllers/User/Userregister';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import { styled } from '@mui/system';

// Estilos reutilizados da página de login
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

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      const success = await authControllerRegister.registerUser(
        name,
        email,
        password,
        confirmPassword
      );
      if (success) {
        router.push('/'); // Volta para o login
      } else {
        setError('Erro ao registrar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro de registro:', error);
      setError('Ocorreu um erro. Tente novamente.');
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontFamily: '"TCCC Unity", sans-serif', color: '#2e7d32' }}
        >
          Criar Conta
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontFamily: 'Arial, sans-serif', color: '#555' }}
        >
          Preencha os campos para se registrar
        </Typography>

        <form onSubmit={handleRegister}>
          <TextField
            label="Nome"
            fullWidth
            required
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <TextField
            label="Confirmar Senha"
            type="password"
            fullWidth
            required
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{ mr: 1 }}
            >
              Registrar-se
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ ml: 1 }}
              onClick={() => router.push('/')}
            >
              Voltar
            </Button>
          </Box>
        </form>
      </FormWrapper>
    </Container>
  );
}
