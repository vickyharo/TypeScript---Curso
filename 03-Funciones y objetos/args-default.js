"use strict";
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '-----'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '-----'}`;
        }
    };
    const name = fullName('Tony');
    console.log(name);
    console.log(fullName('Tony', 'Stark', true));
})();
