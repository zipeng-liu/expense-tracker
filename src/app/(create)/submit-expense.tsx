import { categoriesQuery } from "@/db/queries/categoriesQuery";
import CreateExpenseForm from "./create-expense-form";

export default async function CreateExpensePage() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const categories = await categoriesQuery.execute();

  return <CreateExpenseForm categories={categories} />;
}
