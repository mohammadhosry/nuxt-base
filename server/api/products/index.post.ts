import { db, eq } from "void/db";
import { storage } from "void/storage";
import { products } from "@schema";

const MAX_SIZE = 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"];

export default eventHandler(async (event) => {
    const form = await readFormData(event);
    const file = form.get("file") as File;
    const name = form.get("name") as string;

    if (!file || !file.size) {
        throw createError({ statusCode: 400, message: "No file provided" });
    }

    if (file.size > MAX_SIZE) {
        throw createError({ statusCode: 413, message: "File exceeds 1MB" });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
        throw createError({ statusCode: 415, message: "Only image uploads are allowed" });
    }

    const product = await db
        .insert(products)
        .values({
            name,
            createdAt: new Date(),
        })
        .returning()
        .get();

    const extension = file.name.split(".").pop();
    const key = `void/images/prd-main-${product.id}-${crypto.randomUUID().slice(0, 8)}.${extension}`;

    await storage.put(key, file, {
        httpMetadata: { contentType: file.type },
    });

    return await db
        .update(products)
        .set({ image: key })
        .where(eq(products.id, product.id))
        .returning()
        .get();
});
