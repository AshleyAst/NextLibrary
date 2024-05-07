const fs = require('fs');

function install(options) {
    /**
     * Checks if the options matches one of two set values and copies a file accordingly.
     * 
     * @param {*} options - The options value to be checked.
     * @returns {boolean} - True if the options matches one of the set values, false otherwise.
     */
    const set1 = 'nxis';
    const set2 = 'nxosapp';

    if (options === nxis) {
        
        if (!fs.existsSync('./release/NextLanguage/build/packages/build-id.json')) {
            require('./build/lib/fetchData')
            fs.copyFileSync('./build/packages/build/cmd/install-nxl.bat - Shortcut.lnk', './install-nxl.bat - Shortcut.lnk');
            console.log('Please run the initization script created.')
        } else {
            require('./release/custom/nextlang/load')
        }
        
        
        return true;
    } else if (options === nxosapp) {
        console.log('Nxos App has not been configured for this project yet.')
        return true;
    } else {
        return false;
    }
}

// install('nxosapp')


if (!fs.existsSync('./release/NextLanguage/build/packages/build-id.json')) {
    require('./build/lib/fetchData')
    fs.copyFileSync('./build/packages/build/cmd/install-nxl.bat - Shortcut.lnk', './install-nxl.bat - Shortcut.lnk');
    console.log('Please run the initization script created.')
} else {
    require('./release/custom/nextlang/load')
}