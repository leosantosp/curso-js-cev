// FUNÇÃO QUE RETORNA PAR OU IMPAR

function parOuimpar(n) {
	if(n % 2 == 0) {
		return 'Par'
	} else {
		return 'Ímpar'
	}
}
//Podemos exibir o resultado assim
var res = parOuimpar(2);
console.log(res);

//Ou assim
console.log(parOuimpar(223));



//-------------------------------------------

// Executando soma. No exemplo abaixo, vamos fazer um sistema que retorna a soma de dois valores que serão passados como parâmetros


function soma(n1=0, n2=0) {
	return n1 + n2;
}

// Obviamente, colocaremos sempre dois valores para serem cálculados porque nós sabemos como o sistema funciona, no entanto, se ocorrer ao acaso de ser passado apenas um valor como parâmetro?

console.log(soma(2));

// Por isso, nós podemos passar valores como padrões, ou seja, caso não seja passado algum valor como parâmetro, ele considera o valor padrão da função.


//-------------------------------------------------------
//Outro exemplo de funções - Atribuindo função a uma variável 

var v = function(x) {
	return x*2;
}

console.log(v(5));

//--------------------------------------------------------------------------------------------

// FATORIAL

function fatorial(n) {
	var fat = 1;

	for(var c = n; c > 1; c--) {
		fat *= c;
	}

	return fat;
}

console.log(fatorial(5));

//--------------------------------------------------------------------------------------------

// EXEMPLO DE UMA FUNÇÃO SENDO CHAMADA DENTRO DELA MESMA, QUE CHAMAMOS DE RECURSIVIDADE

function fatorial2(n) {
	if (n == 1) {
		return 1;
	} else {
		return n * fatorial2(n-1);
	}
}

console.log(fatorial2(5));