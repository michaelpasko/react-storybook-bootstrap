import fetch from 'node-fetch';

import log from './logger';

const get = async (url) => {
    try {
        log.debug(`Calling ${url}`);
        const response = await fetch(url);
        const data = await response.json();
        log.debug(`HTTP Code: ${response.status} from ${url}`);
        return data;
    } catch (e) {
        log.error(e);
        throw e;
    }
};

const post = async (url, body) => {
    try {
        const response = await fetch(url, {method: 'POST', body});
        const data = await response.json();
        log.debug(`HTTP Code: ${response.status} from ${url}`);
        return data;
    } catch (e) {
        log.error(e);
        throw e;
    }
};

const put = async (url, body) => {
    try {
        const response = await fetch(url, {method: 'PUT', body});
        const data = await response.json();
        log.debug(`HTTP Code: ${response.status} from ${url}`);
        return data;

    } catch (e) {
        log.error(e);
        throw e;
    }
};

const httpDelete = async (url, body) => {
    try {
        const response = await fetch(url, {method: 'DELETE', body});
        const data = await response.json();
        log.debug(`HTTP Code: ${response.status} from ${url}`);
        return data;
    } catch (e) {
        log.error(e);
        throw e;
    }
};


export default {
    get,
    put,
    post,
    httpDelete
}