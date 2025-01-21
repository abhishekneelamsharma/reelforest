import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        CredentialProvider({
            name: "user-credentials",
            id: "user-credentials",
            authorize: async (credentials) => {
                const user = { user_id: credentials.user_id, username: credentials.username, role: credentials.role, language: credentials.language }
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
                const user = { email: credentials.email, user_id: credentials.creator_id, role: credentials.role, name: credentials.name }
                console.log(user);
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
            if (user) {
                token.role = user.role
                token.language = user.language
                token.user_id = user.user_id
                token.name = user.name
            }
            return token
        },
        session({ session, token }) {
            session.user.role = token.role
            session.user.language = token.language
            session.user.user_id = token.user_id
            session.user.name = token.name
            return session
        }
    },

})