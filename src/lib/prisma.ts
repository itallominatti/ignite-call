import { PrismaClient } from '@prisma/client'

export const prsiam = new PrismaClient({
    log: ['query'],
})