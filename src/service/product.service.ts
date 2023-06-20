
import {Model} from '../db/client'

class Service {

    public async findProducts(){
        const products = await Model.productModel.find();
        return products
    }

    public async findProductById(id:string){
        const product = await Model.productModel.findById(id)
        return product
    }

    public async createProduct(body:any){
        const newProduct = await Model.productModel.create(body)
        return newProduct
    }

    public async updateProduct(id:string,changes:any){
        const updateProduct = await Model.productModel.updateOne({_id: id},changes)
        return updateProduct
    }

    public async deleteProduct(id:string): Promise<boolean>{
        const deleteProduct = await Model.productModel.deleteOne({_id: id})
        if(deleteProduct.deletedCount > 0){
            return true
        }
        return false
    }

}

export {Service}