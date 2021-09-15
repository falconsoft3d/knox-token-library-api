const express = require('express');
const app = express();
const knoxTokenLibraryJs = require('knox-token-library-js');
const URL_FILE = "keys/keys.json"
var Constants = require('../keys/hash');

// Step 5
// http://localhost:3000/api/getsignedclientid/demo/your-demo-hash
app.get('/api/getsignedclientid/:clientId/:codehash', (req, res)=>{
    if (req.params.codehash !== Constants.CODE_HASH) {
        res.status(400).json({
            msg: "Your Codehash is not valid"
        });
    } else {
        try {
            const clientId = req.params.clientId;
            const signedClientId = knoxTokenLibraryJs.generateSignedClientIdentifierJWT(URL_FILE, clientId );
            res.status(200).json({
                signedClientId
            });
        } catch (error) {
            es.status(400).json({
                msg: 'error', error
            });
        }
    }
    
    
});

// Step 7
// http://localhost:3000/api/signedaccesstoken/demo/your-demo-hash
app.get('/api/signedaccesstoken/:apitoken/:codehash', (req, res)=>{
    if (req.params.codehash !== Constants.CODE_HASH) {
        res.status(400).json({
            msg: "Your Codehash is not valid"
        });
    } 
    else {
        try {
            const apitoken = req.params.apitoken;
            const signedToken = knoxTokenLibraryJs.generateSignedAccessTokenJWT(URL_FILE, apitoken );
            res.status(200).json({
                signedToken
            });
        } catch (error) {
            es.status(400).json({
                msg: 'error', 
                error
            })
    }
    }
});

app.get('*', (req, res)=>{
    res.status(200).json({
        msg: "This Route is not Valid"
    });
});

app.listen(3000, ()=>{
    console.log('Server on port 3000')
})