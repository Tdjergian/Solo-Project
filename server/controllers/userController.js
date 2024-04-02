const User = require('../models/userModel.js');
const path = require('path');
const userController = {};

userController.createUser = async (req, res, next)=>{
    const { username, password } = req.body;

    if(username && password){
        User.create({username:username, password:password})
          .then(user => next() )
    }else(next({errorMessage:'invalid newUser format'}))
   
};

userController.verifyUser = async (req, res, next)=> {
    const { username, password } = req.body;
    try{
        const user = User.findOne({username:username, password:password})
        if(user !== null){
            next()
        }else { next({error:'no user'})}
    }
    catch{

    }
}

module.exports = userController;