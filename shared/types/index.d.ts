import { users } from "../../server/db/schema";

export type User = Omit<typeof users.$inferSelect, "password">;
