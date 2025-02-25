import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { s } from "framer-motion/client";

interface GameState {
    history: string[];
    currentWinner: string;
    whoStart: string;
    playNow: boolean;
    started: boolean;
    playerFinger: string[];
    computerFinger: string[];
}

const initialState: GameState = {
    history: [],
    currentWinner: "",
    whoStart: "",
    playNow: false,
    started: false,
    computerFinger: [],
    playerFinger: []
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
        setStarted: (state , action: PayloadAction<boolean>) => {
            state.started = action.payload
        },
        setPlayerFinger: (state, action: PayloadAction<string[]>) => {
            state.playerFinger = action.payload;
        },
        setComputerFinger: (state, action: PayloadAction<string[]>) => {
            state.computerFinger = action.payload;
        },
        setHistory: (state, action: PayloadAction<string[]>) => {
            state.history = [...state.history, ...action.payload];
        }
        
    }
});

export const { addWinner, resetGame, setWhoStart , setPlayNow , setStarted , setPlayerFinger , setComputerFinger , setHistory } = GameSlice.actions;

export default GameSlice.reducer;
