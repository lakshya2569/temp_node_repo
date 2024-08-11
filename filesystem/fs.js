const { readFileSync , writeFileSync } = require('fs')

const first = readFileSync('./modules2/file/first.txt','utf8');

const second = readFileSync('./modules2/file/second.txt','utf8');

console.log(`${first}\n${second}`);
writeFileSync('./modules2/file/result.txt',`here is the result:\n ${first}\n${second}`)
