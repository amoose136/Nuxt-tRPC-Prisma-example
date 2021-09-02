import { defineNuxtMiddleware } from '@nuxtjs/composition-api'
import * as trpc from '@trpc/server'
import { color, PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient();

export default defineNuxtMiddleware( ctx => {
    // do stuff
    const allColors = createRouter()
    .query('list', {
        resolve(){
            const colors: color[] = await prisma.color.findMany()
            return colors;
        }
    });

    const 
    export const apiRouter = trpc.router<Context>(ctx).query('hello', {
        input: z
          .object({
            text: z.string().nullish(),
          })
          .nullish(),
        resolve({ input }) {
          return {
            greeting: `hello ${input?.text ?? 'world'}`,
          };
        },
      });
    
    export type AppRouter = typeof apiRouter;
}