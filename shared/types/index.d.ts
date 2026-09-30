import { users } from "../../db/schema";

export type User = Omit<typeof users.$inferSelect, "password">;
