"use strict";
(() => {
    // Tipos
    console.log("***** Tipos ***** ");
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    console.log(batman);
    console.log(superman);
    console.log(existe);
    // Tuplas
    console.log("***** Tuplas ***** ");
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    console.log(parejaHeroes);
    console.log(villano);
    // Arreglos
    console.log("***** Arreglos ***** ");
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    console.log(aliados);
    //Enumeraciones
    console.log("***** Enumeraciones ***** ");
    let fuerza;
    (function (fuerza) {
        fuerza[fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
        fuerza[fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        fuerza[fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
        fuerza[fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(fuerza || (fuerza = {}));
    ;
    console.log(fuerza);
    console.log(fuerza.fuerzaAcuaman);
    // Retorno de funciones
    console.log("***** Funciones ***** ");
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    console.log(activar_batiseñal());
    pedir_ayuda();
    // Aserciones de Tipo
    console.log("***** Aserciones de Tipo ***** ");
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
