import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface computerPicks {
  computerPicks: string[];
}

const initialState: computerPicks = {
  computerPicks: [],
};

const variables: string[] = ["desto", "finger", "caw", "cawter", "oli"];
const computerPickSlice = createSlice({
  name: "computerPicks",
  initialState,
  reducers: {
    setComputerPicks: (state, action: PayloadAction<string[]>) => {
        const userPicks = action.payload
        const availableChoices = variables.filter((variable) => !userPicks.includes(variable));
        const shuffledChoices = availableChoices.sort(() => Math.random() - 0.5);
        state.computerPicks = shuffledChoices.slice(0, 2);

    },
  },
});

export const {setComputerPicks} = computerPickSlice.actions
export default computerPickSlice.reducer