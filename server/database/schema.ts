import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const products = sqliteTable('products', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    avatar: text('image'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})
