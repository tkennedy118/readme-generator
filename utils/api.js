const axios = require("axios");

const api = {

    getUser: username => {

        axios
            .get(`https://api.github.com/users/${username}`)
            .then( ({ data }) => {
                console.log(data);
        });
    }
}

module.exports = api;