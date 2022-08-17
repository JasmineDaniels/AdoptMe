const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();
const { Pet } = require('../../models');
const sequelize = require('../../config/connection.js');


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

router.post('/', async (req, res) => {
    try {
        const searchData = req.body;
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
        const getPetfinder = () => {
            let url = 'https://api.petfinder.com/v2/animals?limit=10';
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

        let token = await getToken();
        let searchResults = await getPetfinder();
        searchResults = searchResults.animals;
        console.log(searchResults);
        console.log(searchResults.length);
        const filteredSearchResults = searchResults.filter((term) => {
            return searchResults.includes(term.primary_photo_cropped.small);  
        });
        console.log(filteredSearchResults);
        console.log(filteredSearchResults.length);

        searchResults.forEach(async (result) => {
        //     //check if photo exists if not add placeholder
        //     if (searchResults.animals.photos == null){
        //         searchResults.animals.photos == `https://via.placeholder.com/200`
        //     }
        //     let petPhoto = "";
        //     if (result.primary_photo_cropped === null) {
        //         petPhoto = 
        //     }
            await Pet.create({
                Pet_name: result.name,
                Age: result.age,
                breeds: result.breeds.primary,
                description: result.description,
                petfinder_id: result.id,
                type: result.type,
                // photos: result.primary_photo_cropped.small,
                // type_id: result.type
            }); 
        });
        res.status(200).json(searchResults);
        // let searchResults = getPetfinder();
        // console.log(searchResults);
        // return searchResults;
    } catch (err) {
      return res.status(500).json(err);
    
    }
});

module.exports = router;