
import { byCategory } from "@/utils/expense/Expensegetbycategory";

const authControllerGetExpenseByCategory = {
  async get(userId: string, category: string): Promise<any> {
      try {
        const response = await byCategory(userId, category);
        return response;
      } catch (error) {
        console.error("Failed to get expense by category:", error);
        return null;
      }
    },
};
export default authControllerGetExpenseByCategory;

