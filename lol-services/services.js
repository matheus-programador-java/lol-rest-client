const axios = require('axios');

const findSummoner = axios.create({
    //PASSAR SUMMONER NAME  P/ GET
    baseURL: 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/',
    params: {
        api_key: "RGAPI-72bacf56-6829-4ccb-874a-0c3814fd38f1"
    },

    transformResponse: [function (data) {
        //console.log(data);
    }],

    //responseType:'text'
});

const findMatch = axios.create({
    //PASSAR SUMMONER ID  P/ GET
    baseURL: 'https://br1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/',
    params: {
        api_key: "RGAPI-72bacf56-6829-4ccb-874a-0c3814fd38f1"
    },

    transformResponse: [function (data) {
        console.log(data);
    }],
});

module.exports.findSummoner = findSummoner
module.exports.findMatch = findMatch;