import mongoose from 'mongoose'

//internal imports
import {config} from '../config'
import {createSchemas} from './models/index.model'

const main = async (): Promise<void> =>{
    try {
        await mongoose.connect(config.dbUrl != undefined ? config.dbUrl: '')
        console.log('succefull conecction')
    } catch (error) {
        console.log(error)
    }
}

const Model = createSchemas(mongoose)

export {main,Model}