import {createSlice} from '@reduxjs/toolkit';

export const coffeesSlice = createSlice({
  name: 'coffees',
  initialState: {
    types: [],
    sizes: [],
    extras: [],
  },
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setSizes: (state, action) => {
      state.sizes = action.payload;
    },
    setExtras: (state, action) => {
      state.extras = action.payload;
    },
    setTypeSizeExtra: (state, action) => {
      state.types = action.payload.types;
      state.sizes = action.payload.sizes;
      state.extras = action.payload.extras;
    },
  },
});

export const {setTypes, setSizes, setExtras, setTypeSizeExtra} =
  coffeesSlice.actions;

export default coffeesSlice.reducer;
