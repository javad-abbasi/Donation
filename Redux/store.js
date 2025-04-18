import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import User from './Reducers/User';
import Categories from './Reducers/Categories';
import Donations from './Reducers/Donations';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
export const persistor = persistStore(store);
