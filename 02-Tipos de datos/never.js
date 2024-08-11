"use strict";
/**** Never ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    //->Never funcion que va terminar con un error
    const error = (message) => {
        throw new Error(message);
        return 1;
    };
    error("!Auxilio");
    console.log('Hola mundo');
})();
