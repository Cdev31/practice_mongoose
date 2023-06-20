import {Router,Request,Response,NextFunction} from 'express'

//internal imports
import {validateData} from '../middleware/validator.schema'
import {createStoreSchema} from '../schemas/store.schema'
import {StoreService} from '../service/store.service'

const storeService = new StoreService()
const router = Router()

router.get('/', async (_:Request,res:Response,next:NextFunction)=>{
    try {
        const store = await storeService.findStore()
        res.status(200).json(store)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const store = await storeService.findByIdStore(req.params.id)
        res.status(200).json(store)
    } catch (error) {
        next(error)
    }
})

router.post('/',
validateData('body',createStoreSchema),
async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const newStore = await storeService.createStore(req.body)
        res.status(201).json(newStore)
    } catch (error) {
        next(error)
    }
})

export const storeRouter = router