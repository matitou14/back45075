import dotenv from 'dotenv'
dotenv.config()

export default {
    persistence: process.env.PERSISTENCE || "FILE",
    mongoURI: process.env.MONGO_URI || "mongodb+srv://matitouthe14:Alejo.2510@cluster0.rexogvr.mongodb.net/ecommerce?retryWrites=true&w=majority", 
    mongoDBName: process.env.MONGO_DB_NAME,
    port: process.env.PORT || 8080,
    admin_mail: process.env.ADMIN_MAIL,
    admin_password: process.env.ADMIN_PASSWORD,
}
