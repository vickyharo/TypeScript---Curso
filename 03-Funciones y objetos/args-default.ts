//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    const fullName = (firstName : string, lastName?: string, upper: boolean = false): string => 
{
    if(upper)
    {
        return `${firstName} ${lastName || '-----'}`.toUpperCase();
    }
    else{
        return `${firstName} ${lastName || '-----'}`;
    }
   
}

const name = fullName('Tony');

console.log(name);
console.log(fullName('Tony', 'Stark',true));

})()