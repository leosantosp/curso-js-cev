### AULA 06 - TRATAMENTO DE DADOS

*-PERGUNTAS DO INÍCIO DO VÍDEO-*

[1] O que é uma variável?
Resposta: Variável é um tipo de dado onde podemos armazenar valores dentro dela, sejam números, letras ou símbolos. Como o nome mesmo diz, este valor pode variar conforme o andamento do seu programa/sistema ou pode variar de acordo com o uso de cada usuário. No JS utilizamos a palavra 'var' ou 'let' para identificar uma variável

[2] Como declarar uma variável númerica inteira ou real usando JS?
Resposta: No JS para declararmos uma variável utilizamos a palavra 'var' ou 'let', diferentemente dos caracteres onde precisamos colocá-los entre aspas. Os números inteiros podem apenas serem inseridos normalmente. E diferente do costume, um valor real é utilizado o '.' em vez da vírgula.
Exemplo: 

var numInteiro = 7
var numReal = 7.5

[3] Quais são os tipos primitivos do JS?
Resposta: number, string, boolean, null, undefined, object e function

[4] Quais são os efeitos de inserir o valor null em uma variável?
Resposta: A variável o entende como um objeto

------------------------------------ TRATAMENTO DE DADOS ----------------------------------------------

Na aula passada, aprendemos a criar janelas como `alert`, `confirm` e `prompt`, mas os resultados em confirm e prompt precisam ser guardados em algum lugar. Para isto, utilizamos as variáveis. Vamos pegar o prompt como exemplo:

	window.prompt("What's your name?")

Digitando isto, sabemos que aparecerá uma janela com a pergunta e um campo para digitação, no entanto, fazendo isto, o resultado fica solto, sem armazenar em lugar algum. Vamos utilizar uma variável para guardar este resultado.

	var nome = window.prompt("What's your name?")
	window.alert('Hello '+nome+', will be welcome')

Com isto, estamos dizendo que o resultado do prompt será armazenado na variável 'nome'.
E o resultado será exibido em um alert junto com alguns caracteres. Este ato de juntar frases com variáveis ou variáveis com variáveis é chamado de `concatenação` ou o ato de `concatenar`.

Vamos pegar um novo exemplo, agora somando números. Siga abaixo:

var n1 = prompt('Digite um número: ')
var n2 = prompt('Digite outro número: ')
var soma = n1 + n2
alert("A soma dos valores é: "+soma)

Seguindo este exemplo você pensaria: "Se eu digito 4 no n1 e 2 no n2" logo se espera que a soma lhe retorne 6 não é? E se eu te contasse que vai retornar 42, você acreditaria? Tente aí!

Isto ocorre por um simples motivo: ele concatenou n1 com n2 e não somou eles

*-O SINAL DE ADIÇÃO(+) NO JAVASCRIPT-*

Para JavaScript o sinal de adição (+) tem duas funções:

[Concatenar] - Isto é utilizado para variáveis do tipo string+string ou string+number
[Adição] - Utilizado apenas em casos de variáveis do tipo number+number

Note que requisitos são necessários para entrar em uma das funções, isso porque o comando `prompt` retorna uma string e para realizar a soma é necessário converter de string p/ number

Para isto utilizamos algumas funções de conversão:

*- FUNÇÕES DE CONVERSÃO -*
Funções de conversão geralmente ocorrem pela forma como um resultado entra no sistema, podemos citar o exemplo do prompt, que mesmo digitando um número, ele acaba entendendo como uma string. Segue abaixo algums funções de conversão: 

`Number.parseInt(n)` -> Isto faz a conversão de um dado para um valor inteiro (Pode-se usar `parseInt(n)` se quiser)

`Number.parseFloat(n)` -> Isto faz a conversão de um dado para um valor flutuante/real (Pode usar `parseFloat(n)` se preferir)

`Number(n)` -> Neste caso, a conversão também ocorre! No entanto, o JavaScript se vira para interpretar se o valor é int ou float, isto ocorre mais em casos, onde o valor inserido pode ser ambrangente, os casos acima, são mais quando precisamos que o valor seja necessáriamente INTEIRO ou REAL

`String(n)` -> No 'n' inserimos a variável ou comando que queremos converter para String

`n.toString()` -> No 'n' inserimos a variável. 

*- NOTA -*

Lembrando para nunca concatenar direto entre os parênteses. Exemplo:

-> 'Eu estou aprendendo s' -> Errado
-> 'Eu estou aprendendo' + s -> Correto

Nas versões mais recentes do ECMAScript tornou-se possível inserir a variável dentro das aspas, no entanto, utilizando a crase e o placeholder. Segue o exemplo abaixo:

• `Eu estou aprendendo ${s}` -> A crase chamamos de template string. E o $ de placeholder

Também tem outras coisas que podemos utilizar em strings.

O atributo s.length -> Quantos caracteres a string tem
O método s.toUpperCase() -> Tudo para 'MAIÚSCULAS'
O método s.toLowerCase() -> Tudo para 'minúsculas'