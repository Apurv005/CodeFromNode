// (3) Fs module:

// ** Synchronous version **

// 2 Different ways are there : 
const {readFileSync,writeFileSync} = require("fs");
//          OR
// const fs = require("fs");
// fs.readFileSync

const first = readFileSync('./4_pathFolder/5_fs_first.txt','utf-8');

console.log(first);

// Creates new file if not present and overwrite it. 
// writeFileSync("./4_pathFolder/createdByNode.txt",`Hello ${first}`);

// IF we want to append it then, 
// writeFileSync("./4_pathFolder/createdByNode.txt",`Hello ${first}`,{flag: 'a'});
