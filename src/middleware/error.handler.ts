import {MongooseError} from 'mongoose'
import {Request,Response,NextFunction} from 'express'

function handlerConsoleError(err: Error,_:Request,res:Response,next: NextFunction){
    console.log(err)
    next(err)   
}

function handlerErrorSever(err: Error, _:Request,res:Response,next:NextFunction){
    if(err){
        res.status(500).json({
            err: err.stack,
            message: err.message
        })
    }
}

function handlerMongoError(err:Error,_:Request,res:Response,next:NextFunction){
    if(err instanceof MongooseError){
        res.status(409).json({
            err: err.name,
            message: err.message
        })
    }   
    next(err)
}

export{
    handlerConsoleError,
    handlerErrorSever,
    handlerMongoError
}