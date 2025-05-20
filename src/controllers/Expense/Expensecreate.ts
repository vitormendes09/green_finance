import { createExpense } from "@/utils/expense/Expensecreate";

const authControllerCreateExpense = {
  async create(
    iduser: string,
    description: string,
    amount: number,
    date: Date,
    category: string,
    status: boolean
  ): Promise<boolean> {
    try {
      await createExpense(iduser, description, amount, date, category, status);
      return true;
    } catch (error) {
      console.error("Failed to create expense:", error);
      return false;
    }
  }
};

export default authControllerCreateExpense;
