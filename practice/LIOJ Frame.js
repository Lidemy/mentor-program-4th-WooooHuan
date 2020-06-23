var readline = require('readline');
var rl = readline.createInterface({input:process.stdin});
var lines = [];
rl.on('line', line => lines.push(line));
rl.on('close', () => solve(lines));

function solve(lines) {
    console.log();
}