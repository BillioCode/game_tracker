// src/lib/prisma.ts
import { PrismaClient } from "./generated/prisma";

// Step 1: Create a function to instantiate the client
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Step 2: Declare a global variable for reusability
// This is necessary to attach the client to the global object
// in development mode, specifically for Next.js hot-reloading.
declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

// Step 3: Use the existing client if available, otherwise create a new one
export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// Step 4: Store the client globally in development mode
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
