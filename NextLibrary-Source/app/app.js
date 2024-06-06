const fs = require('fs')
const log = require('log');

const { currentLive, currentDate } = require('./config/timeModule')
const { initializeMessage, loadingMessage, infoMessage, errorMessage } = require('./config/logMessages.js');

/**
if (fs.existsSync('/config/idModule.js')) {
    require('./config/idModule');
} else if (!fs.existsSync('./config/idModule.js')) {
    
    console.log("UNKNOWN ERROR: UNIDENIFIED MODULE FOUND AT ./config");
    console.log("UNKNOWN ERROR: FOUND UNIDENIFIED FILE LIST: undefined");
} 
*/

initializeMessage("NextLibrary");

loadingMessage("Build Data");
loadingMessage("Logging Data");
loadingMessage("Modules Data");
loadingMessage("App Browser Data")
loadingMessage("NextLanguage Data");
loadingMessage("App Configuration Data");
loadingMessage("NextLibrary Source Data");
loadingMessage("Libraries Data");
loadingMessage("Node Modules Data");
loadingMessage("Configurations Data");

infoMessage("Initialization of NextLibrary is Complete");
infoMessage("Now Initializing NextLibrary's Log Engine...");

require('./config/loggingSettings')

infoMessage("Initialization of NextLibrary's Logging Engine is Complete");
infoMessage("Now Initializing NextLibrary's Modules...");

loadingMessage("Modules: NextLanguage");
loadingMessage("Modules: NextLibrary Source");
loadingMessage("Modules: Libraries");
loadingMessage("Modules: Node Modules");
loadingMessage("Modules: Configurations");
loadingMessage("Modules: App Configuration");
loadingMessage("Modules: App Browser");
loadingMessage("Modules: Builder");
loadingMessage("Modules: Sources");

infoMessage("Initialization of NextLibrary's Modules is Complete");
infoMessage("Now Initializing NextLibrary's Build Engine...");

errorMessage("NextLibrary's Build Engine has not been configured for this project yet.");
errorMessage("Failed to initialize NextLibrary's Build Engine.");
errorMessage("NextLibrary's Build Engine has not been initialized.");

errorMessage("Initialization of NextLibrary's Build Engine has failed. Please initialize it manually.");

