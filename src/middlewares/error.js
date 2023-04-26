const {EErros} = require('../services/enumError.js')

const error = (error,req,res,next)=>{
    console.log(error.cause)
    switch(error.code){
        case EErros.INVALIDAD_TYPE_ERROR:
            res.send({status:'error',error:error.name})
            break

        default:
            res.send({status:'error',error:'Unhandled error'})
    }
  
}

module.exports = {error}