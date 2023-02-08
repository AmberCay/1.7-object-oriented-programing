import { Library } from "./library";
import { Book } from "./books";

let book1 = new Book('hi', 23, '233323', 'Amber', 'beep');
let book2 = new Book('hi', 23, '233323', 'Amber', 'beep');

let libreria1 = new Library([book1, book2], 'Santo Angel 48', 'Sam')

libreria1.getAddress();
libreria1.setAddress('Avenida de la Castellana');
libreria1.getManager();
libreria1.setManager('Sammy');
console.log(libreria1.getNumberofBooks());
console.log(libreria1.toString());
