/**
 * Created by luca on 8/11/2017.
 */

export class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    /**
     * @param p1 tl
     * @param p2 br
     */
    inRectangle(p1,p2){
        if(this.x >= p1.x && this.x <= p2.x && this.y >= p1.y && this.y <= p2.y){
            return true;
        }
        return false;
    }

    inTriangle(p1,p2,p3)
    {
        var denominator = ((p2.y - p3.y)*(p1.x - p3.x) + (p3.x - p2.x)*(p1.y - p3.y));
        var a = ((p2.y - p3.y)*(this.x - p3.x) + (p3.x - p2.x)*(this.y - p3.y)) / denominator;
        var b = ((p3.y - p1.y)*(this.x - p3.x) + (p1.x - p3.x)*(this.y - p3.y)) / denominator;
        var c = 1 - a - b;

        return 0 <= a && a <= 1 && 0 <= b && b <= 1 && 0 <= c && c <= 1;
    }
}
