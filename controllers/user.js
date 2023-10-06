const path=require('path');
const dotenv=require('dotenv');

exports.getSignUpPage=async (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'..','public','html','signup.html'))
}
exports.getLogInPage=async (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'..','public','html','signup.html'))
}

exports.postSignUp=(req,res,next)=>{
    const {name,email,password}=req.body;

    
}
