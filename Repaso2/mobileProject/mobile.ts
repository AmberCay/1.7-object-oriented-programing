export class Mobile {

    // set up propiedades

    private name:string;
    private trademark:string;
    private model:string;
    private color:string;
    private price:number;

    // constructor

    constructor(name:string, trademark:string, model:string, color:string, price:number) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price; 
    }

    // methods

    public getName():string {
        return this.name;
    }

    public setName(newName:string) {
        this.name = newName
    }

    public getTrademark():string {
        return this.trademark;
    }

    public setTrademark(newTrademark:string) {
        this.trademark = newTrademark
    }

    public getModel():string {
        return this.model;
    }

    public setModel(newModel:string) {
        this.model = newModel
    }

    public getColor():string {
        return this.color;
    }

    public setColor(newColor:string) {
        this.color = newColor
    }

    public getPrice():number {
        return this.price;
    }

    public setPrice(newPrice:number) {
        this.price = newPrice
    }
}