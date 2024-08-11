/**** Strings ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    //-> Formas de declarar un string
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;

    const abc: number = 123;

    console.log(`I´m ${batman}, ${abc.toString()}`);

    console.log(batman.toUpperCase());
    console.log(linternaVerde);
    console.log(volcanNegro);
    console.log(batman[10]?.toUpperCase() || "No esta presente");

})()