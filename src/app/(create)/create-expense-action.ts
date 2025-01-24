"use server";

import { db } from "@/db";
import { expenses } from "@/db/schema/expenses";
import { NewExpense } from "@/db/schema/expenses";
import { revalidatePath } from "next/cache";

export async function createExpense({
  description,
  amount,
  date,
  categoryId,
}: NewExpense) {
  if (description.length < 3) {
    throw new Error("Description should contain at least 3 characters");
  }
  if (!amount || !description) {
    throw new Error("Amount and Description must be filled out");
  }
  if (!categoryId) {
    throw new Error("Category must be selected");
  }
  try {
    await db.insert(expenses).values({
      description,
      date: date,
      amount: amount,
      categoryId,
    });
    revalidatePath("/");
  } catch (error) {
    throw new Error("Failed to add expense");
  }
}
