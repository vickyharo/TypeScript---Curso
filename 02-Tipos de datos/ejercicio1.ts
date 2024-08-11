(() => {

    // Tipos
    console.log("***** Tipos ***** ");

    const batman: string = 'Bruce';
    const superman: string = 'Clark';
    const existe: boolean = false;

    console.log(batman);
    console.log(superman);
    console.log(existe);

    // Tuplas
    console.log("***** Tuplas ***** ");

    const parejaHeroes: [string, string] = [batman, superman];
    const villano: [string , number , boolean] = ['Lex Lutor', 5, true];

    console.log(parejaHeroes);
    console.log(villano);

    // Arreglos
    console.log("***** Arreglos ***** ");

    const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

    console.log(aliados);

    //Enumeraciones

    console.log("***** Enumeraciones ***** ");

    enum fuerza {
        fuerzaFlash = 5,
        fuerzaSuperman = 100,
        fuerzaBatman = 1,
        fuerzaAcuaman = 0
    };

    console.log(fuerza);
    console.log(fuerza.fuerzaAcuaman);


    // Retorno de funciones

    console.log("***** Funciones ***** ");

    function activar_batiseñal(): string {
        return 'activada';

    }

    function pedir_ayuda(): void {
        console.log('Auxilio!!!');
    }

    console.log(activar_batiseñal());
    pedir_ayuda();

    // Aserciones de Tipo

    console.log("***** Aserciones de Tipo ***** ");

    const poder: any = '100';
    const largoDelPoder: number = (poder as string).length;
    console.log(largoDelPoder);

})()
