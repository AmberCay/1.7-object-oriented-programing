const {Person} = require('./person');

class Contacts {
    constructor() {
        this.personas = []
    }

    // methods

    printPersons() {
        for (const persona of this.personas) {
            persona.printAll()
        }
    }
};

module.exports = {Contacts}