//npm is a global command that comes with node
// npm --version
//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.jsdon - manifest file (stores imporant info avout priject/package)
//manual approach - create package.json in root,create properties,etc
//npm init (step by step,press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);


