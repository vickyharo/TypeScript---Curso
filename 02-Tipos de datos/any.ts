/**** Any ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Dr.Strange';
    console.log((avenger as string).charAt(0));

    avenger = 150.23548515;
    console.log(avenger.toFixed(2));

    console.log(exists);
    console.log(power);
})()

