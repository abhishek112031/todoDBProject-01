const express=require('express');

//controller:
const userController=require('../controllers/user')
const router=express.Router();

router.get('/sign-up',userController.getSignUpPage);
router.get('/login',userController.getLogInPage);
router.post('/sign-up',userController.postSignUp);


module.exports=router;