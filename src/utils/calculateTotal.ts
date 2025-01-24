import { type ExpenseWithCategory } from "@/db/queries/expensesQuery";

export function calculateTotal(expenses: ExpenseWithCategory[]): number {
  return expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
}
