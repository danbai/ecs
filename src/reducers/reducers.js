import { counter } from 'reducers/home_reducer';

function combineReducers(state={}, action) {
    return {
        counter: counter(state.counter, action)
    };
}

export default combineReducers;