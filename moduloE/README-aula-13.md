*- PERGUNTAS DA AULA ANTERIOR -*

[1] Sabe mudar a cor de fundo de um site dinamicamente, usando JS?
Resposta: Sim, basta adicionar o elemento a uma variável e dps atribuir as expressões: variable.style.background = '#FFF';

[2] Consegue inserir uma imagem dentro do seu site sem ter a tag <img/> previamente criada?
Resposta: Para isto, criamos uma variável e adicionamos a função createElement(); Ficando da seguinte forma:

var img = document.createElement('img');

[3] Já treinou bastante o uso de condições simples, compostas, aninhadas e múltiplas?
Resposta: Condições Simples (if). Condições Compostas (if e else). Condições Aninhadas (if elseif else). Condições Múltiplas (switch case)


### Aula 13 - Repetições (Parte 1)

Finalmente, chegamos nas aulas de repetições, também conhecidas como laços ou iterações. Na nossa vida, existem vários momentos que fazemos repetições, por exemplo, Comer uma Pizza. 

function comerPizza(){

	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();

}

Note que o processo de comer uma pizza é um processo repetitivo, você come uma fatia, outra e outra até a pizza acabar. Com a programação também é assim, existe um objetivo e temos que concluí-lo mesmo que tenha repetições de um mesmo processo no caminho. Nossa tarefa na hora de programar é sair do ponto A ao ponto B e para isso existem várias formas que chamamos de Estruturas de Controle

`Sequencias` -> Um passo depois do outro em sequência para concluir o objetivo

`Condições` -> O objetivo não muda, no entanto, é possível que haja divergências no caminho, possibilidades diferentes, verdadeiro ou falso, mas que também, concluem o objetivo.

`Repetições` ou `Laços` -> Ele começa exatamente como uma condição, ele vai testar uma expressão. Se essa expressão for verdadeira, ele executa um bloco de código e após isso, em vez de concluir o objetivo, ele vai voltar lá no início onde a expressão foi testada, formando um `laço`, daí vem o nome. Enquanto esta condição for verdadeira, ele vai voltar ao início. Se ela for falsa, o laço é quebrado e o programa segue seu fluxo normal. 

E como escrevemos essa expressão? Um exemplo:
		
		//Enquanto
		while (condicao) {
			bloco de código
		} 

Vamos voltar para o nosso exemplo de comerPizza() para explicar melhor, nele, copiamos e colamos oito vezes um comerFatia(), mas para mostrarmos a utilidade desse exemplo, digamos que é possível que hajam pizzas de 10 pedaços, 16 pedaços ou até mesmo 20 pedaços. Se executássemos o código acima, ficariam fatias sobrando... E é aí que entra o while (enquanto)

function comerPizza(){
	while(temFatia()) {
		comerFatia();
	};
}

Neste caso, o que vai acontecer, enquanto tivermos fatias na pizza, ela será retirada. Quando não houver mais, ela sai desse laço e a função se encerra.

Sendo assim, essa estrutura acima `while` é classificada como `Estrutura de Repetição com Teste Lógico no Início`.

---------------------------------------------------------------------

Eu também posso, executar de uma forma diferente da qual o while opera, se o while opera fazendo primeiro o teste e executa o bloco de código, eu posso fazer uma repetição que executa primeiro o código e depois faz a verificação. Essa, nós classificamos como `Estrutura de Repetição com Teste Lógico no Final`.

A estrutura deste segundo, funciona da seguinte forma:

			do {
				bloco de código
			} while(condicao)

Ou seja, enquanto essa condição for verdadeira, execute o bloco. Foi falsa, ela sai do bloco. 