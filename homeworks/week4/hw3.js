/* eslint-disable no-unused-vars */
const request = require('request');
const process = require('process');

const baseUrl = 'https://restcountries.eu/rest/v2/name/';
const line = '============\n';
const reqErr = 'Request error!';
const input = process.argv.slice(2);

function exportInfo(info) {
  const name = `國家：${info.name}\n`;
  const capital = `首都：${info.capital}\n`;
  const currencyCode = `貨幣：${info.currencies[0].code}\n`;
  const callingCode = `國碼：${info.callingCodes[0]}`;
  console.log(line + name + capital + currencyCode + callingCode);
}

function getCountryInfo() {
  if (!/^[A-Za-z]*$/.test(input[0])) { console.log('Unacceptable input.'); return; }

  request(`${baseUrl}${input[0]}`, (error, response, body) => {
    const info = JSON.parse(body)[0];
    if (error) { console.log(reqErr); return; }
    if (info === undefined) { console.log('找不到國家資訊'); return; }
    exportInfo(info);
  });
}

getCountryInfo();
