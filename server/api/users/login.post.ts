import { eq } from 'drizzle-orm';
import { db, schema } from 'hub:db'

// login
export default eventHandler(async (event) => {
    const body = await readBody(event);
    const { email, password } = body;

    const user = await db.select().from(schema.users).where(eq(schema.users.email, email)).get();

    if (!user || user.password !== password) {
        throw createError({
            statusCode: 401,
            message: 'Invalid email or password'
        });
    }

    // set id in cookies or headers as needed
    setCookie(event, "userId", String(user.id), {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: true,
        secure: process.env.NODE_ENV === "production",
    });

    // In a real application, you would generate a JWT or session here
    return { message: 'Login successful', userId: user.id };
});