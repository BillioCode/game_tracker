import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config"; // Ensure the path matches your file location

export default NextAuth(authConfig).auth;

export const config = {
  // This tells Next.js which routes to run the middleware on.
  // Currently protecting the profile and all its sub-pages.
  matcher: ["/profile/:path*"],
};
