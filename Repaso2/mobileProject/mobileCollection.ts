import { Mobile } from "./mobile";

export class MobileCollection {

    // set up propiedades

    private mobiles: Mobile[];
    totalPrice: number;

    // constructor

    constructor(mobiles:Mobile[]) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    // methods

    public getMobiles():Mobile[] {
        return this.mobiles;
    }

    public setMobiles(newMobiles:Mobile[]) {
        this.mobiles = newMobiles;
    }

    public getTotalPrice():number {
        return this.totalPrice;
    }

    public setTotalPrice(newTotalPrice:number) {
        this.totalPrice = newTotalPrice;
    }
    private totalPriceCalculation():number {
        let cost:number = 0;
        for (const phone of this.mobiles) {
            cost+= phone.getPrice();
        }
        return cost;
    }

    public printCollection():string {
        let lista:string[] = [];
            for (const phone of this.mobiles) {
                lista.push(phone.toString())
            }
        lista.push(`${this.totalPriceCalculation()}`)
        return lista.join('\n')
    }
}