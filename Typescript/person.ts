export class Person {

    // set propiedades

    public name:string;
    public age:number;
    private adress:string;

    // constructor

    constructor(name:string, age:number, address:string) {
        this.name = name;
        this.age = age;
        this.adress = address;
    }

    // Methods

    public printName() {
        console.log(this.name);
    }

    public yearOfBirth(currentYear:number):number {
        return currentYear - this.age;
    }

    public setAdress(address:string) {
        this.adress = address;
    }

    public getAdress():string {
        return this.adress;
    }

    public printAll() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`);
        }
    }
}