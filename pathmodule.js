const path = require('path');


console.log(path.sep)

const  filepath = path.join('/file','test.txt')
console.log(filepath)//gave the result :\file\test.txt

const base = path.basename(filepath)
console.log(base) 

const absolute = path.resolve(__dirname,'file','text.txt')
console.log(absolute)