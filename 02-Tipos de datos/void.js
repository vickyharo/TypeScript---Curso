"use strict";
/**** Void ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    //--> Funcion void que significa que no regresa nada
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return 144;
    };
    const a = callBatman();
    console.log(a);
    console.log(callSuperman());
})();
