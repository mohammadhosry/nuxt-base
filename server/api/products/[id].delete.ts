import { and, eq } from 'drizzle-orm';
import { db, schema } from 'hub:db'
import { blob } from 'hub:blob';

export default eventHandler(async (event) => {
    const { id } = getRouterParams(event);

    const deletedProduct = await db.delete(schema.products)
        .where(and(eq(schema.products.id, Number(id))))
        .returning()
        .get();

    if (!deletedProduct) {
        throw createError({
            statusCode: 404,
            message: "Product not found",
        });
    }

    if (deletedProduct.image) await blob.del(deletedProduct.image);

    return deletedProduct;
});
