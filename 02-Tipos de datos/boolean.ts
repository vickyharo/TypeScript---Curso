
/**** Strings ****/
const a: number = 10;
let b: string = "Aprendiendo typeScript";

sayHello(b);

/*noImplicitAny : Es para decirle al las funciones que 
pasen el tipo de dato que va entrar*/
function sayHello(msg: string) {
  console.log(msg);
}


/**** Booleans ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
  let isSuperman: boolean = false;
  let respuesta = "";

  respuesta = isSuperman ? 'Es superman' : 'Es batman';

  console.log(respuesta);
})()



