function hasEven(mynums:number[]):void {
    let count:number = 0;
    while (count < mynums.length && (mynums[count] % 2 !== 0)) {
    count++
    };
    if (count < mynums.length) {
        console.log("Si hay un multiple de 2 en tu array");
    }
    else {
        console.log("No hay multiples de 2 en tu array");
    }
};
function startWithM(myNames:string[]):boolean {
    let bol:boolean = false;
    let count:number = 0;
    while (myNames[count].charAt(0) == 'M') {
        count++
    }
    if (count > myNames.length) {
        bol = true;
    }
    return bol;
}
