import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
