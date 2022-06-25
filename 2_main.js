// (`3`) Modules : 
// Node uses the CommonJS.. so every file in node is module.. by default..
// Module:  Encapsulated code

// Here we have 3 modules : 
// 1. variables
// 2. functions
// 3. function call(this file)

const name = require("./2_variables");
const sayHi = require("./2_function");
sayHi(name.apurv);
sayHi(name.rohit);

console.log(name.firstName);