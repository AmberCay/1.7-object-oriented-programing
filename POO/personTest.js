const {Person} = require('./person.js');

const amber = new Person(1.72, 62);
amber.hobb = ['Cocinar', 'Conducir'];
// ckeck de que sirvan las funciones de person
// amber.printAll();
// amber.printHobb();

const james = new Person(1.22, 22);

module.exports = {amber, james};