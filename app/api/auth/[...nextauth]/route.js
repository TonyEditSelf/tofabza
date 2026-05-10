import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getDb } from "@/lib/mongodb";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        try {
          const db = await getDb();
          const existingUser = await db.collection("users").findOne({ email: user.email });

          if (!existingUser) {
            await db.collection("users").insertOne({
              email: user.email,
              name: user.name,
              image: user.image,
              createdAt: new Date(),
              updatedAt: new Date(),
              profileCompleted: false,
            });
          }
          return true;
        } catch (error) {
          console.error("Error saving user to DB:", error);
          return true; // Still allow sign in even if DB sync fails
        }
      }
      return true;
    },
    async session({ session, token }) {
      try {
        const db = await getDb();
        const userData = await db.collection("users").findOne({ email: session.user.email });
        
        if (userData) {
          session.user.id = userData._id.toString();
          session.user.phone = userData.phone || null;
          session.user.profileCompleted = !!userData.phone;
          session.user.dbName = userData.name;
          session.user.cart = userData.cart || [];
        }
      } catch (error) {
        console.error("Session callback error:", error);
      }
      return session;
    },
  },
  pages: {
    signIn: "/", // Redirect to home if something goes wrong
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
