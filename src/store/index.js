// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementHandler(state) {
      state.counter++;
    },
    decrementHandler(state) {
      state.counter--;
    },
    increaseHandler(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounterHandler(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
//name -> it can be random name and we can mutates the array and array, object because redux/toolkit 
// internally overrides the method which state are changes and create a new object

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  counter: counterSlice.reducer,
});
export default store;


// Note: configureStore used to store multiple createSlice