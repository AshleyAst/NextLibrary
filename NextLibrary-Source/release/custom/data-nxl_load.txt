const fs = require('fs');

if (fs.existsSync('../../NextLanguage/build/packages/build-id.json')) {
    fs.copyFileSync('./app.js', '../../NextLanguage/app.js');
    fs.writeFileSync('../../../config.nxconfig', 'app.nxl');
    fs.writeFileSync('../../../app.nxl', 'console.log(`Hello World`);');
}