*- PERGUNTAS DA AULA ANTERIOR -*

[1] O que eu faço se quiser fazer uma determinada atividade acontecer várias vezes?
Resposta: Você deve utilizar as chamadas Estruturas de Repetição, onde é possível executar uma mesma linha de código repetidas vezes enquanto uma certa condição for atendida.

[2] Sabe diferenciar as estruturas de condição e as estruturas de repetição?
Resposta: As estruturas de condição, servem para probabilidades, elas possuem um objetivo, é possível que ajam divergências/possibilidades no caminho, mas devolvemos um resultado. As estruturas de repetição são quando queremos que uma expressão se repita caso a condição seja sempre atendida. 

[3] Consegue dizer a diferença entre as estruturas while e a do while?
Resposta: O `while` é uma estrutura de repetição com teste lógico no início e o `do while` é com teste lógico no final. Uma verifica primeiro a condição e dps executa o bloco de código e a outra executa primeiro o bloco de código e depois verifica a condição. A diferença notada seguindo pelo esquema de estrutura, é que no `do while`, pelo menos uma vez, o código será executado obrigatóriamente, mesmo que a verificação de condição não seja atendida.


### Aula 13 - Repetições (Parte 2)

Nas aulas anteriores, nós aprendemos:

`Estruturas de Condição Simples`
`Estruturas de Condição Composta`
`Estruturas de Repetição com Teste Lógico Inicial`
`Estruturas de Repetição com Teste Lógico Final`

E agora vamos ver as `Estrutura de Repetição com Variável de Controle`, em fluxograma representado por um hexágono irregular onde ocorrem três processos `Inicialização, Teste Lógico e Incremento`.

A primeira passagem, é a Inicialização e o Teste Lógico, caso seja verdadeiro, ele segue para o bloco de código e volta para o início da condição. A diferença para os outros é que neste, quando chega na etapa de realizar o looping, é realizado o `incremento` e após isso, a condição é verificada, se for verdadeira, ele executa o bloco de código, recebe um incremento e volta para o topo novamente. Quando ele devolver como falso, ele encerra o código ali mesmo. 

O comando escrito desta estrutura fica da seguinte forma:

				for (inicio; teste; incremento) {
					bloco de código;
				}

Para melhor entendimento, vamos pegar o exemplo passado na última aula onde exemplificamos, uma estrutura while

				var contador = 1;

				while (contador <= 10) {
					bloco de código
					contador++; // c += 1
				}

Agora vamos adaptar essa expressão utilizando o for, que vai ficar da seguinte maneira

for (var c = 1; c<=10; c++ ) {
	bloco de codigo
}

O que queremos explicar aqui é que tanto o código acima como o de baixo, tem a mesma funcionalidade, afinal, são `Estruturas de Repetição`. Ou seja, tanto faz maneira como prefira escrever. A qual você se sentir mais a vontade, use-a.