import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Create a NextAuth handler for the App Router
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account?.id_token) token.idToken = account.id_token;
            return token;
        },
        async session({ session, token }) {
            session.idToken = token.idToken;
            return session;
        },
    },
});

export { handler };