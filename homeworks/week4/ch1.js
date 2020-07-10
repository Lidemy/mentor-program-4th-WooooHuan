/* eslint-disable no-underscore-dangle */
const request = require('request');

const game = process.argv[2];
const maxCount = 200;
let count = 1;

function getStreams(limit = 100, offset = 0) {
  request({
    url: `https://api.twitch.tv/kraken/streams?game=${game}&limit=${limit}&offset=${offset}`,
    headers: {
      'Client-ID': 'jl04gehwmgpr795vsgeajymfb4bk95',
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  },
  (error, response, body) => {
    if (error || response.statusCode >= 400) { console.log('Request error!'); return; }
    const { streams } = JSON.parse(body);
    if (!streams.length) { console.log('===== No more stream ====='); return; }
    streams.forEach((e) => {
      console.log(`${count}:\n${e.channel.display_name}\nID: ${e._id}\nViewers: ${e.viewers}\n`);
      count += 1;
    });
    if (count < maxCount) getStreams(maxCount - (count - 1), count - 1);
  });
}

getStreams();
