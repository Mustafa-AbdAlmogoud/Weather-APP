
export const REQUEST_WEATHER = "REQUEST_WEATHER"; 
export const RECEIVE_WEATHER = "RECEIVE_WEATHER";
export const CHANGE_COUNTRY = "CHANGE_COUNTRY";

export function requestWeather(country) {
    return {
        type: REQUEST_WEATHER,
        country
    }
}

export function receiveWeather(country, json) {
    return {
        type: RECEIVE_WEATHER,
        country,
        data: json,
        receivedAt: Date.now()
    }
}

export function fetchWeather(country) {
    return dispatch => {
        dispatch(requestWeather(country))
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=3d8b309701a13f65b660fa2c64cdc517`)
            .then(response => response.json())
            .then(json => dispatch(receiveWeather(country, json)))
    }
}

export function changeCountry(country) {
    return {
        type: CHANGE_COUNTRY,
        country
    }
}