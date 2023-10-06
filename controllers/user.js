const path=require('path');
const dotenv=require('dotenv');

exports.getSignUpPage=async (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'..','public','html','signup.html'))
}