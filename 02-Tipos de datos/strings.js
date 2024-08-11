"use strict";
/**** Strings ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    var _a;
    //-> Formas de declarar un string
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    const abc = 123;
    console.log(`I´m ${batman}, ${abc.toString()}`);
    console.log(batman.toUpperCase());
    console.log(linternaVerde);
    console.log(volcanNegro);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta presente");
})();
