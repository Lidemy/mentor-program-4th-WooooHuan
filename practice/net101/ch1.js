const request = require('request');


/*
function main() {
  request({
    method: 'GET',
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
      'Client-ID': 'jl04gehwmgpr795vsgeajymfb4bk95',
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  },
  (error, response, body) => {
    if (error) { console.log('Request error!'); return; }
    const infoList = JSON.parse(body).top;
    infoList.forEach(e => console.log(`${e.viewers} ${e.game.name}`));
  });
}*/

function getGame() {
  request({
    method: 'GET',
    url: 'https://api.twitch.tv/kraken/search/games?query=overwatch',
    headers: {
      'Client-ID': 'jl04gehwmgpr795vsgeajymfb4bk95',
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  },
  (error, response, body) => {
    if (error) { console.log('Request error!'); return; }
    const info = JSON.parse(body);
    console.log(JSON.parse(body));
  });
}

//getGame();

function getStreams() {
  request({
    method: 'GET',
    url: ' https://api.twitch.tv/kraken/search/streams?query=overwatch',
    headers: {
      'Client-ID': 'jl04gehwmgpr795vsgeajymfb4bk95',
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  },
  (error, response, body) => {
    if (error) { console.log('Request error!'); return; }
    const info = JSON.parse(body);
    console.log(JSON.parse(body));
  });
}

getStreams();

//main();
