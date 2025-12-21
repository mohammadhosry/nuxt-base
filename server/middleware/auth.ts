import { eq } from "drizzle-orm";
import { db, schema } from "hub:db";

const { users } = schema;

export default defineEventHandler(async (event) => {
  const userId = getCookie(event, "userId");

  if (!userId) {
    event.context.auth = null;
    return;
  }

  const user = await db.select({
    id: users.id,
    email: users.email,
  })
    .from(users)
    .where(eq(users.id, Number(userId)))
    .get();

  event.context.auth = user || null;
});
