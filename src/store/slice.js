import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { createNewContact } from './helpers';

export const phoneSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    createContact: {
      prepare: createNewContact,
      reducer: (state, { payload }) => {
        state.contacts
          ? state.contacts.push(payload)
          : (state.contacts = [payload]);
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    filterContact: (state, { payload }) => {
      state.filter = payload;
      return state;
    },
  },
});

export const reducerPhone = phoneSlice.reducer;
export const { createContact, deleteContact, filterContact } =
  phoneSlice.actions;
