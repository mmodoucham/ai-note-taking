import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({
  path: ".env.local",
});
export default {
  driver: "pg",
  schema: "./lib/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
} satisfies Config;
