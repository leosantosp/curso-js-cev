var btnCount = document.querySelector('input#countButton');

btnCount.addEventListener('click', contar);

function contar() {
	var inicio = document.getElementById('txtBegin');
	var fim = document.querySelector('input#txtEnd');
	var passo = document.querySelector('input#txtStep');
	var res = document.querySelector('div#res');


	if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
		alert('[ERRO] Dados estão faltando!');
	} else {
		res.innerHTML = 'Contando: '

		var i = Number(inicio.value);
		var f = Number(fim.value);
		var p = Number(passo.value);

		if (i < f) {
			//Contagem Crescente

			for(var count = i; count <= f; count += p){
				// O código falhou por conta do +=, este mais igual, toda vez que vai complementar algo que já teve escrita. Utilizamos este sinal, pois estamos concatenando. E feito de maneira errada, pois o código inteiro em erro.
				res.innerHTML += `${count} \u{1F449}`
			}

		} else {
			//Contagem regressiva
			for (var count = i; count >= f; count -= p) {
				res.innerHTML += `${count} \u{1F449}`
			}
		}
		res.innerHTML += `\u{1F3C1}`

		

		
	}
}