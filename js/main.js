// definisco le variabili e il loro inserimento tramite prompt
const kmPercorso = prompt('Quanti km vuoi percorrere?');
const etaPasseggero = prompt('Quanti hanni hai?');
const prezzoAlKm = 0.21;
const scontoMinorenne = 0.8;
const scontoSenior = 0.6;
let prezzoBiglietto;

// calcolo prezzo
if (etaPasseggero < 18) {
    prezzoBiglietto = kmPercorso * prezzoAlKm * scontoMinorenne;
    alert('Il prezzo del biglietto è ' + prezzoBiglietto);
}

// debug
console.log(kmPercorso);
console.log(etaPasseggero);
console.log(prezzoAlKm);

/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */