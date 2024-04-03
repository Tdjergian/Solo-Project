require('dotenv').config();
const mongoose = require('mongoose');
const { mode } = require('../../webpack.config');
const bcrypt = require('bcryptjs');

const SALT_FACTOR = 10;

console.log(
  'connecting to database'
)

mongoose.connect(process.env.MONGO_URI, {
  useNewURLParser: true, 
  useUnifiedTopology: true,
  dbName: 'SoloProject'
})
  .then(()=> console.log('Connected to Mongo DB.'))
  .catch(err => console.log('error'));


const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String, 
  tickets: [{type: Schema.Types.ObjectID, ref: 'Ticket'}],

});

userSchema.pre('save', async function(next) {
  const user = this;
  console.log('in the pre save middleware')
  
 try{
     const hash = await bcrypt.hash(user.password, SALT_FACTOR);
     user.password = hash;
     next();
    }
  catch(err){

  }
  
});


const User = mongoose.model('user', userSchema);
module.exports = User;
