import 'dotenv/config'

const config = {
    port: process.env.PORT || 8080,
    dbUrl: process.env.DB_URL
}

export {config}