import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import Email from 'next-auth/providers/email'

const authOptions: NextAuthOptions = {
    providers: [
        CredentialProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const user = {
                    id: '1',
                    email: 'admin@gmail.com',
                    password: '123',
                    name: 'Administrador sistema',
                    role: 'admin'
                }

                const isValidEmail = user.email === credentials?.email;
                const isValidPassword = user.password === credentials?.password;

                if(!isValidEmail || !isValidPassword) {
                    return null
                }
                return user
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }