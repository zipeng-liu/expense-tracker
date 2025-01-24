"use client"; // (Optional) Only if you need client-side behavior

import { Suspense } from "react";
import SubmitExpense from "./(create)/submit-expense";
import Expenses from "../components/expenses";
import CreateExpenseFormSkeleton from "../components/skeletons/CreateExpenseFormSkeleton";
import ExpenseListSkeleton from "../components/skeletons/ExpenseListSkeleton";

export default function Page() {
  return (
    <>
      {/* Background gradient */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500 to-purple-500 z-0"></div>

      {/* Main content */}
      <main className="flex justify-center w-full bg-transparent overflow-x-hidden relative z-10">
        <div className="bg-white dark:bg-black rounded-xl shadow-xl w-96 p-6 my-10">
          <h1 className="text-4xl font-bold mb-4">Expense Tracker</h1>

          <Suspense fallback={<CreateExpenseFormSkeleton />}>
            <SubmitExpense />
          </Suspense>

          <Suspense fallback={<ExpenseListSkeleton />}>
            <Expenses />
          </Suspense>
        </div>
      </main>
    </>
  );
}
