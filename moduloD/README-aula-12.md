*- PERGUNTAS DA AULA ANTERIOR -*

[1] Já sabe como usar a extensão Node Exec no VSCode?
	Resposta: Basta apertar o F8 que o comando é executado automaticamente

[2] Sabe criar uma condição em seu programa JS?
	Resposta: if(condicao) {bloco de código} else {bloco de codigo}

[3] Consegue difereciar condições simples e compostas?
	Resposta: Condições Simples são as que possuem apenas o if, ou seja, apenas uma resposta caso a condição seja cumprida. As condições compostas retornam valores caso a condição seja cumprida ou não, por isso, o if e o else

### Aula 12 - Condições (Parte 2)

Na aula passada, nós estudamos sobre dois tipos de condições, as `Condições Simples` e as `Condições Compostas` e é preciso entendê-las bem para explicar as `Condições Aninhadas`.

As `Condições Aninhadas` são condições compostas onde inserimos VÁRIAS OUTRAS condições e nessa condição, somos apresentados a outra linha de comando: o `else if`

				if (cond1) {
					bloco1
				} else {

					if (cond2) {
						bloco2
					} else {
						bloco3
					}

				}

No exemplo acima, temos uma condição dentro de outra e é isto que chamamos de condição aninhada, pois elas vão criando um ninho dentro da outra. 


Outro tipo de condição que nós temos é a `Condição Múltipla`, ela serve para valores fixos e como acabamos de falar ela é super indicada na programação quando queremos trabalhar com valores fixos. Ela tem a possibilidade não só do true ou false, ela pode possuir inúmeros valores de possibilidades. Ela não é aplicável pra todo tipo de situação, mas apenas em situações específicas. 

Para representação desta condição, utilizamos:
		
		 switch(expressao) {
			 case valor 1: 
				bloco-valor-1
			 break

			 case valor 2:
				bloco-valor-2
			 break

			 case valor 3:
				bloco-valor-3
			 break

			 default:
			 	bloco-default
			 break
		 }

O `default` é o resultado padrão, ou seja, caso nenhuma das condições acima sejam satisfeitas, exiba este resultado.

O `break` é o comando que precisa ser colocado ao final de cada `case`, isto se deve ao fato de que, caso não seja inserido, ele vai seguir executando todos os outros cases, mesmo não correspondendo.
