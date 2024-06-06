const fs = require('fs');
const log = require('log');

const { currentLive, currentDate } = require('./app/config/timeModule')
const { initializeMessage, errorMessage } = require('./app/config/logMessages.js');

require("log-node")();
require("./app/app.js");



export function install(options) {
    /**
     * Checks if the options matches one of two set values and copies a file accordingly.
     * 
     * @param {*} options - The options value to be checked.
     * @returns {boolean} - True if the options matches one of the set values, false otherwise.
     */

    if (options === "nxis") {
        
        if (!fs.existsSync('./release/NextLanguage/build/packages/build-id.json')) {
            require('./build/lib/fetchData')
            fs.copyFileSync('./build/packages/build/cmd/install-nxl.bat', './install-nxl.bat');
            console.log('Please run the initization script created.')
        } else {
            require('./release/custom/nextlang/load')
        }
        
    } else if (options === "nxosapp") {
        errorMessage('Nxos App has not been configured for this project yet.');
    }
}

//** DEVELOPMENT CODE **//
//* install('nxosapp')

//** DEVELOPMENT CODE **//

/**
if (!fs.existsSync('./release/NextLanguage/build/packages/build-id.json')) {
    require('./build/lib/fetchData')
    fs.copyFileSync('./build/packages/build/cmd/install-nxl.bat', './install-nxl.bat');
    console.log('Please run the initization script created.')
} else {
    require('./release/custom/nextlang/load')
} 
 */

module.exports = {
    install
}
