import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        CredentialProvider({
            name: "user-credentials",
            id: "user-credentials",
            authorize: async (credentials) => {
                const user = { email: credentials.email, role: credentials.role,language:credentials.language }
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        }),
        CredentialProvider({
            name: "admin-credentials",
            id: "admin-credentials",
            authorize: async (credentials) => {
                const user = { email: credentials.email, role: credentials.role }
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        }),
        CredentialProvider({
            name: "creator-credentials",
            id: "creator-credentials",
            authorize: async (credentials) => {
                const user = { email: credentials.email, role: credentials.role }
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user){
                token.role = user.role
                token.language = user.language
            }
            return token
        },
        session({ session, token }) {
            session.user.role = token.role
            session.user.language = token.language
            return session
        }
    },

})