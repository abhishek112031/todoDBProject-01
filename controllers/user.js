const path = require('path');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const User = require('../models/user');


//verifying inputs:
function isValidInput(input) {
    if (input.length == 0 || input == undefined) {
        return false;
    }
    return true;
}

//create token:
function generateAcessToken(userId,userName){
    return jwt.sign({userId:userId,userName:userName},'secretkey',{expiresIn:'1y'})

}

exports.getSignUpPage = async (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'html', 'signup.html'))
}
exports.getLogInPage = async (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'html', 'login.html'))
}

exports.postSignUp = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
        if (!isValidInput(email) || !isValidInput(name) || !isValidInput(password)) {
            return res.status(400).json({ error: 'input fields can\'t be empty !' })
        }

        const user = await User.findOne({ where: { email: email } });

        if (user) {
            return res.status(400).json({ error: 'User already exist !' })
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword

        });

        res.status(201).json({ message: 'User is created successfully!!!', newUser: newUser });

    }
    catch (error) {
        // console.log('error==>',error);
        return res.status(500).json({ error: 'Oopse! something went wrong!' })


    }



}

exports.postLogIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!isValidInput(email) || !isValidInput(password)) {
            return res.status(400).json({ error: 'input fields can\'t be empty !' })
        }
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(404).json({ error: 'User does not exist !' })
        }
        const value = bcrypt.compareSync(password, user.password);
        if (!value) {
            return res.status(400).json({ error: 'wrong Password !' })
        }
        
        res.cookie('userToken',generateAcessToken(user.id,user.name),{httpOnly:true});
        res.status(200).json({ message: 'logged in successful !' });

    }
    catch (error) {
        // console.log('error==>', error);
        return res.status(500).json({ error: 'Oopse! something went wrong!' });
    }

}
