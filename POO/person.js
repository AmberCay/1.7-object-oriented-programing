class Person {
    constructor(height,weight) {
        this.height = height;
        this.weight = weight;
        this.hobb;
        this.yearOfBirth;
    }

    // methods

    calcImc() {
        return (this.weight / (this.height * this.height))
    }

    calcAge(year) {
        return year - this.yearOfBirth
    }

    printAll() {
        console.log(`${keys(Person)} - ${this.height}`);
    }

    printHobb() {
        console.log(`Hobbies:`);
        for (const hobbie of this.hobb) {
            console.log("- " + hobbie);
        }
    }
}

module.exports = {Person}
