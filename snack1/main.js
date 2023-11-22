'use strict';

const biciDaCorsa = [
    { nome: 'Bianchi', peso: 10 },
    { nome: 'Atala', peso: 6 },
    { nome: 'Olmo', peso: 8 },
    { nome: 'Casati', peso: 12 },
    { nome: 'Colnago', peso: 11 },
    { nome: 'Bottecchia', peso: 7 },
];

let biciMinorePeso = biciDaCorsa[0];

biciDaCorsa.forEach((bici) => {
    if (bici.peso < biciMinorePeso.peso) {
        biciMinorePeso = bici;
    }
});

const { nome, peso } = biciMinorePeso;
let pesoMinore = document.querySelector('.biciminore');
pesoMinore.innerHTML = (`La bici ${nome} pesa ${peso} kg, ed è la bici che pesa di meno.`);
console.log(`La bici ${nome} pesa ${peso} kg, ed è la bici che pesa di meno.`);









