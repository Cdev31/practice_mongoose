import {Router,Request,Response,NextFunction} from 'express'

//internal imports
import {ReturnService} from '../service/return.service'
import {validateData} from '../middleware/validator.schema'
import {createReturnSchema} from '../schemas/return.schema'

const returnService = new ReturnService()

const router = Router()

router.get('/', async (_:Request,res:Response,next:NextFunction)=>{
    try {
        const returns = await returnService.findReturns()
        res.status(200).json(returns)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const returnOne = await returnService.findReturnById(req.params.id)
        res.status(200).json(returnOne)
    } catch (error) {
        next(error)
    }
})

router.post('/',
validateData('body',createReturnSchema),
async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const newReturn = await returnService.createReturn(req.body)
        res.status(201).json(newReturn)
    } catch (error) {
        next(error)
    }
})

export const returnRouter = router