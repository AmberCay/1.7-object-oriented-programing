const {Contacts} = require('./contacts');
const {Person} = require('./person.js');
let myPersons = require('./personTest')

let lista1 = new Contacts();
lista1.personas.push(myPersons.amber);
lista1.personas.push(myPersons.james);
console.log(lista1);
lista1.printPersons()