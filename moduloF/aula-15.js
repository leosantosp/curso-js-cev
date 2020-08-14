// EXPLICANDO ARRAY

var num = [5, 8, 4];

console.log(`Nosso vetor tem ${num.length} posições. A primeira posição do vetor é ${num[0]} e o array completo é ${num} e sua ordem crescente é ${num.sort()}`);

num[3] = 6;
// Ele cria dinamicamente, mesmo que você não possua o índice 3

num.push(7); //Joga um valor dinamicamente, para a última posição
num.length //Ele devolve o tamanho do objeto, no caso, o tamanho da array. Se ela possuir 5 valores dentro, ele vai devolver 5. 
num.sort() //Pega os elementos e coloca em ordem crescente. 


						// Aqui é um exemplo que podemos utilizar quando queremos montar uma estrutura de repetição e não se sabe ao certo a quantidade de vetores que a array possui. No caso abaixo, ele vai percorrer até o tamanho do vetor
for(var pos = 0; pos < num.length ; pos++){
	console.log(num[pos]);
}


// VETOR NA TELA

var valores = [8, 1, 7, 4, 2, 9]

for(var pos = 0; pos < valores.length; pos++) {
	console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

// FOR - IN - Otimizado para vetores e objetos
//Para cada posição na variável composta{ exiba os valores e seus índices}

			// for(indice in variavel){
			// 	variavel[indice];
			// }

			for(var pos in valores){
				console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
			}

// BUSCANDO VALORES DENTRO DE UM VETOR
//Onde está lá embaixo, o valor 7
	
	var posicao = valores.indexOf(2);

	console.log(`O valor 2 está na posição ${posicao}`);
	
	//Quando se está fazendo uma busca de valores dentro de uma array, caso o valor buscado não se encontre dentro daquela array, ele retornará -1. Para ficar mais 'bonitin' para o usuário, criamos uma condição composta onde caso retorne o valor -1, exiba a mensagem que o valor não foi encontrado.

	if(pos == -1){
		console.log('O valor não foi encontrado')
	} else {
		console.log(`O valor 2 está na posição ${posicao}`);
	}

	// Teste para verificação se o sort() também funcina em strings.
	var nomes = ['Leonardo', 'Adriana', 'Cristiano'];
	var nomeCres = nomes.sort();

	console.log(nomeCres);
