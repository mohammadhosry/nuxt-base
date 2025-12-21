import { db, schema } from 'hub:db'

export default defineTask({
    meta: {
        name: 'db:seed',
        description: 'Seed database with initial data'
    },
    async run() {
        console.log('Seeding database...')

        const users = [
            {
                email: 'mohammad.hosry@gmail.com',
                password: 'mohammadmohammad',
            },
        ]

        await db.insert(schema.users).values(users)

        return { result: 'Database seeded successfully' }
    }
})
