"use strict";
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log(name);
})();
