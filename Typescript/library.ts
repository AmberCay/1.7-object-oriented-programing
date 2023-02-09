import { Book } from "./books"

export   class Library {

    //set up propiedades

    private books:Book[];
    private address:string;
    private manager:string;

    // constructor

    constructor(books:Book[],
                address:string,
                manager:string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    // methods

    public getAddress():string {
        return this.address;
    }

    public setAddress(newAdress:string) {
        this.address = newAdress;
    }

    public getManager():string {
        return this.manager;
    }

    public setManager(newManager:string) {
        this.manager = newManager;
    }

    public toString():string {
        let a:String[];
        a = [];
        for (let index = 0; index < this.books.length; index++) {
            a.push(`${this.books[index]}
                Title - ${this.books[index].getTitle}
                Number of Pages - ${this.books[index].getNPages}
                IBN - ${this.books[index].getIsbn}
                Author - ${this.books[index].getAuthor}
                Editorial - ${this.books[index].getEditorial}`)
        }
        return a.join("--")
    }

    public getNumberofBooks():number {
        return this.books.length
    }

    public findByAuthor(newAuthor:string):Book[] {
        let b:Book[];
        b = [];
        for (let index = 0; index < this.books.length; index++) {
            if (this.books[index].getAuthor() == newAuthor) {
                b.push(this.books[index])
            }
            
        }
        return b;
    }
}