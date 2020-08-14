var numero = document.querySelector('input#txtNumber');
var lista = document.querySelector('select#txtSel');
var res = document.querySelector('div#res');
var addButton = document.querySelector('input#add');
var finalizar = document.querySelector('input#finalizar');

addButton.addEventListener('click', adicionar);
finalizar.addEventListener('click', finish);

var valores = []

function isNumero(n) {
	if(Number(n) >= 1 && Number(n) <= 100) {
		return true;
	} else {
		return false;
	}
}

function inLista(n, l) {
	if(l.indexOf(Number(n)) != -1) {
		return true;
	} else {
		return false;
	}
}


function adicionar() {
	if(isNumero(numero.value) && !inLista(numero.value, valores)) {
		valores.push(Number(numero.value));
		var item = document.createElement('option');
		item.text = `O valor ${numero.value} foi adicionado.`;
		lista.appendChild(item);

	} else {
		window.alert('Valor inválido ou já encontrado na lista!');
	}

	numero.value = '';
	numero.focus();
}

function finish() {
	if(valores.length == 0) {
		window.alert('Adicione valores antes de finalizar')
	} else {
		var tot = valores.length;
		
		res.innerHTML = '';
		res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`;
		var maior = valores[0];
		var menor = valores[0];
		var soma = 0;
		var media = 0;

		for (var pos in valores) {
			soma += valores[pos];

			if(valores[pos] > maior) {
				maior = valores[pos]
			} if (valores[pos] < menor) {
				menor = valores[pos];
			}

		}

		media = soma / tot;

		res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
		res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
		res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`;
		res.innerHTML += `<p>A média de todos os valores temos ${media}</p>`;

	}
}



// function adicionar() {
// 	var vetor = [numero.value];

// 	var item = document.createElement('option');
// 	item.text = `Valor ${vetor} adicionado.`;

// 	seletor.appendChild(item);

// 	return vetor;
// }

// var getVetor = vetor;


// function finish() {
	
// 	res.innerHTML += `<p>Ao todo, temos ${getVetor.length} números cadastrados.</p>`;
// 	getVetor.sort();
// 	res.innerHTML += `<p>O maior valor informado foi ${getVetor[getVetor.length]}</p>`;
// 	res.innerHTML += `<p>O menor valor informado foi ${getVetor[0]}</p>`;

// 	var soma = 0;
// 	var teste = [];

// 	for(var i = 0; i < getVetor.length; i++) {
// 		teste[i] = getVetor[i].value;
// 		soma += teste[i]
// 	}

// 	var media = soma / getVetor.length;

// 	res.innerHTML += `<p>A media dos valores digitados é: ${media}</p>`

// }