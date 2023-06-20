import Express,{Response} from 'express'

//internal imports
import {config} from './config'
import {main} from './db/client'
import {routerApi} from './router/index.router'

//middlewares of error
import {handlerConsoleError,handlerErrorSever,handlerMongoError} from './middleware/error.handler'
import {validateParams} from './middleware/validator.params'

main()
const app = Express()
app.use(Express.json())


app.get('/',(_,res:Response)=>{
    res.status(200).json({
        'gretting': 'Hello my Api'
    })
})

routerApi(app)
app.use(validateParams)
app.use(handlerConsoleError)
app.use(handlerMongoError)
app.use(handlerErrorSever)

app.listen(config.port,()=>{
    console.log('Api in port: ', config.port)
})

