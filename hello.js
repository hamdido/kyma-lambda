
const fs = require('fs')
const path = require('path')

function sayHi(){
    const pwd = process.env['PWD'] || '.'
    console.log("PWD ", pwd)
    // console.log(path.resolve('.'))
    // fs.readdirSync('.').forEach(file => {
    //     console.log(file);
    // });
    // console.log(path.resolve('./test.js'))
    // let data =  fs.readFileSync(`${pwd}/data/test.json`)
    // let result = JSON.parse(data)
    // console.log("hello!", result)
    // return result
}

module.exports = sayHi