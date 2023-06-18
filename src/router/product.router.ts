import {Router,Request,Response} from 'express'

import {Service} from '../service/product.service'

const ProductService =  new Service()

const router = Router()

router.get('/', async (_,res:Response)=>{
    try {
        const response = await ProductService.findProducts()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})

router.post('/', async (req:Request,res:Response)=>{
    try {
        const response = await ProductService.createProduct(req.body)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})

export const productRouter = router