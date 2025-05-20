import { deleteExpense } from "@/utils/expense/Expensedelete";

const authControllerDeleteExpense = {
  async delete(id: string): Promise<boolean> {
    try {
      await deleteExpense(id);
      return true;
    } catch (error) {
      console.error("Failed to delete expense:", error);
      return false;
    }
  }
};
export default authControllerDeleteExpense;