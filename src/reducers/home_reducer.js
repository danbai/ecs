import { ADD, DEL, RESET } from 'actions/home_action';

function counter(state={count:0}, action) {
    switch (action.type) {
        case ADD:
            return {
                count: ++state.count
            };
        case DEL:
            return {
                count: --state.count
            };
        case RESET:
            return {count: 0}
        default:
            return state;
    }
}

export {
    counter
};