const User = require('../models/userModel.js');
// const path = require('path');
const userController = {};
const bcrypt = require('bcryptjs');

userController.createUser = async (req, res, next)=>{
    const { username, password } = req.body;
    console.log('in createUser', req.body);
    try{
    if(username && password){
        await User.create({username:username, password:password})
        next()
    }else(next({errorMessage:'invalid newUser format'}))
    }
    catch(err){

    }
   
};

userController.verifyUser = async (req, res, next)=> {
    const { username, password } = req.body;
    try{
        const user = await User.findOne({username:username});
        if(user === null){
            next({error:'no user'})
        }
        const match = await bcrypt.compare(password, user.password);
        if(match){
            next()
        }
    }
    catch{

    }
}

module.exports = userController;