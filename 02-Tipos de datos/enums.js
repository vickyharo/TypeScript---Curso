"use strict";
/**** Enumeraciones ****/
//-->Inicializar una funcion inmediatamente (Funcion anonima autoinvocada)
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 4] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 6] = "max";
    })(AudioLevel || (AudioLevel = {}));
    ;
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
