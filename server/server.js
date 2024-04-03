//Test

const express = require('express');
const app = express();
const path = require('path');
// const { User } = require('./models/userModel.js');
const { createUser, verifyUser } = require('./controllers/userController.js');
const { setSSID } = require('./controllers/cookieController.js');
const { createSession, verifySession } = require('./controllers/sessionController.js');
const { addTicket, getTickets } = require('./controllers/ticketController.js');
const cookieParser = require('cookie-parser');
console.log(typeof addTicket)


app.use(express.json());
app.use(cookieParser());

app.use('/build', express.static(path.join(__dirname, '../build')));

// app.get('/', (req, res)=>{
//     return res.status(200).sendFile(path.join(__dirname, '../build/dev.html'));
// });

app.post('/login', verifyUser, setSSID,  createSession, (req, res)=>{
    res.status(200).json('user requested login')
});

app.post('/newuser', createUser, setSSID, createSession, (req, res)=>{
    console.log('sending response')
    res.status(200).send();
});

app.get('/verify', verifySession, (req, res)=>{
    // console.log('session was verified')
    res.status(200).json('true');
})

// app.get('/home', (req, res)=>{
//     res.status(200).json('verified')
// })

app.get('/api', (req, res)=>{
    // console.log('sent json')
    res.status(262).json('hi tom its nick')
    
});

app.post('/ticket', addTicket, (req, res)=>{
    res.status(200).send();
});

app.get('/ticket', getTickets, (req, res)={
    res.status(200).json(res.locals.tickets);
}

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err.errorMessage);
  });

app.listen(3000);
