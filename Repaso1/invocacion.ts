import { add } from "./buclesFor";
import { isEven } from "./condicionales";

let longitudes:number = 0;
longitudes += add(['Casa', 'Coche', 'Ciudad', 'Cesta']);
longitudes += add(['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil']);
longitudes += add(['Venezuela', 'Veneno', 'Voltaje']);

isEven(longitudes)