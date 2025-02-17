import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
    history: string[];
    currentWinner: string;
    whoStart: string;
}

const initialState: GameState = {
    history: [],
    currentWinner: "",
    whoStart: ""
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
        }
    }
});

export const { addWinner, resetGame, setWhoStart } = GameSlice.actions;

export default GameSlice.reducer;
