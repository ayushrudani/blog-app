import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
};
