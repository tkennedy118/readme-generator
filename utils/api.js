const axios = require("axios");

const api =  {

    // PROMISE: return user data from GitHub api or returns error
    getUser: username => {

        return new Promise((resolve, reject) => {

            axios.get(`https://api.github.com/users/${username}`)
                .then( response => {
                    return resolve(response);
                })
                .catch(error => {
                    return reject(error);
                });
        });
    }
}

module.exports = api;