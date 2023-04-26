const {Router} = require('express');
const {UserControllers} = require('../../controllers/user.controllers')

const router = Router();

router.get('/login',UserControllers.loginRender)
router.get('/register',UserControllers.registerRender)
router.post('/login',UserControllers.loginUser)
router.post('/register',UserControllers.registerUser)

module.exports = router