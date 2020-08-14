### AULA 16 - FUNÇÕES

Durante nossa vida, temos varias situações nas quais temos que realizar determinadas tarefas, rotinas. Essas rotinas no JavaScript é o que nós chamamos de `Funções`.

Vamos pegar um exemplo:

Sua mãe `chama` você e te `dá uma quantia em dinheiro` e diz `Vá comprar leite na mercearia`. Qual sua função? Você `pega o dinheiro, vai até a mercearia, compra o leite e volta para casa` e `entrega o leite para sua mãe`.

Agora vamos dar nome aos bois.

Quando a sua mãe te chamou e passou a ordem é o que nós chamamos de `CHAMADA`. Ou seja, toda função precisa de uma chamada.

Você não pode simplesmente executar a chamada da sua mãe sem possuir o que sua mãe te deu e o que ela pediu, no caso, ela te deu o `dinheiro` e ela quer o `leite`, ou seja, é impossível fazer uma função sem receber seus `PARÂMETROS`.

O ato de ir na mercearia, pegar o leite, comprar e voltar para casa é o que nós chamamos de `AÇÃO`. É o que precisa ser feito para que o objetivo seja atendido.

O ato de entregar o leite para sua mãe, é o que chamamos de `RETORNO` ou seja, o resultado decorrente da chamada.

Ou seja, uma função para existir precisa de `CHAMADA`, `PARÂMETROS`, `AÇÃO` e `RETORNO`

Algumas explicações sobre função:

-> Uma funçao são ações executadas assim que são chamadas ou em decorrência de algum evento.
-> Uma função pode receber parâmetros e retornar um resultado.

Exemplificando em escrita:

					function ação (parametro) {
						return resultado -> ação
					}

acao(5); -> Isto é a chamada, é ela que vai disparar a execução da função acima.



function parOuimpar(n) {
	if(n % 2 == 0) {
		return 'par'
	} else {
		return 'impar'
	}
}

var res = parOuimpar(7);