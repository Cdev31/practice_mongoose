import {Schema} from 'mongoose' 



interface IProductSale {
    product_id: string,
    quantity: number
}

interface ISale {
    date: Date
    store: String
    products: Array<IProductSale>
}

const saleSchema = new Schema<ISale>({
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

export {ISale,saleSchema} 