import * as types from '../actions/ActionTypes';

const initialState = {
    color: [0, 0, 0,],
};

export default function ui(state = initialState, action) {
    if (action.type === types.change_color) {
        return {
            color: action.color,
        };
    }
    else if (action.type === types.initialize) {
        return {
            color: initialState.color,
        };
    }
    else {
        return state;
    }
}