import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userPicks {
  userPicks: string[];
}

const initialState: userPicks = {
  userPicks: [],
};

const userPickSlice = createSlice({
  name: "userPicks",
  initialState,
  reducers: {
    setUserPicks: (state, action: PayloadAction<string>) => {
      const pick = action.payload;
      if (state.userPicks.includes(pick)) {
        state.userPicks = state.userPicks.filter((c) => c !== pick);
      } else {
        state.userPicks =
          state.userPicks.length >= 2
            ? [...state.userPicks.slice(1), pick]
            : [...state.userPicks, pick];
      }
    },
  },
});

export const {setUserPicks} = userPickSlice.actions
export default userPickSlice.reducer