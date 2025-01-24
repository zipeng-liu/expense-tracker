import { db } from "@/db";
import { categories as categoriesTable } from "@/db/schema/categories";

export const categoriesQuery = db.select().from(categoriesTable);
