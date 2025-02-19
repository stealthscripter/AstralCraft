import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
    history: string[];
    currentWinner: string;
    whoStart: string;
    playNow: boolean;
    started: boolean;
}

const initialState: GameState = {
    history: [],
    currentWinner: "",
    whoStart: "",
    playNow: false,
    started: false,
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
        setStarted: (state) => {
            state.started = true
        }
    }
});

export const { addWinner, resetGame, setWhoStart , setPlayNow , setStarted } = GameSlice.actions;

export default GameSlice.reducer;
