import {Request,Response,NextFunction} from 'express'


function validateParams(req:Request,res:Response,next:NextFunction){
    if(req.method == 'DELETE' || req.method == 'PATCH'){
        if(req.params = {}){
            res.status(400).json({
                message: 'Id required'
               })
        }
    }
    next()
}

export {validateParams}