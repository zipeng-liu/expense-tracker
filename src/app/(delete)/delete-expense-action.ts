"use server";

import { db } from "@/db";
import { expenses } from "@/db/schema/expenses";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function deleteExpense(expenseId: string) {
  if (!expenseId) {
    throw new Error("Expense ID is required");
  }

  try {
    await db.delete(expenses).where(eq(expenses.id, expenseId));
    revalidatePath("/"); 
  } catch (error) {
    throw new Error("Failed to delete expense");
  }
}
