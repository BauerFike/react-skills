/**
 * Created by luca on 8/11/2017.
 */
import {Point} from '../hex/Point';
import {Camera} from '../hex/Camera';

export class Drawer{

    createCanvas(w,h){
        this.canvas = document.getElementById('canvas');
        this.canvas.width = w;
        this.canvas.height = h;
        this.context = this.canvas.getContext('2d');
        this.camera = new Camera(w/2,h/2,200,200)
    }

    drawImage(el){
        this.context.drawImage(el.img,el.x,el.y,el.w,el.h);
    }

    drawText(text,el){
        this.context.fillText(text,el.x+el.w/2,el.y+el.h/2);
    }

    handleClick(clickHandler){
        this.canvas.onclick = this.getCursorPosition;
    }

    getCursorPosition(event) {
        var rect = this.canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        return new Point(x,y);
    }
}
