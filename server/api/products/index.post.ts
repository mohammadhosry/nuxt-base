import { eq } from 'drizzle-orm';
import { db, schema } from 'hub:db'
import { blob } from 'hub:blob'


export default eventHandler(async (event) => {
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

    const product = await db
        .insert(schema.products)
        .values({
            name,
            createdAt: new Date(),
        })
        .returning()
        .get();

    const uploadedFile = await blob.put(
        `prd-main-${product.id}.${file.name.split(".").pop()}`,
        file,
        {
            addRandomSuffix: true,
            prefix: "images",
        }
    );

    return await db
        .update(schema.products)
        .set({ image: uploadedFile.pathname })
        .where(eq(schema.products.id, product.id))
        .returning()
        .get();
});
