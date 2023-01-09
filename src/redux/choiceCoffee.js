import {createSlice} from '@reduxjs/toolkit';

export const choiceCoffeeSlice = createSlice({
  name: 'choiceCoffee',
  initialState: {
    order: [],
    currentOrder: {
      type: {},
      size: {},
      extras: [],
    },
  },
  reducers: {
    addOrder: (state, action) => {
      state.order.push(action.payload);
    },
    removeOrder: (state, action) => {
      state.order.splice(action.payload, 1);
    },
    changeCurrentType: (state, action) => {
      state.currentOrder.type = action.payload;
      state.currentOrder.extras = [];
    },
    changeCurrentSize: (state, action) => {
      state.currentOrder.size = action.payload;
    },
    changeCurrentExtra: (state, action) => {
      const ExtraExists = state.currentOrder.extras.findIndex(
        e => e._id === action.payload._id,
      );
      if (ExtraExists === -1) {
        state.currentOrder.extras.push(action.payload);
      } else {
        const tempExtras = state.currentOrder.extras;
        tempExtras.splice(ExtraExists, 1);
        tempExtras.push(action.payload);
        state.currentOrder.extras = tempExtras;
      }
    },
  },
});

export const {
  addOrder,
  removeOrder,
  changeCurrentType,
  changeCurrentSize,
  changeCurrentExtra,
} = choiceCoffeeSlice.actions;

export default choiceCoffeeSlice.reducer;
