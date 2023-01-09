import {configureStore} from '@reduxjs/toolkit';
import coffeesReducer from './coffees';
import choiceCoffeeReducer from './choiceCoffee';

export default configureStore({
  reducer: {
    coffees: coffeesReducer,
    choiceCoffee: choiceCoffeeReducer,
  },
});
