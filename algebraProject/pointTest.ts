import { Point } from "./point";

let coordenadas1 = new Point(1,2);

coordenadas1.setX(2);
coordenadas1.setY(1);
coordenadas1.getX();
coordenadas1.getY();
coordenadas1.toString();

let c2 = new Point(1,1)
coordenadas1.distanceToOrigin();
coordenadas1.calculateDistance(c2);

coordenadas1.calculateQuadrant();