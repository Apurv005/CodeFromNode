// (2): Path Module: 
const path = require("path");
// console.log(path);

const filePath = path.join("/4_pathFolder","SubFolder","text.txt");
// console.log(filePath);

// Gives the file name
const base = path.basename(filePath);
// console.log(base);

// Absolute path
const absolute = path.resolve('content','subfolder');
console.log(absolute);

