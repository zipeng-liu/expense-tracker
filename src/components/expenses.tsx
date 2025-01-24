import { calculateTotal } from "@/utils/calculateTotal";
import ExpenseItem from "./expense-item";
import {
  expensesQuery,
  type ExpenseWithCategory,
} from "@/db/queries/expensesQuery";

interface ExpensesProps {
  date?: string;
}

export default async function Expenses({ date }: ExpensesProps) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const expenses: ExpenseWithCategory[] = await expensesQuery(date).execute();
  const totalExpenses = calculateTotal(expenses);

  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Expenses</h2>
        <div>
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Total Expenses</h2>
        <p className="text-lg font-bold">${totalExpenses.toFixed(2)}</p>
      </div>
    </>
  );
}
