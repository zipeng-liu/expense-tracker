import { Suspense } from "react";
import SubmitExpense from "./(create)/submit-expense";
import Expenses from "../components/expenses";
import ExpenseListSkeleton from "../components/skeletons/ExpenseListSkeleton";
import CreateExpenseFormSkeleton from "../components/skeletons/CreateExpenseFormSkeleton";

// Next.js 13 automatically gives you `searchParams` as an object, not a Promise.
// You can explicitly type it like this:
interface PageProps {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export default function Page({ searchParams }: PageProps) {
  // Safely handle `searchParams` and its potential structure:
  const date =
    searchParams && typeof searchParams.date === "string"
      ? searchParams.date
      : undefined;

  return (
    <>
      {/* Background gradient */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500 to-purple-500 z-0" />

      {/* Main content */}
      <main className="flex justify-center w-full bg-transparent overflow-x-hidden relative z-10">
        <div className="bg-white dark:bg-black rounded-xl shadow-xl w-96 p-6 my-10">
          <h1 className="text-4xl font-bold mb-4">Expense Tracker</h1>

          <Suspense fallback={<CreateExpenseFormSkeleton />}>
            <SubmitExpense />
          </Suspense>

          <Suspense fallback={<ExpenseListSkeleton />}>
            <Expenses date={date} />
          </Suspense>
        </div>
      </main>
    </>
  );
}
