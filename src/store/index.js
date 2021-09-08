import { configureStore } from '@reduxjs/toolkit';
import { notesApi } from 'store/api/notes';
import { groupsApi } from 'store/api/groups';
import { studentsApi } from 'store/api/students';

export * from './api/notes';
export * from './api/groups';
export * from './api/students';

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware),
});
