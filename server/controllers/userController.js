const User = require('../models/userModel.js');
const path = require('path');
const userController = {};

userController.createUser = async (req, res, next)=>{
    const { username, password } = req.body;
    console.log('in createUser', req.body);

    if(username && password){
        User.create({username:username, password:password})
            .then(user => {
                console.log(user);
                next() 
            })
            .catch(err=>{console.log(err)})
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