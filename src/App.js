import React, {Component} from 'react';
import './App.css';
import {Header} from './components/Header'
import {SkillsListContainer} from './containers/SkillsListContainer'
import {PhaserHandler} from './hex/PhaserHandler';


window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
let Phaser = require('phaser/build/custom/phaser-split')

new PhaserHandler(Phaser);


// let game = new window.Phaser.Game(this.width, this.height, window.Phaser.AUTO, '', {
//     preload: preload,
//     create: create,
//     update: update
// });
//
// let hexGame = null;
//
// function preload() {
//     game.load.image('hexagon', 'images/hexagon.png');
// }
//
// function create() {
//     hexGame = new Game();
//     game.world.setBounds(0, 0, 2000, 2000);
//     hexGame.board.hexagons.forEach(function (rows) {
//         rows.forEach(function (hex) {
//             game.add.sprite(hex.x, hex.y, 'hexagon');
//         });
//     });
// }
//
// function update() {
//     if (game.input.activePointer.isDown) {
//         if (game.origDragPoint) {
//             // move the camera by the amount the mouse has moved since last update
//             game.camera.x += game.origDragPoint.x - game.input.activePointer.position.x;
//             game.camera.y += game.origDragPoint.y - game.input.activePointer.position.y;
//         }
//         // set new drag origin to current position
//         game.origDragPoint = game.input.activePointer.position.clone();
//     } else {
//         game.origDragPoint = null;
//     }
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {"skillCardsList": []}
    }

    render() {
        return (<div></div>);
        // <div>
        //     <Header />
        //     <div className="section">
        //         <div className="container">
        //             <div className="columns is-12">
        //                 <div className="column is-6">
        //                     <SkillsListContainer  cardsPerLine={2}/>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // );
    }
}

export default App;



