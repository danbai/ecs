const ADD = 'ADD';
const DEL = 'DEL';
const RESET = 'RESET';


function increment() {
    return {
        type: 'ADD'
    }
}

function decrement() {
    return {
        type: 'DEL'
    }
}

function reset() {
    return {
        type: 'RESET'
    }
}

function add() {
    return (dispatch) => {
        dispatch(receiveAdd());
    }
}

export {
    increment,
    decrement,
    reset,
    ADD,
    DEL,
    RESET
};