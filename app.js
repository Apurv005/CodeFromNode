// ** npm **

// 2 dependencies are there. 

// 1 : Local dependency: used in perticular project
// npm -i <packagename>
// 2 : Global dependency: used in any project 
// npm install -g <packagename>

// package.json : The manifest file that stores important info about project/package.
// 3 ways to create it, 
// 1 : manual approach (create package.json in root, create properties etc)
// 2 : npm init (step by step, press enter to skip)
// 3 : npm init -y (everything default)


const  _ = require("lodash");
const arrayItems = [1,[2,[3,[4]]]];

const newArrayItems = _.flattenDeep(arrayItems);
console.log(newArrayItems);


