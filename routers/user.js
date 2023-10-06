const express=require('express');

//controller:
const userController=require('../controllers/user')
const router=express.Router();

router.get('/sign-up',userController.getSignUpPage)

module.exports=router;