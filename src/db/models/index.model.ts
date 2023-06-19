import {Mongoose} from 'mongoose'

//imports schemas
import { IProduct, productSchema } from './product.model'
import { IStore, storeSchema } from './store.model'
import { IUser, userSchema } from './user.model'
import { IOrder, orderSchema } from './orders.model'
import { ISale, saleSchema } from './sales.model'
import { IReturn, returnSchema } from './returns.model'

const createSchemas = (mongoose: Mongoose)=>{
   return {
     productModel:  mongoose.model<IProduct>('Product',productSchema),
     storeModel: mongoose.model<IStore>('Store',storeSchema),
     userModel: mongoose.model<IUser>('User',userSchema),
     orderModel: mongoose.model<IOrder>('Order', orderSchema),
     saleModel: mongoose.model<ISale>('Sale',saleSchema),
     returnModel: mongoose.model<IReturn>('Return',returnSchema)

   }
}

export {createSchemas}