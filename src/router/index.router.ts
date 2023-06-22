import {Application,Router} from 'express'

//internal import router
import {productRouter} from './product.router'
import {orderRouter} from './order.router'
import {storeRouter} from './store.router'
import {returnRouter} from './return.router'
import {userRouter} from './user.router'


const routerApi = (app:Application)=>{
    const router = Router()
    router.use('/Product',productRouter)
    router.use('/Order', orderRouter)
    router.use('/Store',storeRouter)
    router.use('/User', userRouter)
    router.use('/Return', returnRouter)
    app.use('/api/v1', router)
}

export {routerApi}