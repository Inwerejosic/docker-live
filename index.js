// create simple express application
const express = require('express')
const app = express()

// create route
app.get('/', (req, res)=>{
    res.send('Kee owu anya?');
});

app.get('/hello/', (req, res)=>{
    res.send('Hello Worlds');
});

// listen for requests
app.listen(3000, ()=>{
    console.log('Server is listening on port 3000!');
});