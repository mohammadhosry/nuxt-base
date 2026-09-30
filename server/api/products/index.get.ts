import { db } from "void/db";
import { products } from "@schema";

export default eventHandler(async () => {
  return await db.select().from(products).all();
});
