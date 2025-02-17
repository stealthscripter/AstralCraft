import { configureStore } from "@reduxjs/toolkit";
import picksVariableReducer from "./features/PickSlice";

const store = configureStore({
  reducer: {
    picksVariable: picksVariableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;