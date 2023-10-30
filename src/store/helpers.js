import { nanoid } from '@reduxjs/toolkit';

export const createNewContact = data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
};
