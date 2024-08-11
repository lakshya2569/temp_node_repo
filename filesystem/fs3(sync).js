const { readFileSync,writeFileSync}=require('fs')
console.log('start')
const first = readFileSync('./modules2/file/first.txt','utf8')
const second = readFileSync('./modules2/file/second.txt','utf8')

writeFileSync('./modules2/file/result-sync.txt',`here is the result:\n${first}\n${second}`,{flag:'a'})
console.log('done with the task we are')
console.log("starting the next one now")