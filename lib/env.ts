import z from 'zod'
const envSchema = z.object({
  KV_URL: z.string()
})

export const ENV = envSchema.parse(process.env)
