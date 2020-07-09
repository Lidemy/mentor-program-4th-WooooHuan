const request = require('request');
const process = require('process');

const input = process.argv.slice(2);
const line = '============\n';
const infoList = [];

function Stream(strID, chID, chName, views) {
  this.strID = strID;
  this.chID = chID;
  this.chName = chName;
  this.views = views;
  this.getPrice = () => sumProperty(this.items, 'price');
  this.getWeight = () => sumProperty(this.items, 'weight');
  this.isWorkable = () => this.getWeight() <= this.limit;
  this.putInItem = x => this.items.push(x);

  const streamID = `Stream ID: ${streamInfo[i]._id}\n`;
  const channelID = `Channel ID: ${streamInfo[i].channel._id}\n`;
  const channelName = `Channel Name: ${streamInfo[i].channel.display_name}`;
  const views = `Views: ${streamInfo[i].channel.views}`;
  const result = 
}

function getStreams(game, limit, offset = 0) {
  request({
    method: 'GET',
    url: `https://api.twitch.tv/kraken/search/streams?query=${game}&limit=100&offset=${offset}`,
    headers: {
      'Client-ID': 'jl04gehwmgpr795vsgeajymfb4bk95',
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  },
  (error, response, body) => {
    if (error) { console.log('Request error!'); return; }
    const streamInfo = JSON.parse(body).streams;
    for (let i = 0; i < streamInfo.length; i += 1) {
      
    }
    console.log(offset + streamInfo.length);
    getStreams(game, limit, offset + streamInfo.length);
  });
}

getStreams('overwatch', 200, 100);




      /*const divider = `(${i + 1 + offset})${line}`;
      const streamID = `Stream ID: ${streamInfo[i]._id}\n`;
      const channelID = `Channel ID: ${streamInfo[i].channel._id}\n`;
      const channelName = `Channel Name: ${streamInfo[i].channel.display_name}`;
      const views = `Views: ${streamInfo[i].channel.views}`;
      const result = 

      infoList.push(divider + streamID + channelID + channelName + views);
      if (infoList.length === limit) {
        infoList.forEach(e => console.log(e));
        return;
      }*/