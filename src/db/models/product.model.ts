import {Schema} from 'mongoose'

enum Category {
    ELECTRONIC = 'Electronic',
    CLOTHES = 'Clothes',
    SHOES = 'Shoes'
}

interface IProduct {
    title: string
    description: string
    price: number
    stock: number
    image_url:string
    category: Category
}

const productSchema = new Schema<IProduct>({
    title: {
        type: String,
        required: true,
        minlength: 40
    },
    description: {
        type: String,
        required: true,
        minlength: 80
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    stock: {
        type: Number,
        required: true,
        min:5
    },
    image_url:{
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true,
        enum: Object.values(Category),
    } 
})

export {productSchema,IProduct}