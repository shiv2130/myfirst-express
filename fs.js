const fs = require('fs');
// fs.readFile('file.txt', 'utf8', (err,data)=>{
//     console.log(err, data)
// })
const a = fs.readFileSync('file.txt')
console.log(a.toString())
fs.writeFile('flie2.txt', "This is a data", ()=>{
    console.log("written to the file");
})//this function is a non blocking function
//console.log(a.toString())//this function block intentionally 
console.log("Namaste wORLD");//the function here work as none blockin I/O