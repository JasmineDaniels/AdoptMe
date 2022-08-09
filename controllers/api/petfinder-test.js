const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();

// // const url = "https://api.petfinder.com/v2/oauth2/token";

// // const options = {
// //   method: 'post',  
// //   body: "grant_type=client_credentials&client_id=yYjW6kChwdi9REAmLkCECuftnUm8631erLR3KAf94QXjS8I5iC&client_secret=BWJUmVP98F4wCsXlJikYXC0RwuPnoSFS2ARlWeCm"
// // };

// // fetch(url, options)
// //   .then( res => res.json() )
// //   .then( data => console.log(data) );


// let url = "https://login.mypurecloud.com/oauth/token"
  
// fetch(url, {
//     method: 'POST',
//     body: 'grant_type=client_credentials&client_id=' + process.env.client_auth_id + '&client_secret=' + process.env.client_auth_secret,
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// })
// .then(res => res.json())
// .then( data => console.log(data));


// Get OAuth token
const getToken = async () => {
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

// Make call if token expired
const makeCall = () => {
    // If current token is invalid, get a new one
    if (!expires || expires - new Date().getTime() < 1) {
        getOAuth().then(function() {
            // use access token
        });
    }
};

let token = getToken();








const getPetfinder = () => {
    const url = "https://api.petfinder.com/v2/animals?type=dog";
    const options = {
        method: 'get',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5WWpXNmtDaHdkaTlSRUFtTGtDRUN1ZnRuVW04NjMxZXJMUjNLQWY5NFFYalM4STVpQyIsImp0aSI6ImQ4ZWZlM2Q4MGY2YTc1YTgyMWJiNTVhMjgwMzAzODIxZGRhZTM4ZTkwODExNjMyZTMwODQ3OTg5ZTA2YjIwZDQ0YWY3YjBjYjQ3YTUxNDU4IiwiaWF0IjoxNjYwMDAyOTIwLCJuYmYiOjE2NjAwMDI5MjAsImV4cCI6MTY2MDAwNjUyMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.j7G_vKM3WpqIIWVDoCj5HoB6FSGFpyJ2H3pIh1AQXvWgtEQAtgz9Hm2DgZEQrsRgqscIJIQWtEsTYjVajkgqTJ1iQPvUPgdTYwQW5rB70AEYvsN5BGSfvT0nPVW3-201miSZ5wyx13J_YpfLeV3bN0dLbXFNjt5sJF9tF2XPpqF0dz-tXi0UQ94AnA57tXMh3p5Ikic4RagLGQ7eIRQgeYmL5EdrIR_8sQmDYL-JTae_bXxkOu0eCc34ZpvfJ1JgJLzpqRJ4QpIER4Mb0nSfoQl7ckhkr1WX-EVKX0TcP4GkFmrkA21aZwkBil0oGzYmZPjbiOvuA_SX0ve5MemlsA'
        }
    };
    fetch(url, options)
    .then( res => res.json())
    .then( data => console.log(data));
};

router.get('/', async (req, res) => {
    try {
        let data = await getPetfinder();
        res.status(200).json(data);
        res.json(data);
        data = JSON.stringify(data)
        res.render('petfinder');
    } catch (err) {
      return res.status(500).json(err);
    }
});

module.exports = router;