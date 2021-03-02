const hello = require('./hello')
module.exports = {
    main: function (event) {
        hello()
    }
}