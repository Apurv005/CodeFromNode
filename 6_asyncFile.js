// ** Async Version **

const {readFile, writeFile} = require("fs");
console.log("start");
readFile(
    "./4_pathFolder/5_fs_first.txt",
    "utf-8",
    (error,result) => {
        if(error){
        return error;
    }
    const readFirst = result;
    writeFile("./4_pathFolder/createdByNode.txt",`From Async: ${readFirst}`,(error,result) =>{
        if(error){
            return error;
        }
        console.log("successfully created.. :)");
    }) ;
});

console.log("Done");