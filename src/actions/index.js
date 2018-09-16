import axios from 'axios';
const API_KEY = '655128b5b134f28ed752bcf02d430d30';
export const FETCH_WEATHER = 'FETCH_WEATHER';

// http://api.openweathermap.org/data/2.5/forecast?appid=655128b5b134f28ed752bcf02d430d30
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
