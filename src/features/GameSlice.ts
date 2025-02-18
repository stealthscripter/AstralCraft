import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
    history: string[];
    currentWinner: string;
    whoStart: string;
    playNow: boolean
}

const initialState: GameState = {
    history: [],
    currentWinner: "",
    whoStart: "",
    playNow: false
};

const GameSlice = createSlice({
    name: "gameState",
    initialState,
    reducers: {
        addWinner: (state, action: PayloadAction<string>) => {
            state.history.push(action.payload);
            state.currentWinner = action.payload;
        },
        resetGame: (state) => {
            state.history = [];
            state.currentWinner = "";
            state.whoStart = ""; // Reset whoStart when resetting the game
        },
        setWhoStart: (state, action: PayloadAction<string>) => {
            state.whoStart = action.payload;
        },
        setPlayNow: (state, action: PayloadAction<boolean>) => {
            state.playNow = action.payload;
        },
    }
});

export const { addWinner, resetGame, setWhoStart , setPlayNow } = GameSlice.actions;

export default GameSlice.reducer;
