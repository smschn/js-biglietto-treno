// definisco le variabili e il loro inserimento tramite prompt
const kmPercorso = parseInt(prompt('Quanti km vuoi percorrere?'));
const etaPasseggero = parseInt(prompt('Quanti anni hai?'));
const prezzoAlKm = 0.21;
const scontoMinorenne = 0.8;
const scontoSenior = 0.6;
let prezzoBiglietto;

// calcolo prezzo del biglietto
if (etaPasseggero >= 18 && etaPasseggero < 65) {
    prezzoBiglietto = kmPercorso * prezzoAlKm;
    let prezzoBigliettoDueDecimali = prezzoBiglietto.toFixed(2); // limito i decimali a due nel prezzo finale
    alert('Il prezzo del biglietto è ' + prezzoBigliettoDueDecimali + ' € (nessuno sconto applicato)');
} else if (etaPasseggero >= 65) {
    prezzoBiglietto = kmPercorso * prezzoAlKm * scontoSenior;
    let prezzoBigliettoDueDecimali = prezzoBiglietto.toFixed(2); // limito i decimali a due nel prezzo finale
    alert('Il prezzo del biglietto è ' + prezzoBigliettoDueDecimali + ' € (è stato applicato lo sconto over 65)');
} else {
    prezzoBiglietto = kmPercorso * prezzoAlKm * scontoMinorenne;
    let prezzoBigliettoDueDecimali = prezzoBiglietto.toFixed(2); // limito i decimali a due nel prezzo finale
    alert('Il prezzo del biglietto è ' + prezzoBigliettoDueDecimali + ' € (è stato applicato lo sconto minorenni)');
}

// debug
console.log(kmPercorso);
console.log(etaPasseggero);
console.log(prezzoAlKm);