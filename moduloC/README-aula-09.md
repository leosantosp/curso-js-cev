### AULA 09 - Introdução ao DOM

*- PERGUNTAS DO INÍCIO DE CADA VÍDEO -*
[1] - Qual a diferença entre usar =, == e === em códigos escritos em JS?

Resposta: O = é a representação de uma atribuição, então o elemento descrito na esquerda deste igual irá receber o valor da direita. 
O == é a representação da igualdade, ele retornará false ou true, se os elementos descritos forem iguais, ele retornará true caso contrário, retornará false
O === é a representação da identidade, ele também retorna false e true, no entanto, diferente do ==, este operador se apega até mesmo se os tipos de dados são iguais. Ou seja, um 5 do tipo number e um '5' do tipo String não são idênticos, pois embora sejam do mesmo peso, eles não são do mesmo tipo de dado. 

[2] - Em uma mesma expressão, temos os operadores ||e &&. Quem eu resolvo primeiro?

Resposta: O que vier primeiro, os dois possuem o mesmo peso na precedência. 

[3] - Sabe usar o operador ternário para colocar um entre dois valores em uma variável?

Resposta: 		var x = 8.0
				var res = x % 2 == 0 ? 5 : 9
				res = 5


*- DOM - Document Object Model -*
DOM é um acrônimo para Document Object Model é uma vertente web do JS para o qual a linguagem foi criada popularmente conhecido como DOM. É uma poderosa ferramenta que tá dentro do seu navegador, um conjunto de objetos do JS no tratamento de componentes visuais.

*- A Árvore DOM -*
Agora que você sabe o significado da palavra DOM, você deve aprender a montar a sua Arvore DOM

A `Árvore DOM` ela começa da raiz e essa raiz a gente chama de 'window', tudo dentro do JS está dentro de um objeto chamado `window` que quer dizer janela.
Dentro do `window` eu tenho vários outros objetos, mas vamos citar três exemplos

`location` Que diz qual é a localização do seu site (qual é a url, página atual, qual foi a página anterior)

`document` é o documento atual, quem está dentro do document é o HTML e dentro do HTMl temos o head e o body

`history` que vai guardando de onde você veio e para onde você vai, isso facilita a navegação dentro do seu site. 

Cada um desses elementos eu posso selecioná-los para eu poder navegar dentro da minha árvore DOM e existem vários métodos para isso. Vamos apresentar 5 métodos:

- por Seletor
- por Marca
- por ID
- por Nome
- por Classe

*- SELEÇÃO POR MARCA -*

O método para seleção por marca é o getElementsByTagName()

Neste caso, eu posso selecionar os elementos por tag, esta tag é possível selecionar vários elementos, afinal, temos vários elementos com a mesma tag em um documento. 

Exemplo: 
var p1 = document.getElementsByTagName('p')

 Neste caso, eu vou selecionar todas as tags 'p' e atribuí-los a variável p1. No entanto, caso eu sinta necessidade de pegar uma tag em específico, eu posso especificar sua posição no documento através dos números, sendo 0 a primeira tag daquele tipo qeu aparece no documento e por aí vai. 

	var p1 = document.getElementsByTagName('p')[0]
	window.document.write('Está escrito assim: ' + p1.innerText);


	p1.style.color = 'red' -> Este comando pode mudar a cor de estilo de algum elemento, após alguns testes notei que é possível a inserção de cores por escrita, por hexadecimal e rgb

	var corpo = window.document.body -> O body é atribuído a variável 'corpo'

	corpo.style.background = 'black' -> Aqui já ficou entendido que para mexer no style em JS, basta colocar variavel.style.OQueQueroMudar

	var p2 = document.getElementsByTagName('p')[1]
		
	document.write(p2.innerText)
	document.write(p2.innerHTML)

 *- A DIFERENÇA ENTRE innerText e innerHTML -*
	O innerText, ele insere apenas o texto. Já o innerHTML insere não apenas o texto, mas as tags também. Então, por exemplo, se tivermos um link <a>, um <strong> ou até uma <img> dentro de um parágrafo, o innerText exibirá apenas o texto, enquanto o innerHTML irá exibir todo o conteúdo HTML daquele parágrafo.
		
	window.alert(p2.innerText); 
	No caso de um alerta, o melhor é utilizar apenas o innerText, já que caso utilizemos o HTML, ele irá exibir as tags em forma de texto no alerta

*- Seleção por ID -*
getElementById()

*- Seleção por Nome -*
getElementsByName()

*- Seleção por Classe -*
getElementsByClassName()

*- Seleção por Seletor -*
querySelector()
querySelectorAll()