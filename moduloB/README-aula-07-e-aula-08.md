### AULA 07 - OPERADORES (PARTE 1)

*- PERGUNTAS DO INÍCIO DO VÍDEO -*

[1] Como é possível guardar o valor digitado em um prompt() dentro de uma variável?
Resposta: Para isto basta digitar
   var variable = prompt('O que eu quero perguntar')
Isto fará com que a variável receba o resultado do prompt

[2] Como fazer com que um número digitado em um prompt() possa ser usado em cálculos?
Resposta: Todo valor recebido no prompt é interpretado como string, ou seja, uma sequência de caracteres ou um caractere apenas. Para ser interpretado como número e poder ser usado em cálculo é necessário realizar a conversão do valor de String para Number, existem 3 formas de fazer isto:
   Number(prompt('question'));
   Number.parseInt(prompt('question'));
   Number.parseFloat(prompt('question));

[3] Como transformar um texto todo para letras MAIÚSCULAS?
Resposta: Basta utilizar o comando variable.toUpperCase();

[4] Como mostrar um número formatado como um valor monetário?
Resposta: variable.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

-------------------------------- OPERADORES DO JS -------------------------------------

O JavaScript possui uma gama grande de operadores. Então vamos nos apegar aos principais:
• Aritméticos
• Atribuição
• Relacionais
• Lógicos
• Ternários

*-- ARITMÉTICOS --*

+ -> Soma                                               5 + 2 = 7
- -> Subtração                                          5 - 2 = 3
* -> Multiplicação                                      5 * 2 = 10
/ -> Divisão                                            5 / 2 = 2.5
% -> Resto de Divisão                                   5 / 2 = 1
** -> Exponenciação                                     5 ^ 2 = 25

 No JavaScript, o lance de divisão e multiplicação vem primeiro antes da adição e subtração. Caso queira fazer soma e subtração primeiro basta utilizar os parenteses, como no exemplo abaixo:

 (5 + 3) / 2 = 4

*- PRECEDÊNCIA NO JS -*
Precedência é basicamente a ordem de importância em um cálculo de acordo com o operador que você inseriu. Na lista abaixo, seguimos esta ordem. O primeiro é o que possui a maior importância na conta e conforme descendo a que tem menos importância. Ou seja, se tiver vários destes operadores é necessário idêntificá-los em que ordem eles serão executados

()
**
* ou / ou %
+ ou - 

*- ATRIBUIÇÃO SIMPLES -*

var a = 5 + 3
var b = a % 5
var c = 5 * b ** 2
var d = 10 - a / 2
var e = 6 * 2 / d
var f = b % e + 4 / e

*- AUTO ATRIBUIÇÃO -*

var n = 3
n = n + 4
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5

*- INCREMENTO -*

var x = 5
x = x + 1 -> Pode ser substituído por x += 1 ou -> x++ ou ++x
x = x - 1 -> Pode ser substituído por x -= 1 ou -> x-- ou --x

Embora na programação básica o posicionamento dos sinais de + e - não fazem diferença, mas na avançada faz diferença.

*- OPERADORES RELACIONAIS -*
Estes são operadores que fazem relação entre um elemento e outro. Por exemplo:

> -> maior que
< -> menor que
>= -> maior ou igual que
<= -> menor ou igual que
== -> igual
!= -> diferente (exclamação + igual)

Vale lembrar que colocando em situações de sistema, os operadores relacionais retornam valores booleanos
OBS: Quando tivermos um operador relacional e um operador aritmético em uma situação, primeiro realizamos os operadores aritméticos e depois os relacionais. 

*- IDENTIDADE -*

5 == 5 -> retorna 'true'
5 == '5' -> retorna 'true'

Por mais que um dado seja de um tipo diferente, eles possuem a mesma "grandeza" por isso, nessa situação é true. Embora o 5 seja string, ele ainda é 5. Para contornarmos isso, temos o sinal de idêntico (===) -> três sinais de igual

5 === '5' -> retorna 'false'

O valor de idêntico igualiza tanto o seu valor como o seu tipo de dado

*- OPERADORES LÓGICOS -*
Nos operadores lógicos temos três sinais

! -> negação
&& -> conjunção ou 'e'
|| -> disjunção ou 'ou'

*- NEGAÇÃO -*

!, este sinal é considerado como um operador unário, ou seja, ele só possui um valor operando, ou você coloca true ou false, ou algum valor que dê true ou false.

!true -> Um valor que não é true, é false
!false -> Um valor que não é false, é true

*- CONJUNÇÃO -*

&&, este operador é um operador binário, ou seja, possui dois operandos, nesta situação eu preciso que os dois operandos retornem true para mim, ele precisa ter a primeira e a segunda condição

Se por acaso, eu tenho duas condições em situações e o sinal de &&, ou seja, as duas condições precisam ser atendidas. Então mesmo que:

A primeira condição seja true && e a segunda seja true -> a condição é considerada true -> sucesso
A primeira condição seja true && e a segunda seja false -> as duas condições não foram satisfeitas, logo é igual a false
A primeira condição seja false && e a segunda seja true -> as duas condições não foram satisfeitas, logo é igual a false
false && false -> false (neste caso, nenhuma das condições foram atendidas, então é considerado false)

Eu preciso que as duas condições sejam satisfeitas.

*- DISJUNÇÃO -*

|| é o sinal dos dois pipes tem a função de 'ou', ou seja, se qualquer um dos valores for true, ela vai retornar como um resultado positivo

Então se eu tenho uma situação com duas condições e entre elas, eu tenho os dois pipes. Então caso:

A primeira condição seja 'true' e a segunda seja 'true' -> As duas condições foram satisfeitas, logo retornamos 'true'

A primeira condição seja 'true' e a segunda seja 'false' -> Uma das condições foi satisfeita, logo retornamos 'true'

A primeira condição seja 'false' e a segunda seja 'true' -> Uma das condições foi satisfeita, logo retornamos 'true'

A primeira condição seja 'false' e a segunda seja 'false' -> como nenhuma das condições foram satisfeitas, logo retornamos 'false'

*- ORDEM DE PRECEDÊNCIA DOS OPERADORES -*

1 - OPERADORES ARITMÉTICOS
() ** / + - 

2 - OPERADORES RELACIONAIS
< > >= <= == != ===

3 - OPERADORES LÓGICOS
! && ||

