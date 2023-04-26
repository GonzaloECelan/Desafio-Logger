const generateErrorUserInfo = (product)=>{
return `One or more propeties were incomplete or not valid.
List of requeried propeties:
*title: needs to be a string, received ${product.title}
*price: needs to be a string, received ${product.price}`
}


module.exports = { generateErrorUserInfo}