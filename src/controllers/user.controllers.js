const {userModel} = require('../models/schemas/user.model');
const {hashPassword,validPassword} = require('../utils/hash')
const {generateToken} = require('../utils/utils')
const {ENV_CONFIG} = require('../config/env.config');




class UserControllers {
    

    static registerRender = async(req,res,next)=>{
    try {
  
    return res.render('register')
    } catch (error) {
    next(error)
    }
    }

    static loginRender = async(req,res,next)=>{
        try {
            
            return res.render('login')
        } catch (error) {
            next(error)
        }
            }

    static registerUser = async(req,res,next)=>{
    const {firts_name, last_name, email, age, password} = req.body
 
    try {
    const user = await userModel.findOne({email:email})

      const newUser = {
        firts_name,
        last_name,
        age,
        email,
        provider: null,
        password:hashPassword(password)
      }
      const response = await userModel.create(newUser)
      const token = generateToken({firts_name,last_name, email, role:'user'});
      res.cookie('User',token,{
        maxAge:60*60
      })
  
      return res.redirect('/login');
     
    


  } catch (error) {
    next(error)
  }
    }

static loginUser = async (req,res,next)=>{
    
    const { email, password} = req.body;
    const adminEmail = ENV_CONFIG.ADMIN_EMAIL;
    const adminPassword = ENV_CONFIG.ADMIN_PASSWORD
    try {
      const user = await userModel.findOne({email:email});

      if(email === adminEmail && password === adminPassword){
        return res.render('admin')
      }
      else if(email === user.email && validPassword(user,password)){
        const access_token = generateToken({email, role:'user'});
        res.cookie('userLogin', access_token, {
            maxAge: 60*60*1000,
            httpOnly:true,
            signed: true
            });
        return res.send({status:'success', message:'ingreso correctamente'});
      }else{
        return res.send({message:'datos incorrectos'})
      }

      
    } catch (error) {
      next(error)
    }
}


}

module.exports = {UserControllers}