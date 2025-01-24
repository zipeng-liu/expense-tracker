// expenses.ts
import { pgTable, uuid, numeric, text, date } from "drizzle-orm/pg-core";
import { categories } from "./categories";

export const expenses = pgTable("expenses", {
  id: uuid("id").defaultRandom().primaryKey(),
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
  description: text("description").notNull(),
  date: date("date").notNull(),
  categoryId: uuid("category_id") // Ensure this is `uuid`
    .references(() => categories.id)
    .notNull(),
});

export type Expense = typeof expenses.$inferSelect;
export type NewExpense = typeof expenses.$inferInsert;
