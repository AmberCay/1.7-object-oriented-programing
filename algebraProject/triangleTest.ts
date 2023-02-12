import { Point } from "./point";
import { Triangle } from "./triangle";

let v1 = new Point(1,1);
let v2 = new Point(2,2);
let v3 = new Point(4,3);
let triangulo = new Triangle(v1,v2,v3);

triangulo.calculateLenghtSides()