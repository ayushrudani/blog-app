import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: "434620349749-42t9jiqr2kh4idh3g8taod87udumklmn.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};
