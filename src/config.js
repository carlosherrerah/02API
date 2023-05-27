import { config } from "dotenv"

config()
console.log(process.env.PORT)
console.log(process.env.DB_DATABASE)

export const PORT = process.env.PORT || 3000             // Si no existe que sea 3000

export const DB_HOST = process.env.DB_HOST || localhost  // Si no existe que sea localhost
export const DB_PORT = process.env.DB_PORT

export const DB_DATABASE = process.env.DB_DATABASE
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD



