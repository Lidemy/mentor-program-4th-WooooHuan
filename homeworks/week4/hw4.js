const request = require('request');

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
    if (error || response.statusCode >= 400) { console.log('Request error!'); return; }
    const infoList = JSON.parse(body).top;
    infoList.forEach(e => console.log(`${e.viewers} ${e.game.name}`));
  });
}

main();
