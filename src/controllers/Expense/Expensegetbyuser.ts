import { getExpenseByUser } from "@/utils/expense/Expensegetbyuser";

const authControllerGetExpenseByUser = {
  async get(userId: string): Promise<any[]> {
    try {
      const response = await getExpenseByUser(userId);
      return response.expenses ?? []; // <-- ajuste aqui
    } catch (error) {
      console.error("Failed to get expense by user:", error);
      return [];
    }
  },
};

export default authControllerGetExpenseByUser;

