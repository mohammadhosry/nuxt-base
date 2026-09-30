import { defineSeed } from 'void/seed'

export default defineSeed<typeof import('./schema')>(async ({ db, schema }) => {
    await db.insert(schema.users).values([
        {
            email: 'mohammad.hosry@gmail.com',
            password: 'mohammadmohammad',
        },
    ])
})
