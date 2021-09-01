import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reducers from './reducers';

const reducer = combineReducers(reducers);

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store['getState']>;

export type CustomDispatch = typeof store["dispatch"];
export const useAppDispatch = () => useDispatch<CustomDispatch>();

export default store;
