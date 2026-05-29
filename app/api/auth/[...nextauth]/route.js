import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getDb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const googleClientId =
  process.env.GOOGLE_CLIENT_ID ||
  process.env.AUTH_GOOGLE_ID ||
  process.env.GOOGLE_ID;
const googleClientSecret =
  process.env.GOOGLE_CLIENT_SECRET ||
  process.env.AUTH_GOOGLE_SECRET ||
  process.env.GOOGLE_SECRET;

const maskEmail = (email) => {
  if (!email || typeof email !== "string") return email;
  const [name, domain] = email.split("@");
  if (!domain) return email;
  return `${name.slice(0, 2)}***@${domain}`;
};

const findUserByEmail = async (db, email) => {
  if (!email) return null;

  return db.collection("users").findOne({
    email: { $regex: `^${email.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" },
  });
};

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        const db = await getDb();
        const user = await findUserByEmail(db, credentials.email);
        
        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        
        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role
        };
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          const db = await getDb();
          const existingUser = await findUserByEmail(db, user.email);

          if (existingUser) {
            user.id = existingUser._id.toString();
            user.role = existingUser.role || "user";
            user.profileCompleted = existingUser.profileCompleted || false;
          } else {
            const insertResult = await db.collection("users").insertOne({
              email: user.email,
              name: user.name,
              image: user.image,
              role: "user",
              createdAt: new Date(),
              updatedAt: new Date(),
              profileCompleted: false,
            });
            user.id = insertResult.insertedId.toString();
            user.role = "user";
            user.profileCompleted = false;
          }
          console.info("[NextAuth] signIn callback resolved user", {
            provider: account.provider,
            email: maskEmail(user.email),
            hasId: Boolean(user.id),
            role: user.role,
          });
          return true;
        } catch (error) {
          console.error("Error saving user to DB:", error);
          return true; // Still allow sign in even if DB sync fails
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      const email = user?.email || token.email;

      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.profileCompleted = user.profileCompleted;
        token.dbHydrated = Boolean(user.id && user.role);
        console.info("[NextAuth] jwt callback received user", {
          email: maskEmail(user.email),
          hasId: Boolean(user.id),
          role: user.role,
          dbHydrated: token.dbHydrated,
        });
      }

      if (email && !token.dbHydrated) {
        try {
          const db = await getDb();
          const userData = await findUserByEmail(db, email);
          if (userData) {
            token.id = userData._id.toString();
            token.role = userData.role || "user";
            token.profileCompleted = userData.profileCompleted || false;
            token.dbHydrated = true;
            console.info("[NextAuth] jwt hydrated token from Mongo", {
              email: maskEmail(email),
              hasId: Boolean(token.id),
              role: token.role,
            });
          }
        } catch (e) {
          console.error("JWT DB error:", e);
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.email = token.email; // ensure email is passed
        session.user.profileCompleted = token.profileCompleted;
      }

      return session;
    },
  },
  session: {
    strategy: "jwt", // Required for CredentialsProvider
  },
  secret: process.env.NEXTAUTH_SECRET,
  useSecureCookies: process.env.NODE_ENV === "production",
  logger: {
    error(code, metadata) {
      console.error("[NextAuth][error]", code, {
        message: metadata?.error?.message,
        name: metadata?.error?.name,
        providerId: metadata?.providerId,
      });
    },
    warn(code) {
      console.warn("[NextAuth][warn]", code);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
