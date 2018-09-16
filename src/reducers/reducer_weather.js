import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]); // almost the same,
            return [action.payload.data, ...state]; // this will add the new action in the beginning
    }
    return state;
}
