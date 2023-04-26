const jwt = require('jsonwebtoken');
const {ENV_CONFIG} = require('../config/env.config');

const generateToken = (user)=>{
    const token = jwt.sign({...user},ENV_CONFIG.SECRET_KEY,{expiresIn:'24h'})

    return token
};

const authToken = (req,res,next) =>{
    const token = req.cookies['userLogin'];
    if(!cookie){
        return res.status(401).send({error:'Not authenticated'})
    }else{

        jwt.verify(token,ENV_CONFIG.SECRET_KEY,(error,credential)=>{
            if(error){
                return res.status(403).send({error:'Not authorized'})
            }else{
                req.user = credential.user
                next();
            }
        })
    }
}

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['userLogin'];
    }
    return token;
  };
  
  module.exports = {
    generateToken,
    cookieExtractor,
    authToken
  };