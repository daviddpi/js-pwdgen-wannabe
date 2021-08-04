var nome = prompt("inserisci il tuo nome:");
var cognome = prompt("inserisci il tuo cognome:");
var colorePreferito = prompt("inserisci il tuo colore preferito:");

document.getElementById("nome").innerHTML = nome;
document.getElementById("cognome").innerHTML = cognome;
document.getElementById("colore-preferito").innerHTML = colorePreferito;

var password = nome + cognome + colorePreferito + 21; 

document.getElementById("password").innerHTML = password;
