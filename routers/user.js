const express=require('express');

//controller:
const userController=require('../controllers/user')
const router=express.Router();

router.get('/sign-up',userController.getSignUpPage);
router.post('/sign-up',userController.postSignUp);

router.get('/login',userController.getLogInPage);
router.post('/login',userController.postLogIn);


module.exports=router;