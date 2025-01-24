import { defineConfig } from "drizzle-kit"
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env.local',
});

export default defineConfig({
  schema: "./src/db/schema/*",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.MIGRATION_DATABASE_URL!,
  },
  verbose: true,
  strict: true,
  out: "./drizzle",
})
