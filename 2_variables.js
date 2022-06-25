// Global Variable: 
const apurv = "Apurv";
const rohit = "Rohit";

// Private Variable:
const secretNamr = "**";

// First way: 
module.exports = {apurv,rohit};

// Second way:
module.exports.items = ["Appu", "Viru"];

// Third way:
const myObj1 = {
    name : "Keva"
}
module.exports.firstName = myObj1;