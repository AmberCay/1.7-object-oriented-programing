export class Point {

    // set up propiedades

    private x:number;
    private y:number;

    // constructor

    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    // methods

    public setX(newX:number):void {
        this.x = newX
    }

    public getX():number {
        return this.x
    }

    public setY(newY:number):void {
        this.y = newY
    }

    public getY():number {
        return this.y
    }

    public toString():string {
        return `(${this.x},${this.y})`
    }

    public distanceToOrigin():number {
        return Math.sqrt((this.x * this.x) + (this.y * this.y))
    }

    public calculateDistance(anotherPoint:Point):Number {
        let trianguloX:number = (this.x - anotherPoint.getX());
        let trianguloY:number = (this.y - anotherPoint.getY());

        return Math.sqrt((trianguloX * trianguloX) + (trianguloY * trianguloY))
    }
}