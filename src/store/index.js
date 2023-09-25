import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  visible: true
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementByAmount(state, actions) {
      state.counter = state.counter + actions.payload;
    },
    clear(state) {
      state.counter = 0;
    },
    toggle(state) {
      state.visible = !state.visible;
    }
  }
});

export const counterActions = counterSlice.actions;
const store = createStore(counterSlice.reducer);

export default store;
