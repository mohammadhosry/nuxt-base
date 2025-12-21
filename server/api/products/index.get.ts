import { db, schema } from 'hub:db'

export default eventHandler(async () => {
    const products = await db.select().from(schema.products).all();

    return products;
});
