import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // Define public routes (update as needed)
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // Ensures middleware runs on all relevant routes
};
