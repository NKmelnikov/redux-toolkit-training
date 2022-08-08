import { configureStore } from '@reduxjs/toolkit';
import { currenciesApi } from './currencies/currencies.api';
import { currencyReducer } from './currencies/currencies.slice';

export const store = configureStore({
  reducer: {
    [currenciesApi.reducerPath]: currenciesApi.reducer,
    currency: currencyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currenciesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
