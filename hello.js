
const fs = require('fs')
const path = require('path')

function sayHi(){
    console.log(path.resolve('.'))
    fs.readdirSync('.').forEach(file => {
        console.log(file);
      });
    // console.log(path.resolve('./test.js'))
    // let data =  fs.readFileSync('./test.js')
    // console.log("hello!", JSON.parse(data))
}

module.exports = sayHi