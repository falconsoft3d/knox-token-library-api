const express = require('express');
const app = express();
const knoxTokenLibraryJs = require('knox-token-library-js');

app.get('/api/getsignedclientid', (req, res)=>{
    res.send('Hello World')
});

app.listen(3000, ()=>{
    console.log('Server on port 3000')
})