// middleware.js
import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Protect dashboard routes
  matcher: ["/dashboard/:path*"],
  // Redirect unauthenticated users to /login
  pages: {
    signIn: "/login",
  },
});
