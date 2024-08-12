"use strict";
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(superHeroes);
console.log(contar(superHeroes));
//Parametros por defecto
const llamarBatman = (llamar) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
console.log(llamarBatman(true));
// Rest?
const unirheroes = (...personas) => {
    return personas.join(", ");
};
console.log(unirheroes('Batman', 'Superman', 'Thor', 'Iron Man'));
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { return; };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
console.log(noHaceNadaTampoco(1, 'hola', false, ['hola', 'adios']));
