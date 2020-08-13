// EXPLICANDO UMA CONDIÇÃO ANINHADA

var idade = 67

if (idade < 16) {
	console.log('Não vota!');
} else {
	// Aqui é um importante ponto a se frizar, no bloco if acima, nós colocamos idade < 16. No entanto, caso a condição acima não seja cumprida, fica subentendido que a idade n é menor que 16, mas pode ser igual ou maior, logo, o nosso texto idade >= 16 é desnecessário. Estou deixando para explicação.
	if (idade >= 16 && idade < 18) {
		console.log('Voto opcional!');
	} else {
		console.log('Vota')
	}
}

// Simplificando mais ainda o nosso código, podemos fazer da seguinte forma:

if (idade < 16) {
	console.log('Não vota!');
} else if (idade < 18) {
	console.log('Voto opcional');
} else {
	console.log('Voto obrigatório');
}

//Mas vamos pensar no caso do Brasil, onde o voto a partir de 65 anos volta a ser opcional. 

if (idade < 16) {
	console.log('Não vota!');
} else if (idade < 18 || idade > 65) {
	console.log('Voto opcional');
} else {
	console.log('Voto obrigatório');
}


//--------------------------------- EXEMPLO DE CONDIÇÃO ANINHADA

var agora = new Date(); // Esta linha, ele vai pegar a hora do sistema
var hora = agora.getHours(); // Esta linha, ele pega apenas as horas
console.log(`Agora são exatamente ${hora} horas.`);

if (hora < 12) {
	console.log('Bom dia!');
} else if (hora <= 18) {
	console.log('Boa tarde!');
} else {
	console.log('Boa noite!');
}