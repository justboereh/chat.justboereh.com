import type { Config } from 'drizzle-kit'

export default {
  schema: './lib/database.schema.ts',
  out: './drizzle',
} satisfies Config
