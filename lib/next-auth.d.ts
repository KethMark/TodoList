import { Role } from '@prisma/client'
import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
    interface JWT {
        role: Role
    }
}

declare module 'next-auth' {
    interface Session {
        user: User & {
            role: Role
        }
    }
}