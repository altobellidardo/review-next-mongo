import { connectDB } from '@/libs/dbconnection'
import User from '@/models/user'
import nextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

const handler = nextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password', placeholder: '********' }
      },
      async authorize (credentials, _req) {
        await connectDB()
        const userFound = await User.findOne({ username: credentials.username }).select('+password')
        if (!userFound) throw new Error('User not found')

        const passwordMatch = await bcrypt.compare(credentials.password, userFound.password)
        if (!passwordMatch) throw new Error('Wrong password')

        const user = {
          _id: userFound._id,
          username: userFound.username,
          email: userFound.email,
          createdAt: userFound.createdAt
        }
        return user
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token.user = user
      return token
    },
    session: async ({ session, token }) => {
      if (token) session.user = token.user
      return session
    }
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/'
  }

})

export { handler as GET, handler as POST }
