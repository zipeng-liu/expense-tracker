import DeleteExpense from "../app/(delete)/delete-expense";
import { type ExpenseWithCategory } from "@/db/queries/expensesQuery";

export default async function ExpenseItem({
  expense,
}: {
  expense: ExpenseWithCategory;
}) {
  return (
    <>
      <div>
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl shadow-md mb-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">{expense.description}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {expense.date}
            </p>
          </div>
          <div className="flex gap-x-4 h-full items-center text-right">
            <div>
              <p className="text-lg font-bold">{expense.amount}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {expense.category.name}
              </p>
            </div>
            <DeleteExpense expenseId={expense.id} />
          </div>
        </div>
      </div>
    </>
  );
}
