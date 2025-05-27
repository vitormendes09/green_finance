import { createExpense } from "@/utils/expense/Expensecreate";

const authControllerCreateExpense = {
  async create(
    userId: string,
    description: string,
    amount: number,
    date: Date,
    category: string,
    
  ): Promise<boolean> {
    try {
      await createExpense(userId, description, amount, date, category);
      return true;
    } catch (error) {
      console.error("Failed to create expense:", error);
      return false;
    }
  }
};

export default authControllerCreateExpense;
