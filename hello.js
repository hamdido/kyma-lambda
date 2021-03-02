
const fs = require('fs')

function sayHi(){
    let data =  fs.readFileSync('./data/test.json')
    console.log("hello!", JSON.parse(data))
}

module.exports = sayHi