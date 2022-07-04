// definisco le variabili e il loro inserimento tramite prompt
const kmPercorso = parseInt(prompt('Quanti km vuoi percorrere?'));
const etaPasseggero = parseInt(prompt('Quanti hanni hai?'));
const prezzoAlKm = 0.21;
const scontoMinorenne = 0.8;
const scontoSenior = 0.6;
let prezzoBiglietto = kmPercorso * prezzoAlKm;

// calcolo prezzo del biglietto
if (etaPasseggero < 18) {
    prezzoBiglietto = prezzoBiglietto * scontoMinorenne;
    prezzoBiglietto = prezzoBiglietto.toFixed(2); // limito i decimali a due nel prezzo finale
    alert('Il prezzo del biglietto è ' + prezzoBiglietto + ' € (è stato applicato lo sconto minorenni)');
} else if (etaPasseggero >= 65) {
    prezzoBiglietto = prezzoBiglietto * scontoSenior;
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    alert('Il prezzo del biglietto è ' + prezzoBiglietto + ' € (è stato applicato lo sconto over 65)');
} else {
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    alert('Il prezzo del biglietto è ' + prezzoBiglietto + ' € (nessuno sconto applicato)');
}