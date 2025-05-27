'use client';

import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import authControllerCreateExpense from '@/controllers/Expense/Expensecreate';

const AddExpense = () => {
  const router = useRouter();

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    setError('Usuário não autenticado.');
    return;
  }

  if (!description || !amount || !date || !category) {
    setError('Preencha todos os campos!');
    return;
  }

  setLoading(true);
  try {
    const created = await authControllerCreateExpense.create(
      userId,
      description,
      amount,
      new Date(date),
      category,
      
    );

    if (created) {
      setSuccess(true);
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } else {
      setError('Erro ao criar despesa. Tente novamente.');
    }
  } catch (err: any) {
    console.error('Erro inesperado:', err);
    setError(err?.response?.data?.message || 'Erro ao criar despesa. Tente novamente.');
  } finally {
    setLoading(false);
  }
};


  return (
    <Box sx={{ p: 4, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Adicionar Nova Despesa
      </Typography>

      {success && <Alert severity="success">Despesa criada com sucesso!</Alert>}
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
        <TextField
          label="Valor"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="Data"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <TextField
          label="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          select
          fullWidth
        >
          <MenuItem value="casa">Casa</MenuItem>
          <MenuItem value="alimentação">Alimentação</MenuItem>
          <MenuItem value="transporte">Transporte</MenuItem>
          <MenuItem value="lazer">Lazer</MenuItem>
          <MenuItem value="outros">Outros</MenuItem>
        </TextField>

        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Salvar Despesa'}
        </Button>
      </Box>
    </Box>
  );
};

export default AddExpense;
