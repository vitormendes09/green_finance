'use client';

import { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  CircularProgress,
  Button,
} from '@mui/material';
import authControllerGetUser from '@/controllers/User/Userget';
import authControllerGetExpenseByUser from '@/controllers/Expense/Expensegetbyuser';
import authControllerGetExpenseByCategory from '@/controllers/Expense/Expensegetbycategory';
import ExpenseCard from '@/presentation/dashboard/ExpenseCard';
import { IExpense } from '@/contracts/entities/Iexpense';
import Link from 'next/link';

const Dashboard = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const id = localStorage.getItem('userId');
      if (!id) return;
      setUserId(id);

      const user = await authControllerGetUser.fetchUser(id);
      if (user) setUserName(user.name);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (userId) fetchExpenses(userId);
  }, [userId]);

  const fetchExpenses = async (id: string) => {
    setLoading(true);
    const data = await authControllerGetExpenseByUser.get(id);
    if (data) setExpenses(data);
    setLoading(false);
  };

  const handleFilter = async (category: string) => {
    if (!userId) return;
    setCategoryFilter(category);

    if (category.trim() === '') {
      fetchExpenses(userId);
      return;
    }

    setLoading(true);
    const filtered = await authControllerGetExpenseByCategory.get(userId, category);
    if (filtered) setExpenses(filtered);
    setLoading(false);
  };

  const handleDelete = (deletedId: string) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== deletedId));
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 900, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Olá, {userName ?? 'Carregando...'}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Seja bem-vindo ao <strong>Green Finance</strong>! 🌿
      </Typography>

      <Box mt={4} mb={2}>
        <TextField
          fullWidth
          label="Filtrar por categoria"
          variant="outlined"
          value={categoryFilter}
          onChange={(e) => handleFilter(e.target.value)}
        />
      </Box>

      {/* Título e botão em linha */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={2}>
        <Typography variant="h6">Minhas despesas:</Typography>
        <Link href="/addexpense" passHref>
          <Button variant="contained" color="primary">
            Adicionar Despesa
          </Button>
        </Link>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : expenses.length > 0 ? (
        <Box display="flex" flexDirection="column" gap={2}>
          {expenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              onDelete={handleDelete}
            />
          ))}
        </Box>
      ) : (
        <Typography variant="body1" mt={2}>
          Nenhuma despesa encontrada.
        </Typography>
      )}
    </Box>
  );
};

export default Dashboard;
