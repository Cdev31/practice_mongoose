import {Model} from '../db/client'



class ReturnService {
    
    public async findReturns() {
        const returns = await Model.returnModel.find()
        return returns
    }

    public async findReturnById(id:string){
        const returnProduct = await Model.returnModel.findById(id)
        return returnProduct
    }

    public async createReturn(body:any){
        const newReturn = await Model.returnModel.create(body)
        return newReturn
    }

}

export {ReturnService}