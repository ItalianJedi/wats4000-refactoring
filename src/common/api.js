//base configuration API

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
})

API.interceptors.request.use(function (config) {
    //Set common parameters for each request to the API
    config.params.APPID = '31eb2d829b00f08d317a969d4fe70d42';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});