import { byCategory } from "@/utils/expense/Expensegetbycategory";

const authControllerGetExpenseByCategory = {
  async get(iduser: string, category: string): Promise<any> {
    try {
      const response = await byCategory(iduser, category);
      return response;
    } catch (error) {
      console.error("Failed to get expense by category:", error);
      return null;
    }
  },
};
export default authControllerGetExpenseByCategory;

