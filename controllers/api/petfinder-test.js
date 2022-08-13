const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();

// Make call if token expired
const makeCall = () => {
    // If current token is invalid, get a new one
    if (!expires || expires - new Date().getTime() < 1) {
        getOAuth().then(function() {
            // use access token
        });
    }
};

// let token = getToken();

router.post('/', async (req, res) => {
    try {
        const animalType = req.body;
        const getToken = () => {
            return fetch('https://api.petfinder.com/v2/oauth2/token', {
                method: 'POST',
                body: `grant_type=client_credentials&client_id=${process.env.client_auth_id}&client_secret=${process.env.client_auth_secret}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((resp) => {
                return resp.json();
            }).then((data) => {
                console.log(data);
                return data.access_token;
                // Store token data
                token = data.access_token;
                tokenType = data.token_type;
                expires = new Date().getTime() + (data.expires_in * 1000);
            });
        };
        const getPetfinder = () => {
            const url = `https://api.petfinder.com/v2/animals?${Object.keys(animalType)[0]}=${Object.values(animalType)[0]}&limit=5`;
            console.log(url);
            const options = {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            return fetch(url, options)
            .then((res) => {
                return res.json()
            })
            .then((searchResults) => {
                // console.log(searchResults);
                return searchResults;
                // res.render('searchResults', {searchResults});
            });
        };

        console.log(animalType);
        let token = await getToken();
        let searchResults = await getPetfinder();
        console.log(searchResults);
        res.status(200).json(searchResults);
        // let searchResults = getPetfinder();
        // console.log(searchResults);
        // return searchResults;
    } catch (err) {
      return res.status(500).json(err);
    
    }
});

module.exports = router;