'use strict';

const squadreCalcio = [
    { nome: 'Roma', punti: 0, falliSubiti: 0 },
    { nome: 'Milan', punti: 0, falliSubiti: 0 },
    { nome: 'Lazio', punti: 0, falliSubiti: 0 },
    { nome: 'Inter', punti: 0, falliSubiti: 0 },
    { nome: 'Juventus', punti: 0, falliSubiti: 0 },
    { nome: 'Fiorntina', punti: 0, falliSubiti: 0 },
    { nome: 'Napoli', punti: 0, falliSubiti: 0 },
    { nome: 'Lecce', punti: 0, falliSubiti: 0 },
    { nome: 'Cagliari', punti: 0, falliSubiti: 0 },
    { nome: 'Bologna', punti: 0, falliSubiti: 0 },
    { nome: 'Torino', punti: 0, falliSubiti: 0 },
    { nome: 'Atalanta', punti: 0, falliSubiti: 0 },
    { nome: 'Sassuolo', punti: 0, falliSubiti: 0 },
    { nome: 'Empoli', punti: 0, falliSubiti: 0 },
    { nome: 'Udinese', punti: 0, falliSubiti: 0 },
];

function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

squadreCalcio.forEach((squadra) => {
    squadra.punti = generaNumeroCasuale(0, 100);
    squadra.falliSubiti = generaNumeroCasuale(0, 500);
});
const classifica = squadreCalcio.sort((a, b) => b.punti - a.punti);
const nomiFalli = squadreCalcio.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));
console.log('Squadre con nome e falli:', nomiFalli);
console.log('Classifica:');
classifica.forEach((squadra, i) => {
    console.log(`${i + 1}. ${squadra.nome} - Punti: ${squadra.punti}`);
    
});
