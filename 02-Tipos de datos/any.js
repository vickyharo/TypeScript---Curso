"use strict";
/**** Any ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr.Strange';
    console.log(avenger.charAt(0));
    avenger = 150.23548515;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
