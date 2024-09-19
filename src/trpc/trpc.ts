import { initTRPC } from "@trpc/server";
import { ExpressContext } from "../server";


const trpc = initTRPC.context<ExpressContext>().create();

export const router = trpc.router;
export const publicProcedure = trpc.procedure;
