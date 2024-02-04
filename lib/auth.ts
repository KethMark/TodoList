import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import prisma from "./prisma"
import { Role } from "@prisma/client"

export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
  events: {
    async linkAccount({user}) {
      await prisma.user.update({
        where: {id: user.id},
        data: {emailVerified: new Date()}
      })
    }
  },
  callbacks: {
    async session({token, session}) {

      if(token.role && session.user) {
        session.user.role = token.role as Role
      }

      if(token.sub && session.user) {
        session.user.id = token.sub
      }

      return session
    },
    async jwt ({token}) {

      if(!token.sub) return null

      const user = await prisma.user.findUnique({
        where: {
          id: token.sub
        }
      })

      if (!user) return token

      token.role = user.role
      return token
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
})