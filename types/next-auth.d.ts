declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name: string;
    image?: string;
  }

  interface Session {
    user: User;
    accessToken?: string;
  }
} 