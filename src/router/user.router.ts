import {Router,Request,Response,NextFunction} from 'express'


//internal imports
import {validateData} from '../middleware/validator.schema'
import {createUserSchema} from '../schemas/user.schema'
import {UserService} from '../service/user.service'

const userService = new UserService()
const router = Router()

router.get('/',async (_:Request,res:Response,next:NextFunction)=>{
    try {
        const users = await userService.findUsers()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
})


router.get('/:id',async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const user = await userService.findByIdUser(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
})


router.post('/',
validateData('body',createUserSchema),
async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const newUser = await userService.createUser(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
})


router.patch('/:id',async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const updateUser = await userService.updateUser(req.params.id,req.body)
        res.status(200).json(updateUser)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id',async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const deleteUser = await userService.deleteUser(req.params.id)
        res.status(200).json(deleteUser)
    } catch (error) {
        next(error)
    }
})

export const userRouter = router