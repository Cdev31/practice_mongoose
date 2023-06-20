import {Model} from '../db/client'

class StoreService {
    public async findStore(){
        const stores = await Model.storeModel.find()
        return stores
    }
    public async findByIdStore(id: string){
        const store = await Model.storeModel.findById(id)
        return store
        
    }

    public async createStore(body:any){
        const newStore = await Model.storeModel.create(body)
        return newStore
    }

    public async createProductStore(id:string,products:any){
        const newProducts = await Model.storeModel.updateOne({_id: id},{$set: {products: products}})
        return newProducts
    }
}

export {StoreService}