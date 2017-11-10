/**
 * Created by luca on 8/11/2017.
 */
import {Game} from '../hex/Game';

export class PhaserHandler {
    constructor(Phaser) {
        this.phaser = Phaser;
        this.preload = this.preload.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.drawPath = this.drawPath.bind(this);
        this.game = new Phaser.Game(this.width, this.height, Phaser.AUTO, '', {
            preload: this.preload,
            create: this.create,
            update: this.update,
            render: this.render,
        });

    }


    preload() {
        this.game.load.image('hexagon_default', 'images/hexagon.png');
        this.game.load.image('pieces_main', 'images/php.png');
        this.game.load.image('hexagon_selected', 'images/js.png');
    }

    create() {
        this.hexGame = new Game();
        this.game.world.setBounds(0, 0, 2000, 2000);
        this.game.stage.backgroundColor = '#011052';
        this.drawBoard();
        this.graphics = this.game.add.graphics(0, 0);
    }

    update() {
        this.handleDrag();
        let hexagons = this.hexGame.gameState.states[this.hexGame.gameState.states.length-1].board.hexagons;
        for(let x = 0; x< hexagons.length;x++){
            for(let y = 0; y< hexagons[x].length;y++){
                let state = hexagons[x][y];
                if(this.hexGame.board.hexagons[x][y].state !== state){
                    this.hexGame.board.hexagons[x][y].setState(state);
                }
            }
        }
    }

    render() {
        // let debug = this.game.debug;
        // this.lines.forEach(function(line,i){
        //     debug.geom(line);
        // });
    }

    drawBoard() {
        let phaser = this;
        let game = this.game;
        let hexGame = this.hexGame;
        let boardGroup = this.boardGroup  = game.add.group();
        let piecesGroup = this.piecesGroup  = game.add.group();
        let style = { font: "11px source-code-pro", fill: "#444" };
        this.hexGame.board.hexagons.forEach(function (rows,i) {
            rows.forEach(function (hex,j) {
                hex.sprite = phaser.makeSprite('hexagon_default',hex.x,hex.y, hex.w, hex.h);
                hex.sprite.inputEnabled = true;
                hex.sprite.events.onInputDown.add(hexGame.selectHex.bind(null,hex,phaser.drawPath));
                boardGroup.add(hex.sprite);
                game.add.text(hex.x + 50, hex.y + 50, i + " " + j, style);
            });
        });
        this.hexGame.board.pieces.forEach(function (rows,i) {
            rows.forEach(function (piece,j) {
                piece.sprite = phaser.makeSprite('pieces_main',piece.x,piece.y, piece.w, piece.h);
                piecesGroup.add(piece.sprite);
            });
        });
    }

    makeSprite(texture,x,y,w,h){
        let sprite = this.game.add.sprite(x,y,texture);
        sprite.width = w;
        sprite.height = h;
        return sprite;
    }

    drawPath(path){
        this.graphics.clear();
        this.graphics.lineStyle(2, 0x00ff00 , 1);
        if(path === undefined || path.length<2 ){
            return false;
        }
        for(let p = 0; p < path.length; p++){
            let ncb = path[p].split("-");
            let b = this.hexGame.board.hexagons[ncb[0]][ncb[1]];
            if(p===0){
                this.graphics.moveTo(b.center.x, b.center.y);
            }else{
                this.graphics.lineTo(b.center.x, b.center.y);
            }
        }
    }

    handleDrag() {
        let game = this.game;
        if (game.input.activePointer.isDown) {
            if (game.origDragPoint) {
                // move the camera by the amount the mouse has moved since last update
                game.camera.x += game.origDragPoint.x - game.input.activePointer.position.x;
                game.camera.y += game.origDragPoint.y - game.input.activePointer.position.y;
            }
            // set new drag origin to current position
            game.origDragPoint = game.input.activePointer.position.clone();
        } else {
            game.origDragPoint = null;
        }
    }

}
