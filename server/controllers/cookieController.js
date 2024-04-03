const cookieController = {};
const User = require('../models/userModel')

cookieController.setSSID = (req, res, next)=>{
    const { username } = req.body;
    console.log('in setSSID')
    User.findOne({username:username})
        .then(user => {
            res.cookie('ssid', user._id, {httpOnly: true});
            next();
        })
        .catch(err => next(err))
    
}

module.exports = cookieController;