import { db, and, eq } from 'void/db';
import { storage } from 'void/storage';
import { products } from '@schema';

export default eventHandler(async (event) => {
    const { id } = getRouterParams(event);

    const deletedProduct = await db.delete(products)
        .where(and(eq(products.id, Number(id))))
        .returning()
        .get();

    if (!deletedProduct) {
        throw createError({
            statusCode: 404,
            message: "Product not found",
        });
    }

    if (deletedProduct.image) await storage.delete(deletedProduct.image);

    return deletedProduct;
});
