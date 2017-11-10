/**
 * Created by luca on 7/11/2017.
 */

import {Element} from './Element'
import {Point} from '../hex/Point'


export class Hexagon extends Element {
    constructor(x,y,w,h){
        super(x,y,w,h);
        this.state = "DEFAULT";
        /**
         * Rectangle containing hexagon
         * The 6 points of the hex
         *      _
         *  tl/0 1\tr
         *    5   2
         *  bl\4_3/br
         */
        this.pointsRect = {"tl":null,"tr":null,"br":null,"bl":null};
        this.points = [];
        this.links = [];
        this.center = {};
        this.center["x"] = x+w/2;
        this.center["y"] = y+h/2;
        this.generatePoints();
        this.handleClick = this.handleClick.bind(this);
        this.addLink = this.addLink.bind(this) ;
    }

    generatePoints(){
        this.pointsRect.tl = new Point(this.x,this.y);    //tl
        this.pointsRect.tr = new Point(this.x+this.w,this.y);  //tr
        this.pointsRect.br = new Point(this.x+this.w,this.y+this.h);//br
        this.pointsRect.bl = new Point(this.x,this.y+this.h);  //bl
        const wOff = this.w/4;
        const hOff = this.h/2;
        this.points[0] = new Point(this.x+wOff,this.y);
        this.points[1] = new Point(this.x+this.w-wOff,this.y);
        this.points[2] = new Point(this.x+this.w,this.y+hOff);
        this.points[3] = new Point(this.x+this.w-wOff,this.y+this.h);
        this.points[4] = new Point(this.x+wOff,this.y+this.h);
        this.points[5] = new Point(this.x,this.y+hOff);
    }

    addLink(link){
        this.links.push(link);
    }

    handleClick(){
        console.log(this.position);
        console.log(this.links);
    }

    setSprite(sprite){
        this.sprite = sprite;
    }

    setState(state){
        switch(state) {
            case "DEFAULT":
                this.state = state;
                // this.sprite.loadTexture('hexagon_default');
                // this.sprite.width = this.w;
                // this.sprite.height = this.h;
                this.sprite.tint = 0xffffff;
                break;
            case "SELECTED":
                this.state = state;
                // this.sprite.loadTexture('hexagon_selected');
                // this.sprite.width = this.w;
                // this.sprite.height = this.h;
                this.sprite.tint = Math.random() * 0xffffff;
                break;
            default:
                break;
        }
    }

}
