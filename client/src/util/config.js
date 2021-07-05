import http from './http';
import log from './logger';

const host = window.location.origin;
const configPath = '/api/v1/config';

const getConfig = async () => {
    try {
        const configUrl = host+configPath;
        log.debug(`======Retrieving config: ${configUrl} ======`);
        const config = await http.get(configUrl);
        return config;
    } catch (e) {
        log.error(e)
    }
    return {};
}

// Set Default values here
const config = {};
export default config;

export { getConfig }