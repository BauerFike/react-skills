/**
 * Created by luca on 7/11/2017.
 */

import { Hexagon } from '../hex/Hexagon'

export class Board{
    constructor(cols,rows,width,height){
        this.width = width;
        this.height = height;
        this.cols = cols;
        this.rows = rows;
        this.hexagons = [];
    }

    addHexagon(w,h,col,row,img){
        // let w = this.width/this.cols;
        // let h = this.height/this.rows;
        if(this.hexagons[row] === undefined){
            this.hexagons[row] = [];
        }
        let offset_Y = 0;
        if(col%2!==0){
            offset_Y = h/2;
        }
        let offset_X = w/4*col;
        this.hexagons[row][col] = new Hexagon(col*w-offset_X,row*h-offset_Y,w,h,img);
    }



}
