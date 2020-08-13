/*------------- ESTRUTURA DE REPETIÇÃO COM TESTE LÓGICO NO INÍCIO -------------- */

var contador = 1;

while (contador <= 6) {
	console.log(`Passo ${contador}`);
	contador++; // contador += 1
}


/*
	console.log('Tudo bem?');
	console.log('Tudo bem?');
	console.log('Tudo bem?');
	console.log('Tudo bem?');
	console.log('Tudo bem?');
	console.log('Tudo bem?');
*/


/*------------- ESTRUTURA DE REPETIÇÃO COM TESTE LÓGICO NO FINAL -------------- */

// Utilizando o mesmo exemplo acima:
var contador2 = 1

do {
	console.log(`Passo ${contador2}`);
	contador2++;
} while (contador2 <= 6)
