import {Application,Router} from 'express'

//internal import router
import {productRouter} from './product.router'

const routerApi = (app:Application)=>{
    const router = Router()
    router.use('/Product',productRouter)
    app.use('/api/v1',router)
}

export {routerApi}