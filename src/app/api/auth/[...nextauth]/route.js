import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { compare } from 'bcryptjs';
import { getDb } from '../../../../lib/db';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Demo user - in a real app, you would fetch from your database
        if (
          credentials.email === 'admin@example.com' &&
          credentials.password === 'password123'
        ) {
          return {
            id: 1,
            email: 'admin@example.com',
            name: 'Admin User',
          };
        }

        // If using a database
        /*
        const db = await getDb()
        const user = await db.get('SELECT * FROM users WHERE email = ?', [credentials.email])
        
        if (user && await compare(credentials.password, user.password)) {
          return {
            id: user.id,
            email: user.email,
            name: user.name
          }
        }
        */

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
