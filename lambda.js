const sayHi = require('./hello')
module.exports = {
    main: async function (event) {
        sayHi()
    }
}