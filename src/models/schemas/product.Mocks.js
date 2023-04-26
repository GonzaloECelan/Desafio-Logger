const mongoose = require('mongoose');


const productCollection = 'productMocks';

const productSchema = new mongoose.Schema({

    
    title:{
        type:String,
    
    },
    description:{
        type:String,
     
    },
    code:{
        type:Number,
        
    },
    price:{
        type:Number,
     
    },
    stock:{
        type:Number,
    
    },
    category:{
        type:String,
       
    },
    image:{
        type:String,
       
    }
})



const productModelMocks = mongoose.model(productCollection,productSchema)
module.exports = {productCollection,productModelMocks};