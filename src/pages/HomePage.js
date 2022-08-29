import React, { useReducer } from "react";
import Board from "../components/Board";
import { Header } from "../components/Header";
import Result from "../components/Result";

import Context from "../context/Context";
import reducer from "../reducer/Reducer";


const HomePage = () => {
    const initialState = {
        player1: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        player2: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        winner1: false,
        winner2: false,
        disable: false,
        filledBoxes: 0,
        draw: false,
        turn: true
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <Header/>
            <Context.Provider value={{state, dispatch}}>
            <Board/>
            <Result/>
            </Context.Provider>
            
        </div>
    )
}

export default HomePage;