/**
 * Created by luca on 7/11/2017.
 */

import {Board} from '../hex/Board';
import {Drawer} from '../hex/Drawer';


export class Game {
    constructor(){
        this.width = 1000;
        this.height = 1000;
        this.drawer = new Drawer();
        this.drawer.createCanvas(this.width,this.height);
        this.createBoard(10,10);
        this.drawBoard();
        this.handleClick = this.handleClick.bind(this);
        this.drawer.canvas.onclick = this.handleClick;
    }



    createBoard(cols,rows){
        this.board = new Board(cols,rows,this.width,this.height);
        var hexImage = new Image();
        hexImage.src = "images/hexagon.png";
        for(let row = 0; row < rows; row++){
            for(let col = 0; col < cols; col++){
                this.board.addHexagon(220,190,row,col,hexImage);
            }
        }
    }

    drawBoard(){
        for(let row = 0; row < this.board.hexagons.length; row++){
            for(let col = 0; col < this.board.hexagons[row].length; col++){
                let hex = this.board.hexagons[row][col];
                this.drawer.drawImage(hex);
                this.drawer.drawText(row + " " + col,hex);
            }
        }
    }

    handleClick(event){
        let point = this.drawer.getCursorPosition(event);
        for(let row = 0; row < this.board.hexagons.length; row++){
            for(let col = 0; col < this.board.hexagons[row].length; col++){
                let hex = this.board.hexagons[row][col];
                if(hex.checkCollision(point)){
                    console.log(row + " " + col);
                }
            }
        }
    }



}
