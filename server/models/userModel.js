const MONGO_URI = 'mongodb+srv://djergian:codesmith@soloproject.t0dy0fn.mongodb.net/?retryWrites=true&w=majority&appName=SoloProject';
const doINeedThis = 'mongodb+srv://djergian:<password>@soloproject.t0dy0fn.mongodb.net/';
const mongoose = require('mongoose');
const { mode } = require('../../webpack.config');

console.log(
  'connecting to database'
)

mongoose.connect(MONGO_URI, {
  useNewURLParser: true, 
  useUnifiedTopology: true,
  dbName: 'Solo Project'
})
  .then(()=> console.log('Connected to Mongo DB.'))
  .catch(err => console.log('error'));


const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String, 


});

const User = mongoose.model('user', userSchema);
module.exports = User;