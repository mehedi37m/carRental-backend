import dotenv from 'dotenv'
dotenv.config()

export default {
  port: process.env.PORT,
  db_url: process.env.DATABASE_ACCESS,
  dev: process.env.NODE_ENV,
}
