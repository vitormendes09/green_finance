import { IExpense } from '@/contracts/entities/Iexpense';
import authControllerDeleteExpense from '@/controllers/Expense/Expensedelete';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { green } from '@mui/material/colors';

interface ExpenseCardProps {
  expense: IExpense;
  onDelete?: (id: string) => void;
}

export default function ExpenseCard( { expense, onDelete }: ExpenseCardProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDelete = async () => {
    const confirmed = window.confirm("Deseja realmente excluir esta despesa?");
    if (!confirmed) return;

    const success = await authControllerDeleteExpense.delete(expense.id!);
    if (success && onDelete) {
      onDelete(expense.id);
    }
  };

  return (
    <Card sx={{ marginBottom: 2, borderLeft: `6px solid ${green[500]}`, borderRadius: 2 }}>
      <CardContent>
        <Box
          display="flex"
          flexDirection={isSmallScreen ? 'column' : 'row'}
          alignItems={isSmallScreen ? 'flex-start' : 'center'}
          justifyContent="space-between"
          gap={2}
        >
          <Box flex={2}>
            <Typography variant="h6" color="text.primary">
              {expense.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Categoria: {expense.category}
            </Typography>
          </Box>

          <Box flex={1}>
            <Typography variant="subtitle1" color="text.primary">
              💰 R$ {expense.amount.toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(expense.date).toLocaleDateString()}
            </Typography>
          </Box>

          <Box flex={1}>
            <Typography
              variant="body2"
              color={expense.status ? green[700] : 'error'}
              fontWeight="bold"
            >
              {expense.status ? 'Pago' : 'Pendente'}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleDelete} color="error" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
