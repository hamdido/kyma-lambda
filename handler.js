const hello = require('./hello')
module.exports = {
    main: async function (event) {
        hello()
    }
}