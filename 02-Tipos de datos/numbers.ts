/**** Numbers ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
  let avengers: number = 10;
  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log('Estamos en problemas');
  } else {
    console.log('Nos salvamos');
  }

  //--> Note number validación
  avengers = Number('55A');
  console.log({ avengers });

  if(isNaN(avengers))
  {
    console.log('avengers es un note number');
  }

})()