### AULA 05 - VARIÁVEIS E TIPOS PRIMITIVOS

Em JavaScript variável é representada pela palavra `var`, no entanto, no JS moderno, também podemos utilizar a palavra `let`

Exemplo:

var n1 = 5 -> No caso, o 'n1' vai receber o valor 5. Diferentemente do real significado do igual, quando falamos de linguagem de programação o sinal de '=' significa 'recebe'

O que também podemos fazer com as variáveis é colocá-las para receberem caracteres (frases/palavras)

Exemplo:

var s1 = "JavaScript" -> Aspas duplas
var s2 = 'JavaScript' -> Aspas simples
var s3 = `JavaScript` -> A crase

O nome das variáveis nós chamamos de 'IDENTIFICADORES' e eles precisam seguir algumas regras na hora de atribuirmos um nome para uma variável:

-> Podemos começar com letra, $(cifrão) ou _ (underline)
-> Não podem começar com números
-> É possível usar letras ou números
-> É possível usar acentos e símbolos (Ex: média, pi, @)
-> Não podem conter espaços
-> Não odem ser palavras reservadas (palavras reservadas são como a palavra var, que é uma palavra que já possui uma função reservada no JS)

//------- ABRINDO O TERMINAL NO VSCODE PARA UTILIZAR O NODEJS --------------//

Podemos utilizar o app do `Node.js` para abrir o terminal, mas vamos utilizar o terminal no VSCode utilizando ` CTRL + SHIFT + ' ` ou clicando em `Terminal -> New Terminal`

E para começar a utilizar o node no terminal, basta digitar `node`

Alguns exercícios realizados dentro do terminal:

var nome = "Leonardo"
var nome2 = "dos Santos"
var nome3 = "Pereira"

-> No primeiro caso acima, estamos definindo variáveis que contém seus respectivos nomes (nome, nome2, nome3) e o conteúdo que estará dentro dessas variáveis.

nome + " " + nome2 + " " + nome3

--> A representação acima serve para exibir os resultados chamando as variáveis e o sinal de + representa que juntaremos os caracteres, as aspas com o espaço representam o espaço que deve ter entre os nomes. O resultado sairá dessa forma: Leonardo dos Santos Pereira

//--------- SAINDO DO PROMPT ---------//

`.exit` -> Fecha o Node no terminal
`exit` -> Fecha o terminal
`CTRL + L` -> Limpa o terminal

//------------------- DICAS NA HORA DE CRIAR IDENTIFICADORES ----------------------//
-> Maiúsculas e minúsculas fazem diferença
-> Tente escolher nomes coerentes para as variáveis (exemplo: caso você queira que aquele campo seja preenchido com algum estado, coloque o nome da variável de 'estado')
-> Evite se tornar o programador alfabeto/contador (exemplo: programador que só coloca nome de variáveis A, B, C, a1, b2, c3)

//---------------------- TIPOS DE DADOS - DATA TYPES ----------------------//

`number` -> Qualquer valor, seja inteiro ou decimal
`string` -> Qualquer sentença que possua letras, traços, pontos e símbolos
`boolean` -> Valores que demarcam 'true' ou 'false'

Estes acima são os básicos, mas nós temos mais como:

• Number
- Infinity
- NaN (Not an Number)
• String
• Boolean
• Null
• Undefined
• Object
- Array
• Function

//-- IDENTIFICANDO O TIPO DE DADO NO JS --//

O JS fornece um comando para que você seja capaz de visualizar qual o tipo de dado correspondente aquela variável chamado `typeof` 

Exemplo:

var n = 200 -> Atribuimos um valor a uma variável
typeof n -> Avalia qual o tipo da variável
'number' -> Resultado retornado

