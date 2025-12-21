export default eventHandler(async (event) => {
    const auth = event.context.auth;

    if (!auth) {
        throw createError({
            statusCode: 401,
            message: "Unauthorized",
        });
    }

    // const user = await db.select()
    //     .from(schema.users)
    //     .where(eq(schema.users.id, Number(auth.id)))
    //     .get();

    // if (!user) {
    //     throw createError({
    //         statusCode: 404,
    //         message: "User not found",
    //     });
    // }

    return auth;
});