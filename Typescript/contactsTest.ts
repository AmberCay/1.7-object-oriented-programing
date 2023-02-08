import { Contacts } from "./contacts";
import { Person } from "./person";

let amber = new Person('Amber', 25, 'Camino Alto');
let diego = new Person('Diego', 23, 'Camino Alto');

let listado = new Contacts();
listado.people.push(amber);
listado.people.push(diego);

listado.printCalendar()