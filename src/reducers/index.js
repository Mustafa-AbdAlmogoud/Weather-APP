//import { combineReducers } from 'redux';
import {
    REQUEST_WEATHER,
    RECEIVE_WEATHER,
    CHANGE_COUNTRY
} from '../actions'


const weatherReducers = function(state =[], action){
    switch(action.type){
        case REQUEST_WEATHER:
            console.log("in request weather reducers");
            return state;
        case RECEIVE_WEATHER:
            console.log("in recieve weather reducers");
            return {
                country: action.country,
                weather: action.data
            }
        case CHANGE_COUNTRY:
            // update country
            return {
                country: action.country,
                weather: {}
            }
        default:
            return state;
    }
}

export default weatherReducers;