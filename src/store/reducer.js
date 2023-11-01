import { reducerPhone } from './slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, reducerPhone);

export const reducer = {
  contacts: persistedReducer,
};
