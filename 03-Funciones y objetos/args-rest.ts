//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    //--> usamos la variable restArgs para indicarle a la funcion que por medio
    //de esa varible pasaremos los argumentos restantes
    const fullname = (firstname: string, ...restArgs: string[]): string => {
        return `${firstname} ${restArgs.join(' ')}`;
    }

    const superman = fullname('Clark', 'Joseph', 'Kent');

    console.log({superman});

})()
