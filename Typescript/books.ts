export class Book {
    
    // set up propiedades

    private title:string;
    private nPages:number;
    private isbn:string;
    private author:string;
    private editorial:string;

    // constructor

    constructor(title:string, 
                nPages:number,
                isbn:string,
                author:string,
                editorial:string) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    // methods

    public getTitle():string {
        return this.title;
    }

    public setTitle(newTitle:string) {
        this.title = newTitle;
    }

    public getNPages():number {
        return this.nPages;
    }

    public getIsbn():string {
        return this.isbn;
    }

    public setIsbn(newIsbn:string) {
        this.isbn = newIsbn;
    }

    public setNPages(newNPages:number) {
        this.nPages = newNPages;
    }

    public getAuthor():string {
        return this.author;
    }

    public setAuthor(newAuthor:string) {
        this.author = newAuthor;
    }

    public getEditorial():string {
        return this.editorial;
    }

    public setEditorial(newEditorial:string) {
        this.editorial = newEditorial;
    }

    public toString():string {
        return `Title - ${this.title}
                Number of Pages - ${this.nPages}
                ISBN - ${this.isbn}
                Author - ${this.author}
                Editorial - ${this.editorial}`
    }
}