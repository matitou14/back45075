import mongoose from 'mongoose'
import config from '../config/config.js'
import Cart from './mongo/cart.mongo.js'

export let User 
export let Cart

switch (config.persistence) {
    case "FILE":
        const {default:UserFile} = await import ('./file/users.file.js')
        const {default:CartFile} = await import ('./file/carts.file.js')
        User = UserFile
        Cart = CartFile
        break;
    case "MONGO":
       await  mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: config.mongoDBName,
        })


        const {default:UserMongo} = await import ('./mongo/users.mongo.js')
        const {default:CartMongo} = await import ('./mongo/cart.mongo.js')
        User = UserMongo
        Cart = CartMongo
        break;


    default:
        break;
}