*- PERGUNTAS DA AULA ANTERIOR -*

[1] Cite três eventos que podem acontecer com elementos DOM de um site?
Resposta: mouseenter, click, mousedown, mouseup, mouseover

[2] O que é uma função? Como criar funções em JS?
Resposta: Função é um bloco de código que é executado quando determinada ação é executada, essa ação ativa a função e a mesma executa o bloco de código que está dentro dele.

[3] Sabe como pegar os valores de caixas de texto e fazer cálculos com eles?
Resposta: A melhor forma é atribuindo ID's para os inputs e adicionando-os em variáveis no JS apartir disso, depois realizamos a conversão deste valor de String para Number e realizamos os cálculos normalmente. 

### Aula 11 - Condições (Parte 1)

Condições em linguagem de programação, nada mais são, do que situações possíveis para o usuário que vão despertar resultados ou ações diferentes. Diferente de uma sequência, onde tudo deve ocorrer dentro daquele escopo, as condições tratam mais como 'possíveis situações'.

Um exemplo que podemos citar é uma situação onde temos que retornar para um aluno que de acordo com a média de suas notas, se ele foi aprovado ou reprovado. O resultado final não muda (precisamos retornar uma resposta) mas existem duas condições (ele pode ser aprovado ou reprovado), caso ele tire uma nota maior que 6, ele está aprovado e abaixo disso, ele está reprovado. Estas duas possibilidades é onde entram as 'condições' de uma linguagem de programação, ela de acordo com o resultado obtido, ela vai interpretar em qual condição este resultado se encaixa e retornar uma resposta de acordo. 

Uma forma de exemplificar este exemplo é da seguinte forma. 

									Se (nota-do-aluno >= 6) {
										você foi aprovado
									} caso contrário {
										você foi reprovado
									}

Situações como esta em um sistema/programa, é o que chamamos de `Desvio Condicional`, basicamente, TODAS as linguagens que você conhecer provavelmente terá essas situações. No JS essas condições são representadas da seguinte forma:

									if (condicao) {
										true
									} else {
										false
									}

Existem vários tipos de condição, mas nesta aula, vamos nos apegar a dois tipos apenas:

`Condição Simples` são condições onde temos apenas o retorno de uma resposta caso aquela condição seja correspondida. Diferente dos exemplos acima, não temos uma resposta diferente caso não cumpra as condições. 
		if (condicao) {
			true
		}

`Condição Composta` são condições onde temos dois tipos de resposta caso ele cumpra a condição e uma resposta negativa caso não cumpra.
		if (condicao) {
			true
		} else {
			false
		}

