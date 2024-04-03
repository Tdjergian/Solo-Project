const Session = require('../models/sessionModel');
const User = require('../models/userModel');
const sessionController = {};

sessionController.createSession = async (req, res, next)=>{
  const { username } = req.body;
  console.log('in createSession');

  try {
    const user = await User.findOne({username:username});
    const session = await Session.create({cookieID: user._id});
    next();

  }
  catch(err){
    next(err);
  }
};

sessionController.verifySession = async (req, res, next)=>{
  const ssid = req.cookies.ssid;
  try{
    const session = await Session.findOne({cookieID : ssid}).exec();
    // console.log(session)
    if(session === null){
      console.log('not verified');
      next({errorMessage: 'no valid session'})
    }else {
      // console.log('session verified')
      next();
    }
  }
  catch(err){
    next(err);
  };



};

module.exports = sessionController;