// import {increment, decrement, change_color, initialize} from './ActionTypes';
import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.increment,
    };
}

export function decrement() {
    return {
        type: types.decrement,
    };
}

export function changeColor(color) {
    return {
        type: types.change_color,
        color: color,
    };
}

export function initialize() {
    return {
        type: types.initialize,
        number: 0,
    };
}