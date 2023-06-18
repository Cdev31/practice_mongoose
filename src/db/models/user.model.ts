import {Schema} from 'mongoose'

enum Role {
    ADMIN = 'Administrator',
    NORMAL = 'Normal'
}

interface IUser {
    firstName: string
    surname: string
    email: string
    password: string
    dateOfBirth: Date
    role: Role | String
}


const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        minlength:3
    },
    surname:{
        type: String,
        required: true,
        minlength:3
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type:String,
        required: true,
    },
    dateOfBirth:{
        type: Date,
        required:true
    },
    role: {
        type: Object.values(Role),
        required:true,
        default: Role.NORMAL
    }
})

export {userSchema,IUser}
