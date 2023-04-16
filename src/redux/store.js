import { contactsReducer } from './contactsSlice';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
