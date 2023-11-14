import { drizzle as Drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'

const connection = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
})

export const drizzle = Drizzle(connection)

export * from './database.schema'
