/**
 * Created by luca on 7/11/2017.
 */

import {Board} from '../hex/Board';
import {Hexagon} from '../hex/Hexagon'
import {pieceGenerator} from '../hex/pieces/pieceGenerator'

import {GameState} from '../hex/GameState';



export class Game {
    constructor() {
        this.width = 1000;
        this.height = 1000;
        this.selectedHexes = [];
        this.currentState=0;
        this.setCurrentState = this.setCurrentState.bind(this);
        this.gameState = new GameState(this.setCurrentState);
        this.selectHex = this.selectHex.bind(this);
        this.createBoard(10, 10, 100, 90);
        this.rules = {
            maxPathLength : 3
        }
        this.makePiece("mainpiece",this.board.hexagons[5][5].x,this.board.hexagons[5][5].y,50,50,5,5);
    }

    makePiece(type,x,y,w,h,row,col){
        let piece = pieceGenerator(type,x,y,w,h,{
            "row": row,
            "col": col
        });
        this.board.addPiece( piece );
        console.log(piece);
        this.gameState.update("ADD_PIECE",{piece:piece});
        return piece;
    }

    makeHexagon(x,y,w,h,row,col){
        let hex = new Hexagon(x,y, w, h, {
            "row": row,
            "col": col
        });
        this.board.addHexagon(hex);
        this.gameState.update("ADD_HEXAGON",{hex:hex});
        return hex;
    }


    createBoard(cols, rows, colWidth, colHeight) {
        this.board = new Board(cols, rows, this.width, this.height);
        for ( let row = 0; row < rows; row++ ) {
            for ( let col = 0; col < cols; col++ ) {
                let offset_Y = 0;
                if (col % 2 !== 0) {
                    offset_Y = colHeight / 2;
                }
                let offset_X = colWidth / 4 * col;
                this.makeHexagon(col * colWidth - offset_X,row * colHeight - offset_Y,100, 90, row, col);
            }
        }
        for ( let row = 0; row < rows; row++ ) {
            for ( let col = 0; col < cols; col++ ) {
                this.board.addLinks(row, col);
            }
        }
    }

    selectHex(hex,drawPath){
        if(hex.state === "SELECTED"){
            this.gameState.update("SET_HEXAGON_STATE",{hex:hex,state:"DEFAULT"});
            this.selectedHexes.forEach((selHex,i)=>{
                if(selHex == hex){
                    this.selectedHexes.splice(i);
                }
            });
        }else{
            this.gameState.update("SET_HEXAGON_STATE",{hex:hex,state:"SELECTED"});
            this.selectedHexes.push(hex);
        }
        if(this.selectedHexes.length>2){
            this.gameState.update("SET_HEXAGON_STATE",{hex:this.selectedHexes[0],state:"DEFAULT"});
            this.selectedHexes.shift();
        }
        if(this.selectedHexes.length===2){
            let path = this.findPath(this.selectedHexes[0],this.selectedHexes[1]);
            drawPath(path);
        }else{
            drawPath();
        }
        hex.handleClick();
    }

    findPath(hex1,hex2){
        let hex1Name = hex1.position.row+"-"+hex1.position.col;
        let hex2Name = hex2.position.row+"-"+hex2.position.col;
        let path = this.board.graph.path(hex1Name, hex2Name);
        return path;
    }

    setCurrentState(id){
        this.currentState = id;
    }
}
