import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PicksState {
  picksVariable: string[]; // All available choices
  userPicks: string[]; // User's picks
  computerPicks: string[]; // Computer's picks
}

const initialState: PicksState = {
  picksVariable: ["desto", "finger", "caw", "cawter", "oli"], // All available choices
  userPicks: [],
  computerPicks: [],
};

const picksVariableSlice = createSlice({
  name: "picksVariable",
  initialState,
  reducers: {
    // Handle user's pick and update available picks
    setUserPick: (state, action: PayloadAction<string>) => {
      const userPick = action.payload;
      // Remove the selected pick from available picks
      state.picksVariable = state.picksVariable.filter(
        (pick) => pick !== userPick
      );
      // Add the selected pick to userPicks
      state.userPicks.push(userPick);
    },

    // Handle computer's pick and update available picks
    setComputerPick: (state) => {
      // Ensure at least two picks remain
      if (state.picksVariable.length >= 2) {
        // Shuffle the remaining available choices
        const shuffledChoices = state.picksVariable.sort(
          () => Math.random() - 0.5
        );

        // Get the first two choices
        const computerChoices = shuffledChoices.slice(0, 2);

        // Remove the computer's picks from available picks
        state.picksVariable = state.picksVariable.filter(
          (pick) => !computerChoices.includes(pick)
        );

        // Add the computer's picks to computerPicks
        state.computerPicks = computerChoices;
      }
    },

    // Reset all picks to the initial state
    resetPicks: (state) => {
      state.picksVariable = ["desto", "finger", "caw", "cawter", "oli"];
      state.userPicks = [];
      state.computerPicks = [];
    },
    resetComputerPicks: (state) => {
      state.computerPicks.forEach((pick) => {
        state.picksVariable.push(pick);  // Corrected `push` method usage
      });
    
      // Clear the computer picks
      state.computerPicks = [];
    },
  },
});

export const { setUserPick, setComputerPick, resetPicks, resetComputerPicks } =
  picksVariableSlice.actions;

export default picksVariableSlice.reducer;
