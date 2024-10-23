import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
    try {
        const user = await serverSupabaseUser(event);
        console.log("auth middleware user id", user?.id);

        event.context.auth = user;
    } catch (error) {
        event.context.auth = null;

        if (event.node.req.method !== "GET") {
            throw createError({
                statusCode: 401,
                statusMessage: "Unauthorized",
            });
        }
    }
});
