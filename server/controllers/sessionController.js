const Session = require('../models/sessionModel');
const User = require('../models/userModel');
const sessionController = {};

sessionController.createSession = async (req, res, next)=>{
  const { username } = req.body;

  try {
    const user = await User.findOne({username:username});
    await Session.create({cookieID: user._id});
    next();

  }
  catch(err){
    next(err);
  }
};

sessionController.verifySession = async (req, res, next)=>{
  const ssid = req.cookies.ssid;
  try{
    const session = Session.findOne({cookieID : ssid});
    if(session === null){
      console.log('not verified');
      next({error: 'no valid session'})
    }else {
      console.log('user verified')
      next();
    }
  }
  catch(err){
    next(err);
  };



};

module.exports = sessionController;