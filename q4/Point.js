class Point{
    constructor(_x,_y){
        this.x = _x;
        this.y = _y;
    };

    Show(){
        return `(${this.x},${this.y})`;
    }

    Equals(point){
        if(this.x === point.x){
            if(this.y === point.y){
                return true;
            }
        }
        return false;
    }
}

window.Point = Point;