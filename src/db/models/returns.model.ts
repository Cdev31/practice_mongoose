import {Schema} from 'mongoose' 



interface IProductReturn {
    product_id: string,
    quantity: number
}

interface IReturn {
    date: Date
    store: String
    products: Array<IProductReturn>
}

const returnSchema = new Schema<IReturn>({
    date: {
        type: Date,
        required: true
    },
    store: {
        type: String,
        required: true
    },
    products:[
        {
            product_id: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                required: true,
                min: 0
            }
        }
    ]

})

export {IReturn,returnSchema} 