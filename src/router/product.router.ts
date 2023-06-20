import {Router,Request,Response, NextFunction} from 'express'

//internal imports
import {Service} from '../service/product.service'
import {validateData} from '../middleware/validator.schema'
import {createProductSchema, queryProductSchema, updateProductSchema} from '../schemas/product.schema'
const ProductService =  new Service()

const router = Router()

router.get('/',
validateData('query',queryProductSchema),
async (_,res:Response,next:NextFunction)=>{
    try {
        const response = await ProductService.findProducts()
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',
async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await ProductService.findProductById(req.params.id)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})

router.post('/',
validateData('body',createProductSchema),
async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await ProductService.createProduct(req.body)
        res.status(201).json(response)
    } catch (error) {
        next(error)
    }
})

router.patch('/:id',
validateData('body',updateProductSchema),
async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await ProductService.updateProduct(req.params.id,req.body)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id',
async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await ProductService.deleteProduct(req.params.id)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})


export const productRouter = router