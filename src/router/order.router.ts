import {Router,Request,Response,NextFunction} from 'express'


//internal imports
import {createOrderSchema} from '../schemas/order.schema'
import {validateData} from '../middleware/validator.schema'
import {Service} from '../service/order.service'
import {StoreService} from '../service/store.service'

const orderService = new Service()
const storeService = new StoreService()

const router = Router()

router.get('/',async (_:Request,res:Response,next:NextFunction)=>{
    try {
        const orders = await orderService.findOrder()
        res.status(200).json(orders)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const order = await orderService.findByIdOrder(req.params.id)
        res.status(200).json(order)
    } catch (error) {
        next(error)
    }
})

router.post('/',
validateData('body',createOrderSchema),
async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const newOrder = await orderService.createOrder(req.body)
        await storeService.createProductStore(newOrder._id.toString(),req.body.products.product_id)
        res.status(201).json(newOrder)
    } catch (error) {
        next(error)
    }
})

export const orderRouter = router