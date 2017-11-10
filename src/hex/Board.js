/**
 * Created by luca on 7/11/2017.
 */

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

    addHexagon(hex) {
        if (this.hexagons[hex.position.row] === undefined) {
            this.hexagons[hex.position.row] = [];
        }
        this.hexagons[hex.position.row][hex.position.col] = hex;
    }

    addPiece(piece){
        if(this.pieces[piece.position.row]===undefined){
            this.pieces[piece.position.row] = [];
        }
        this.pieces[piece.position.row][piece.position.col] = piece;
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
