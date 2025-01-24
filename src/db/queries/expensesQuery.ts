import { db, eq, and } from "@/db";

import { expenses as expensesTable } from "@/db/schema/expenses";
import { categories as categoriesTable } from "@/db/schema/categories";

export const expensesQuery = (date?: string) => {
  return db
    .select({
      id: expensesTable.id,
      amount: expensesTable.amount,
      description: expensesTable.description,
      date: expensesTable.date,
      category: {
        id: categoriesTable.id,
        name: categoriesTable.name,
      },
    })
    .from(expensesTable)
    .innerJoin(
      categoriesTable,
      eq(categoriesTable.id, expensesTable.categoryId)
    )
    .where(date ? eq(expensesTable.date, date) : undefined)
    .prepare("get_expenses_with_categories");
};

export type ExpenseWithCategory = Awaited<
  ReturnType<ReturnType<typeof expensesQuery>["execute"]>
>[0];
