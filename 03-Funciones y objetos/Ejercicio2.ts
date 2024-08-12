// Funciones Básicas
function sumar(a: number, b: number) :number{
    return a + b;
}

const contar = (heroes: string[]):number => {
    return heroes.length;
}

const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(superHeroes);
console.log(contar(superHeroes));

//Parametros por defecto
const llamarBatman = (llamar: boolean):void => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
}

console.log(llamarBatman(true));

// Rest?
const unirheroes = (...personas: string[]):string => {
    return personas.join(", ");
}

console.log(unirheroes('Batman', 'Superman', 'Thor', 'Iron Man'));

// Tipo funcion
const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]) => { return; }

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (a: number, b: string, c: boolean, d: string[]) => void;
noHaceNadaTampoco = noHaceNada;

console.log(noHaceNadaTampoco(1, 'hola', false, ['hola', 'adios']));
