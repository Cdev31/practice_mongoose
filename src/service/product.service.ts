
import {Model} from '../db/client'

class Service {

    public async findProducts(){
        const products = await Model.userModel.find();
        return products
    }

    public async createProduct(body:any){
        const newProduct = await Model.userModel.create(body)
        return newProduct
    }

}

export {Service}