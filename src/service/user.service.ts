import {Model} from '../db/client'

class UserService{

    public async findUsers(){
        const users = await Model.userModel.find()
        return users
    }

    public async findByIdUser(id:string){
        const user = await Model.userModel.findById(id)
        return user
    }

    public async createUser(body:any){
        const newUser = await Model.userModel.create(body)
        return newUser
    }

    public async updateUser(id:string,changes:any){
        const updateUser = await Model.userModel.updateOne({_id: id},changes)
        if (updateUser.modifiedCount > 0){
            return this.findByIdUser(id)
        }
        return false
    }

    public async deleteUser(id:string){
        const deleteUser = await Model.userModel.deleteOne({_id: id})
        if (deleteUser.deletedCount > 0){
            return true
        }
        return false
    }

    
}

export {UserService}