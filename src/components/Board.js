import React, {useContext} from "react";
import Box from "./Box";
import Context from "../context/Context";


const Board = () => {
    const {state, dispatch} = useContext(Context)
    const boxes = ['foo','foo','foo','foo','foo','foo','foo','foo','foo']
    const fillBox = (e) => {
        if (state.turn) {
            if (e.target.innerHTML) {
                alert('Lüften Başka Bir Kutu Seçiniz ')
            } else {
                e.target.innerHTML = 'X'
                dispatch({
                    type: 'PLAYER_1',
                    value: e.target.value
                })
            }
        } else {
            if (e.target.innerHTML) {
                alert('Lüften Başka Bir Kutu Seçiniz ')
            } else {
                e.target.innerHTML = 'O'
                dispatch ({
                    type: 'PLAYER_2',
                    value: e.target.value
                })
            }
        }
    }

    const onClick = (e) => {
        fillBox(e)
        dispatch({type: 'CHECK_WINNER'})
        dispatch({type: 'CHECK_DRAW'})
        dispatch({type: 'CHECK_END'})
    }
    return (
        <div className="board">
            {boxes.map((box, id) => (
                <Box key={id} value={id} onClick={onClick} disabled={state.disabled}></Box>
            ))}
        </div>
    )
}

export default Board;