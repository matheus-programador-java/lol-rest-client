const axios = require('axios');

const findSummoner = axios.create({
    
    //PASSAR SUMMONER NAME  P/ GET
    baseURL: 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/',
    params: {
        api_key: "RGAPI-61cf74bd-c2b1-4dd3-aa31-dffcb8bd078d"
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
        api_key: "RGAPI-61cf74bd-c2b1-4dd3-aa31-dffcb8bd078d"
    },

    transformResponse: [function (data) {
       // console.log(data);
    }],
});

module.exports.findSummoner = findSummoner
module.exports.findMatch = findMatch;