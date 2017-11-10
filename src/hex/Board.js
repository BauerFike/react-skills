/**
 * Created by luca on 7/11/2017.
 */

import {Hexagon} from '../hex/Hexagon'
import Graph from 'node-dijkstra'

export class Board {
    constructor(cols, rows, width, height) {
        this.width = width;
        this.height = height;
        this.cols = cols;
        this.rows = rows;
        this.hexagons = [];
        this.graph = new Graph();
        this.pieces = [];
    }

    addHexagon(w, h, col, row, img) {
        // let w = this.width/this.cols;
        // let h = this.height/this.rows;
        if (this.hexagons[row] === undefined) {
            this.hexagons[row] = [];
        }
        let offset_Y = 0;
        if (col % 2 !== 0) {
            offset_Y = h / 2;
        }
        let offset_X = w / 4 * col;
        this.hexagons[row][col] = new Hexagon(col * w - offset_X, row * h - offset_Y, w, h, img, {
            "row": row,
            "col": col
        });
    }

    addPiece(piece,row,col){
        if(this.pieces[row]===undefined){
            this.pieces[row] = [];
        }
        this.pieces[row][col] = piece;
    }


    addLinks(row, col) {
        var links = {};
        for ( let x = row - 1; x <= row + 1; x++ ) {
            for ( let y = col - 1; y <= col + 1; y++ ) {
                if (this.hexagons[x] !== undefined && this.hexagons[x][y] !== undefined) {
                    //we don't link to ourselves
                    if (x === row && y === col) {
                        continue;
                    }
                    //on even columns we remove the top left and top right cells (not connected)
                    if (y % 2 !== 0 && ((x === row - 1 && y === col - 1) || (x === row - 1 && y === col + 1))) {
                        continue;
                    }
                    //on odd columns we remove the bottom left and bottom right cells (not connected)
                    if (y % 2 === 0 && ((x === row + 1 && y === col - 1) || (x === row + 1 && y === col + 1))) {
                        continue;
                    }
                    this.hexagons[row][col].addLink({x, y});
                    links[x + "-" + y] = 1;
                }
            }
        }
        this.graph.addNode(row + "-" + col, links);

    }

}
