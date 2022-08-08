require('dotenv').config();
const fetch = require('node-fetch');

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
const getOAuth = function() {
    return fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: `grant_type=client_credentials&client_id=${process.env.client_auth_id}&client_secret=${process.env.client_auth_secret}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(resp) {
        return resp.json();
    }).then(function(data) {
        console.log(data);
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

getOAuth();


// const fetch = require('node-fetch');

// const url = "https://api.petfinder.com/v2/animals?type=dog";

// const options = {
//   method: 'get',  
//   headers: {
//     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5WWpXNmtDaHdkaTlSRUFtTGtDRUN1ZnRuVW04NjMxZXJMUjNLQWY5NFFYalM4STVpQyIsImp0aSI6ImM3Njk5OWNkODM3MWJkNTNjMDgwMmUzZjhlMTcxY2IyMDc4MTE4ODBhOGE2Y2RjYzQ2ZDZmZTdjNTQyOWNmMGUxMDliOWU1ZTVhZmNhYzA3IiwiaWF0IjoxNjU5OTk1NDk5LCJuYmYiOjE2NTk5OTU0OTksImV4cCI6MTY1OTk5OTA5OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.rfnwg4oEQw8wYskfmkojueLdRGSCUpqVcAhH2ZJz7Xz6xhOBIHAT6pdaS1uZpK38Xrtw_KU1DtUZhiPTk7LlqvCiGHky-TP9FXG31x8Ftgi4lCvOfrNHmGjCc5hSw_9x3BLr3ENfFGa9yJEt95SRe5tH3XIqcWdEnVb3pJ0WI4f6BPPbYmW2FNwEqjRRjd7hKpByNMXg9385oijiC7OY0qV3pGEopOxAwlnfrew7_GHi2bKfUvl9eVLOrLYWab2oVruw49FFRBc1U2FTsOTzK7WYOFsqglF7A_KB607sTAqSXd1DZ8Vf84FQCKaLYfjNjy5jm5vOZQ0iRW0Z6mzYrQ'
//   }
// };

// fetch(url, options)
//   .then( res => res.json() )
//   .then( data => console.log(data) );
