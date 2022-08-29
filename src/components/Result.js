import React, { useContext} from "react";
import Context from "../context/Context";

const Result = () => {
    const {state, dispatch} = useContext(Context)
    const resetGame = () => {
        document.querySelectorAll('.button').forEach((element) => element.innerText = ``)
        dispatch({type: 'RESET_GAME'})
    }
    return (
        <div className="result">
            <button className="result-button" onClick={resetGame}>Reset</button>
            <div className="result-text">{state.draw ? "DRAW" : ''}</div>
            <div className="result-text">{state.winner1 ? "OYUNCU1 KAZANDI" : ''}</div>
            <div className="result-text">{state.winner2 ? "OYUNCU2 KAZANDI" : ''}</div>
        </div>
    )
}

export default Result;