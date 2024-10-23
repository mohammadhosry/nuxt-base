export default eventHandler(async () => {
    const products = await useDrizzle().select().from(tables.products).all();

    return products;
});
