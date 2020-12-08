import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.increment:
            return {
                ...state,
                number: state.number + 1
            };
        case types.decrement:
            return {
                ...state,
                number: state.number - 1
            };
        case types.initialize:
            return Object.assign(
                {},
                state,
                { number: initialState.number }
            );
        default:
            return state;
    };
}