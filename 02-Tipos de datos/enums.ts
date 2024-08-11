/**** Enumeraciones ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    enum AudioLevel {
        min = 4,
        medium = 5,
        max = 6
    };

    let currentAudio = AudioLevel.medium;

    console.log(currentAudio);
    console.log(AudioLevel);

})()

