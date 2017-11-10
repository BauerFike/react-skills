/**
 * Created by luca on 10/11/2017.
 */
import {MainPiece} from "../pieces/MainPiece"

export let pieceGenerator = function(type,x,y,col,row,sprite){
    if(type==="mainpiece"){
        return new MainPiece(x,y,col,row,sprite);
    }
}
