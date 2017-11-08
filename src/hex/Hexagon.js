/**
 * Created by luca on 7/11/2017.
 */

import {Shape} from '../hex/Shape'
import {Point} from '../hex/Point'


export class Hexagon extends Shape {
    constructor(x,y,w,h,img){
        super(x,y,w,h,img);
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
        this.generatePoints();
    }

    checkCollision(point){
        if(point.inRectangle(this.pointsRect.tl,this.pointsRect.br)) {
            // console.log("rec" + this.x + " " + this.y);
            if (point.inTriangle(this.pointsRect.tl, this.points[0], this.points[5])) {
                return false;
            }
            if (point.inTriangle(this.pointsRect.tr, this.points[1], this.points[2])) {
                return false;
            }
            if (point.inTriangle(this.pointsRect.br, this.points[2], this.points[3])) {
                return false;
            }
            if (point.inTriangle(this.pointsRect.bl, this.points[4], this.points[5])) {
                return false;
            }
            return true;
        }
        return false;
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

}
