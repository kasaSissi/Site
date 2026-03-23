import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  products: router({
    getAll: publicProcedure.query(async () => {
      try {
        const response = await fetch('https://res.cloudinary.com/dipruvqks/image/list/Sitekasasissi.json');
        if (!response.ok) return { products: [], bancoProducts: [] };
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        return { products: [], bancoProducts: [] };
      }
    }),
    
    save: protectedProcedure
      .input(z.object({
        products: z.array(z.any()),
        bancoProducts: z.array(z.any())
      }))
      .mutation(async ({ input }) => {
        console.log('Salvando produtos:', input);
        return { success: true };
      })
  }),
});

export type AppRouter = typeof appRouter;
