const checkWin = (array) => {
    if ((array[0] == 1 && array[1] == 1 && array[2] == 1) ||
      (array[3] == 1 && array[4] == 1 && array[5] == 1) ||
      (array[6] == 1 && array[7] == 1 && array[8] == 1) ||
      (array[0] == 1 && array[3] == 1 && array[6] == 1) ||
      (array[1] == 1 && array[4] == 1 && array[7] == 1) ||
      (array[2] == 1 && array[5] == 1 && array[8] == 1) ||
      (array[0] == 1 && array[4] == 1 && array[8] == 1) ||
      (array[2] == 1 && array[4] == 1 && array[6] == 1)) {
        return true;
      }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'PLAYER_1':
            return {
                ...state,
                turn: !state.turn,
                filledBoxes: state.filledBoxes + 1,
                player1: state.player1.map((box, id) => {
                    if (id == action.value) {
                        return 1
                    } else {
                        return box
                    }
                })
            }
            case 'PLAYER_2':
                return {
                    ...state,
                    turn: !state.turn,
                    filledBoxes: state.filledBoxes + 1,
                    player2: state.player2.map((box, id) => {
                        if (id == action.value) {
                            return 1
                        } else {
                            return box
                        }
                    })
                }
                case 'CHECK_WINNER':
                    return {
                        ...state,
                        winner1: checkWin(state.player1),
                        winner2: checkWin(state.player2)
                    }
                    case 'CHECK_DRAW':
                        return {
                            ...state,
                            draw: state.filledBoxes == 9 && !state.winner1 && !state.winner2
                        }
                        case 'CHECK_END':
                            return {
                                ...state,
                                disable: state.winner1 || state.winner2 || state.draw
                            }
                            case 'RESET_GAME':
                                return {
                                    ...state,
                                    player1: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                                    player2: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                                    winner1: false,
                                    winner2: false,
                                    disable: false,
                                    filledBoxes: 0,
                                    draw: false,
                                    turn: true
                                }
                                default:
                                    return state
    }
}

export default reducer;