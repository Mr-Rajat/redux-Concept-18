const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type==="increment"){
        return {
            counter: state.counter + 1,
        };
    }
    if(action.type === "decrement"){
        return {
            counter: state.counter - 1,
        }
    }

    return state;
    
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    // getState() gives us latest state snapshot after it was updated
    console.log(latestState);
};

// to add subscriber it is inbuilt
store.subscribe(counterSubscriber);

// action

store.dispatch({ type: 'increment'});

store.dispatch({ type: 'decrement'});