"use strict";
/**** Arrays ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    //--> Se puede declarar un array de varios tipos
    const numbers = [1, 2, 3, 'r', 5];
    console.log(numbers);
    const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde', 'Tanos', 'Guason'];
    villians.forEach(x => console.log(x.toUpperCase()));
})();
