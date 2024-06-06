const log = require("log");

const { currentLive, currentDate } = require('./timeModule')

function initializeMessage(message) {
    log.notice("[ INFO | TIME: " + currentLive + " ] Initializing " + message + "...")
}

function loadingMessage(message) {
    log.notice("[ INFO | TIME: " + currentLive + " ] Loading " + message + "...")
}

function addFileMessage(message) {
    log.notice("[ INFO | TIME: " + currentLive + " ] Adding File:  " + message)
}

function errorMessage(message) {
    log.error("[ ERROR | TIME: " + currentLive + " ] " + message)
}

function infoMessage(message) {
    log.notice("[ INFO | TIME: " + currentLive + " ] " + message)
}

module.exports = {
    initializeMessage,
    loadingMessage,
    addFileMessage,
    errorMessage,
    infoMessage
}