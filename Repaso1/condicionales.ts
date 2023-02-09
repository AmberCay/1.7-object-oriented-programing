function Zodiaco (day:number, month:number):string {
    let signoAstro:string;
    signoAstro = '';
    if (month == 12) {
        if (day <= 21) {
            signoAstro = 'Sagitario';
        }
        else {
            signoAstro = 'Capricornio';
        }
    };
    if (month == 1) {
        if (day <= 20) {
            signoAstro = 'Capricorino';
        }
        else {
            signoAstro = 'Acuario';
        }
    };
    if (month == 2) {
        if (day <= 18) {
            signoAstro = 'Acuario';
        }
        else {
            signoAstro = 'Piscis';
        }
    };
    if (month == 3) {
        if (day <= 20) {
            signoAstro = 'Piscis';
        }
        else {
            signoAstro = 'Aries';
        }
    };
    if (month == 4) {
        if (day <= 20) {
            signoAstro = 'Aries';
        }
        else {
            signoAstro = 'Tauro';
        }
    };
    if (month == 5) {
        if (day <= 20) {
            signoAstro = 'Tauro';
        }
        else {
            signoAstro = 'Geminis';
        }
    };
    if (month == 6) {
        if (day <= 21) {
            signoAstro = 'Geminis';
        }
        else {
            signoAstro = 'Cancer';
        }
    };
    if (month == 7) {
        if (day <= 22) {
            signoAstro = 'Cancer';
        }
        else {
            signoAstro = 'Leo';
        }
    };
    if (month == 8) {
        if (day <= 22) {
            signoAstro = 'Leo';
        }
        else {
            signoAstro = 'Virgo';
        }
    };
    if (month == 9) {
        if (day <= 22) {
            signoAstro = 'Virgo';
        }
        else {
            signoAstro = 'Libra';
        }
    };
    if (month == 10) {
        if (day <= 22) {
            signoAstro = 'Libra';
        }
        else {
            signoAstro = 'Escorpio';
        }
    };
    if (month == 11) {
        if (day <= 22) {
            signoAstro = 'Escorpio';
        }
        else {
            signoAstro = 'Sagitario';
        }
    };
    return `Como naciste el ${day} del ${month} eres del signo astrologico: ${signoAstro}`;
};

function continent(country:string):void {
    let cont:string = 'Antartica';
    if (country == 'Espanya' 
        || country == 'Francia'
        || country == 'Irlanda'
        || country == 'Monaco'
        || country == 'Belgica') {
            cont = 'Europa';
        };

        if (country == 'Maruecos' 
        || country == 'Botswana'
        || country == 'Zambia'
        || country == 'Guinea Equatorial'
        || country == 'Eswatini') {
            cont = 'Africa';
        };

        if (country == 'Bahrain' 
        || country == 'India'
        || country == 'Indonesia'
        || country == 'Japon'
        || country == 'Korea del Sur') {
            cont = 'Asia';
        };

        if (country == 'Australia' 
        || country == 'Nueva Zelanda'
        || country == 'Kiribati'
        || country == 'Micronesia'
        || country == 'Fiji') {
            cont = 'Oceania';
        };

        if (country == 'Canada' 
        || country == 'Mexico'
        || country == 'Bolivia'
        || country == 'Equador'
        || country == 'Chile') {
            cont = 'America';
        };
    console.log(`${country} esta en el continente de ${cont}`);
};

function isEven(number:number):string {
    let resultado:string = '';
    if (number % 2 == 0) {
        resultado = 'El numero es par'
    }
    else {
        resultado = 'El numero es inpar'
    }
    return resultado;
}