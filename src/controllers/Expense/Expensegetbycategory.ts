import { getExpenseByUser } from "@/utils/expense/Expensegetbyuser";

const authControllerGetExpenseByUser = {
  async get(iduser: string): Promise<any> {
    try {
      const response = await getExpenseByUser(iduser);
      return response;
    } catch (error) {
      console.error("Failed to get expense by user:", error);
      return null;
    }
  },
};
export default authControllerGetExpenseByUser;