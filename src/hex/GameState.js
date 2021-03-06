/**
 * Created by luca on 9/11/2017.
 */
export class GameState {
    constructor(setCurrentState) {
        this.states = [
                {
                    board:{
                        hexagons: [],
                        pieces: [],
                    },
                }
            ];
        this.setCurrentState = setCurrentState;
    };

    update(action, obj) {
        let newState = Object.assign({},this.states[this.states.length-1]);
        switch (action) {
            case "ADD_PIECE":
                if(newState.board.pieces[obj.piece.position.row]===undefined){
                    newState.board.pieces[obj.piece.position.row] = [];
                }
                newState.board.pieces[obj.piece.position.row][obj.piece.position.col] = "DEFAULT";
                break;
            case "ADD_HEXAGON":
                if(newState.board.hexagons[obj.hex.position.row]===undefined){
                    newState.board.hexagons[obj.hex.position.row] = [];
                }
                newState.board.hexagons[obj.hex.position.row][obj.hex.position.col] = "DEFAULT";
            case "SET_HEXAGON_STATE":
                newState.board.hexagons[obj.hex.position.row][obj.hex.position.col] = obj.state;
                break;
            default:
                break;
        }
        this.states.push(newState);
        this.setCurrentState(this.states.length)
    }
}
