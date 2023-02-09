import { Person } from "./person";

export class Contacts {

    // set propiedades
    public people:Person[];

    // constructor

    constructor() {
        this.people = [];
    }

    // methods

    public printCalendar() {
        for (const persona of this.people) {
            persona.printAll()
        }
    }
}