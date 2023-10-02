import { configureStore } from "@reduxjs/toolkit";
import authStatesSlice from "../authStates/authStates.slice";

export const store = configureStore({
  reducer: {
    authStates: authStatesSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
