import { configureStore } from '@reduxjs/toolkit'
// import { modalAuthReducer } from './slice';
import uiReducer from './sliceModal';

export const store = configureStore({
  reducer: {
     ui: uiReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;