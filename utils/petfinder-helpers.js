const fetch = require('node-fetch');
require('dotenv').config();

// Get Petfinder token
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
        // token = data.access_token;
        // tokenType = data.token_type;
        // expires = new Date().getTime() + (data.expires_in * 1000);
    });
};

// Make Petfinder API call
const getPetfinder = (token, searchData) => {
    let url = 'https://api.petfinder.com/v2/animals?limit=100';
    searchData.forEach((term) => {
        url = `${url}&${Object.keys(term)}=${Object.values(term)}`;
    });
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
        return searchResults;
    });
};

// Make call if token expired
// const makeCall = () => {
//     // If current token is invalid, get a new one
//     if (!expires || expires - new Date().getTime() < 1) {
//         getOAuth().then(function() {
//             // use access token
//         });
//     }
// };

// let token = getToken();

module.exports = {
    getToken,
    getPetfinder
}