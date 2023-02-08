export class Vector {

    // set up propiedades

    private elements:number[];
    // constructor

    constructor (n:number, k:number) {
        
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * (k + 1)))     
        };
    }

    // methods

    public print() {
        console.log(this.elements);
    }

    public add(v1:Vector):number[] {
        let a:number[]
        a = [];
        for (let i = 0; i < this.elements.length; i++) {
            a.push(this.elements[i] + v1[i])
        };
        return a;
    }

    public subs(v1:Vector):Vector {
        let a:number[]
        a = [];
        for (let i = 0; i < this.elements.length; i++) {
            a.push(this.elements[i] - v1[i])
        };
        let vResultado = new Vector(1,1);
        vResultado.elements = a;
        return vResultado
    }

    public mult(v1:Vector):Vector {
        let a:number[]
        a = [];
        for (let i = 0; i < this.elements.length; i++) {
            a.push(this.elements[i] * v1[i])
        };
        let vResultado = new Vector(1,1);
        vResultado.elements = a;
        return vResultado
    }

    public multNumber(n:number):Vector {
        let a:number[]
        a = [];
        for (let i = 0; i < this.elements.length; i++) {
            a.push(this.elements[i] * n)
        };
        let vResultado = new Vector(1,1);
        vResultado.elements = a;
        return vResultado
    }
}