const {productModel} = require('../../../models/schemas/product.model')

class ProductMongoDao {
    constructor(){

    }

    getAll = async()=>{
       
            const products = await productModel.find().lean()
            return products
        

    }

    getById = async (id)=>{
       
            const productId = await productModel.findById({_id:id}).lean()
            return productId
       
    }

    create = async (product)=>{

            const createProduct = await productModel.create(product);
            return createProduct
            
       

    }

    update = async (id, product)=>{

    const updateProduct = await productModel.findByIdAndUpdate(id,product,{new:true})
    return updateProduct

    }

    delete = async (id)=>{

        const deleteProduct = await productModel.findByIdAndDelete()
        return deleteProduct
    
        }

    }

    



module.exports = {
    ProductMongoDao
}