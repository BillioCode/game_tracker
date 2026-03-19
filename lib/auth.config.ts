import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProfile = nextUrl.pathname.startsWith("/profile");

      if (isProfile) {
        if (isLoggedIn) return true;
        return false; // Redirects to login
      }
      return true;
    },
  },
  providers: [], // We leave this empty here
} satisfies NextAuthConfig;
