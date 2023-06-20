import {mongo} from 'mongoose'
import {Model} from '../db/client'

class Service{
    public async findOrder(){
        const orders = await Model.orderModel.aggregate([
            {
                $lookup:{
                    from: 'products',
                    localField: 'products.product_id',
                    foreignField: '_id',
                    as: 'products'
                }
            }
        ])
        return orders
    }
    public async findByIdOrder(id:string){
        const order = await Model.orderModel.aggregate([
            {
                $match: { _id: mongo.ObjectId.createFromHexString(id) }
            },{
                $lookup:{
                    from: 'products',
                    localField: 'products.product_id',
                    foreignField: '_id',
                    as: 'products'
                }
            }
        ])
        return order
    }

    public async createOrder(body:any){
        const newOrder = await Model.orderModel.create(body)
        return newOrder
    }
}

export {Service}