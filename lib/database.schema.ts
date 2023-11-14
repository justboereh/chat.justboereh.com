import { datetime, int, mysqlTable, text } from 'drizzle-orm/mysql-core'

export const messagesSchema = mysqlTable('messages', {
  id: int('id').autoincrement().primaryKey().notNull(),
  text: text('text').notNull(),
  user: text('text').notNull(),
  date: datetime('date').notNull(),
})
