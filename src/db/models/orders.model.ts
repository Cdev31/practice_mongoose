import {Schema} from 'mongoose'



interface IProductOrder{
    product_id: string
    quantity: number
}

interface IUserOrder{
    firstName: string,
    email: string
}

interface IOrder {
    date: Date
    store: string
    user: Array<IUserOrder>
    products: Array<IProductOrder>
}

const orderSchema = new Schema<IOrder>({
    date: {
        type: Date,
        required:true,
        validate:{
            validator: (value:Date)=>{
                return value.getTime() <= Date.now() 
            },
            message: 'La fecha no puede ser del mismo dia'
        },
        default: Date.now()
    },
    store: {
        name: {
            type:String,
            required:true
        },
        store_id:{
            type: Schema.Types.ObjectId,
            required:true
        }
    },
    user: {
        firstName:{
        type: String,
        required:true
       },
       email: {
        type:String,
        required:true,
       }
    },
    products: [
        {
            product_id: {
                type: Schema.Types.ObjectId,
                required:true,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                required:true,
                min:5
            }
        }
    ]
})

export {orderSchema,IOrder}