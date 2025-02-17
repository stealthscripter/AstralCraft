import { configureStore } from "@reduxjs/toolkit";
import userPicksReducer from "./features/UserPickSlice";
import computerPicksReducer from "./features/ComputerPickSlice";
import picksVariableReducer from "./features/PickSlice";

const store = configureStore({
  reducer: {
    userPicks: userPicksReducer,
    computerPicks: computerPicksReducer,
    picksVariable: picksVariableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;