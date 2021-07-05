// Bind console so we get Class / line numbers when abstract logging
const debug = console.log.bind(console);
const info = console.info.bind(console);
const error = console.error.bind(console);

export default {
    debug,
    info,
    error
}