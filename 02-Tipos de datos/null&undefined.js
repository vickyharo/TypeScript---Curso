"use strict";
/**** Null and undefined ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    let isActive = undefined;
    let isNull = null;
    console.log(isActive);
    console.log(isNull);
})();
