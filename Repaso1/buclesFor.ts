function evenNumbers(num: number): number[] {
    let resultado: number[] = [];
    for (let i = 1; i < num; i += 2) {
        resultado.push(i);
    }
    console.log(resultado);
    return resultado;
};

function myRevert(myArr:number[]):number[] {
    let arrReverse:number[] = [];
    for (let i = myArr.length; i >= 0; i--) {
        arrReverse.push(myArr[i])
    }
    return arrReverse;
}

function isRainbow(colors:string[]):void {
    for (const color of colors) {
        if (color == 'Rojo' 
            || color == 'Naranja'
            || color == 'Amarillo'
            || color == 'Verde'
            || color == 'Azul'
            || color == 'Violeta') {
                console.log(`el color ${color} si esta en el arcoiris`);
                
            }
        else {
            console.log(`el color ${color} no esta en el arcoiris`);
            
        }
    }
};

function add(myWords:string[]):number {
    let longitud:number = 0;
    for (const palabra of myWords) {
        longitud += palabra.length
    }
    return longitud
};