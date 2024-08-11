"use strict";
/**** Strings ****/
const a = 10;
let b = "Aprendiendo typeScript";
sayHello(b);
/*noImplicitAny : Es para decirle al las funciones que
pasen el tipo de dato que va entrar*/
function sayHello(msg) {
    console.log(msg);
}
/**** Booleans ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    let isSuperman = false;
    let respuesta = "";
    respuesta = isSuperman ? 'Es superman' : 'Es batman';
    console.log(respuesta);
})();
