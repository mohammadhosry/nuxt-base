import { db } from 'void/db'
import { users } from '@schema'

export default defineTask({
    meta: {
        name: 'db:seed',
        description: 'Seed database with initial data'
    },
    async run() {
        console.log('Seeding database...')

        const seedUsers = [
            {
                email: 'mohammad.hosry@gmail.com',
                password: 'mohammadmohammad',
            },
        ]

        await db.insert(users).values(seedUsers)

        return { result: 'Database seeded successfully' }
    }
})
