const express = require('express');
const app = express();
const path = require('path');
// const { User } = require('./models/userModel.js');
const { createUser, verifyUser } = require('./controllers/userController.js');
const { setSSID } = require('./controllers/cookieController.js');
const { createSession, verifySession } = require('./controllers/sessionController.js');


app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res)=>{
    return res.status(200).sendFile(path.join(__dirname, '../build/dev.html'));
});

app.post('/login', verifyUser, setSSID, createSession, (req, res)=>{
    res.status(200).json('user requested login')
});

app.post('/newUser', createUser, setSSID, createSession, (req, res)=>{
    res.status(200).send();
});

app.get('/home/:username', verifySession, queryData, (req, res)=>{
    res.status(200).send();
}

app.get('/home', (req, res)=>{
    res.status(200).json('verified')
})

app.get('/api', (req, res)=>{
    // console.log('sent json')
    res.status(262).json('hi tom its nick')
    
});



app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
  });

app.listen(4000);
