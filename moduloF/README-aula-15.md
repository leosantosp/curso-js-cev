*- PERGUNTAS DAS AULAS ANTERIORES-* 

[1] Já treinou bastante o uso das estruturas de repetição while, do.. while e for?
Resposta: Sim

[2] Aprendeu como manipular objetos de formulários HTML usando JS?
Resposta: Sim

[3] Seria bom tornar seus códigos menores e mais simplificados?
Resposta: Sim


### AULA 15 - VARIÁVEIS COMPOSTAS

Até agora no curso, nós apenas entendemos como funcionam as `Variáveis Simples`, são variáveis que conseguem armazenar apenas um único valor. Geralmente, utilizando o comando 'var' e o 'let' para criação das mesmas.

As chamadas `Variáveis Compostas` são aquelas variáveis que conseguem armazenar vários valores dentro de uma mesma estrutura, são o que nós chamamos de Arrays. Embora confunda muitas vezes, `array` é o inglês para `vetor`.

Vamos pegar um exemplo de vagas de carro. 
Possuímos um local onde precisamos inserir carros nas vagas e para isso, precisamos criar suas variáveis. Então fazemos:

							var a0 = carro1;
							var a1 = carro2;
							var a2 = carro3;
							var a3 = carro4;
							var a4 = carro5;

Embora não esteja errado, é um desperdício muito grande de código, de algo que pertence a uma mesma estrutura. Em alguns estacionamentos que são muito extensos, geralmente, eles são divididos por blocos. E podemos utilizar essa metáfora de bloco para explicar as arrays. 

Seria como se escrevessemos em JavaScript que:

*-						var blocoA = [carro1, carro2, carro3, carro4, carro5];-*

Diferente de uma variável simples, essa nós colocamos os conchetes para determinação de que estamos tratando com uma array.

A estrutura de uma array funciona da seguinte forma, utilizando o exemplo acima é:

*-					var nomeDaArray = [valor1, valor2, valor3, valor4, valor5] -*

Os valores é você ou o usuário que insere dentro da array, mas ela possui uma coisa que não é mostrada que nós chamamos de `índices` ou `keys`. `Índices é o indicativo da posição na qual aquele valor se encontra dentro de uma array`. Pegando exemplo dos carros, fica da seguinte forma:

*-						var blocoA = [carro1, carro2, carro3, carro4, carro5]; -*
*-										0        1       2       3       4  -*

Os valores que coloquei abaixo de cada valor é o que a gente chama de índice e como já dito, `é a posição na qual aquele valor se encontra dentro de uma array. `

Diferente do que muitos pensam, um `índice` não começa seu valor em `1`. Começa em `0`, logo, uma `array com 10 valores`, não possui `índices de 1 a 10`, mas `sim, de 0 a 9`.

Caso queiramos saber apenas um valor que está dentro da array, podemos escrever da seguinte forma

NomeDaArray[3] -> Estamos pedindo o valor que ocupa a posição 3 na nossa array

Caso coloquemos assim:

NomeDaArray[3] = 6 -> Estamos pedindo ao sistema que insira o valor 6 na posição 3 do array. Caso, essa posição NÃO EXISTA, o sistema vai criá-la.

Alguns comandos dos quais nós temos que geralmente utilizamos em arrays são:

*- 	`nomeArray.push(7);`  -* -> O comando `push();` joga o valor que foi inserido entre parenteses para a última posição da array.

*- `nomeArray.length;` -* -> O comando `.length` devolve a quantidade de posições que a array possui. A sua conta é apartir da quantidade de valores que tem dentro da array, então se você inseriu lá 5 valores, ele vai retornar com o tamanho 5.

*- `nomeArray.sort()` -* -> O comando `sort()` pega todos os elementos de uma array e os coloca em ordem crescente. 

Se tivermos trabalhando com valores: 6,9,3,5. Ele vai colocá-los em ordem crescente (3,5,6,9)
Se tivermos trabalhando com caracteres: Leonardo, Adriana, Cristiano. Ele vai colocá-los em ordem alfabética (Adriana, Cristiano, Leonardo)

