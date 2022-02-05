const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {
    
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }   
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state
}

//pass in reducer function
const store = redux.createStore(counterReducer)

const counterSubscriver = () => {
    const latestState = store.getState();
    console.log(latestState)
}

//pass in subscriber
store.subscribe(counterSubscriver);

store.dispatch({ type: 'increment' })
store.dispatcy({type: 'decrement'})