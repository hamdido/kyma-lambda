
const fs = require('fs')
const path = require('path')

function sayHi(){
    console.log(path.resolve('.'))
    console.log(path.resolve('./test.json'))
    let data =  fs.readFileSync('./test.json')
    console.log("hello!", JSON.parse(data))
}

module.exports = sayHi