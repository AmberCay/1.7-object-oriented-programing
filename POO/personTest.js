const {Person} = require('./person.js');

const amber = new Person(1.72, 62);
amber.hobb = ['Cocinar', 'Conducir'];
// amber.printAll();
// amber.printHobb();

const james = new Person(1.22, 22);

module.exports = {amber, james};