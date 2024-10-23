export default eventHandler(async (event) => {
    const drizzle = useDrizzle();

    const form = await readFormData(event);
    const file = form.get("file") as File;
    const name = form.get("name") as string;

    if (!file || !file.size) {
        throw createError({ statusCode: 400, message: "No file provided" });
    }

    ensureBlob(file, {
        maxSize: "1MB",
        types: ["image"],
    });

    const product = await drizzle
        .insert(tables.products)
        .values({
            name,
            createdAt: new Date(),
        })
        .returning()
        .get();

    const blob = await hubBlob().put(
        `prd-main-${product.id}.${file.name.split(".").pop()}`,
        file,
        {
            addRandomSuffix: true,
            prefix: "images",
        }
    );

    return await drizzle
        .update(tables.products)
        .set({ image: blob.pathname })
        .where(eq(tables.products.id, product.id))
        .returning()
        .get();
});
