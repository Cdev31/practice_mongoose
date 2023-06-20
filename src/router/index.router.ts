import {Application,Router} from 'express'

//internal import router
import {productRouter} from './product.router'
import {orderRouter} from './order.router'
import {storeRouter} from './store.router'

const routerApi = (app:Application)=>{
    const router = Router()
    router.use('/Product',productRouter)
    router.use('/Order',orderRouter)
    router.use('/Store',storeRouter)
    app.use('/api/v1',router)
}

export {routerApi}