const cookieController = {};
const User = require('../models/userModel')

cookieController.setSSID = (req, res, next)=>{
    const { username } = req.body;

    User.findOne({username:username})
        .then(user => {
            res.cookie('ssid', user._id);
            next();
        })
        .catch(err => next(err))
    
}

module.exports = cookieController;