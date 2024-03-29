const express = require('express');
const app = express();
const path = require('path');
const { User } = require('./models/models.js');



app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res)=>{
    return res.status(200).sendFile(path.join(__dirname, '../build/dev.html'));
});

app.get('/api', (req, res)=>{
    console.log('sent json')
    res.status(262).json('data')
    
})

app.listen(3000);