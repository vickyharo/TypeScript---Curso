//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {

    //-> Función que recibe dos valores 
    const addNumber = (a: number, b: number) => a + b;

    //-> Función que recibe dos valores y regresa uno
    const greet = (name: string) => `Hola ${name}`;

    //-> Función que regresa un valor
    const saveTheWorld = () => `El mundo está salvado!`;

    //*definimos una variable sin tipo
    //! let myFunction; 
    //! myFunction = 10;
    //! console.log(myFunction);

    //-> Cuando la definimos con tipo "FUNCTION" ya no podemos
    // asignarle el 10
    let myFunction: Function;

    myFunction = addNumber;
    console.log(myFunction(10, 25));

    myFunction = greet;
    console.log(myFunction("vicky"));

    myFunction = saveTheWorld;
    console.log(myFunction());


    //-> Creamos una variable del tipo funcion y le decimos de que tipo
    // seran los parametros que envie y reciba
    let myFunction2: (x: number, y: number) => number;
    myFunction2 = addNumber;
    console.log(myFunction2(10, 25));

    let myFunction3: (x: string) => string;
    myFunction3 = greet;
    console.log(myFunction3("vicky"));

    let myFunction4: () => string;
    myFunction4 = saveTheWorld;
    console.log(myFunction4());
})()