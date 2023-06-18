import {Schema} from 'mongoose'

import {IProduct} from './product.model'

interface IStore {
    name: string 
    address: string
    products: Array<IProduct>
}

const storeSchema = new Schema<IStore>({
    name: {
        type: String,
        required: true,
        minlength:5,
        maxlength:15
        
    },
    address:{
        type: String,
        required: true,
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

export {storeSchema,IStore}

