### Aula 10 - Eventos DOM

*- PERGUNTAS DO INÍCIO DE CADA VÍDEO -*

[1] - O que significa a sigla DOM?
Resposta: é um acrônimo para Document Object Model, é tudo aquilo que se encontra no documento daquele site e é todo passível de alterações, remoções e implementações em JS

[2] - Sabe montar a árvore DOM de um website simples?
Resposta: Sei

[3] - O que são os elementos Parent e os elementos Child em uma árvore DOM?
Resposta: Os elementos Child são aqueles que estão posicionados dentro de um outro elemento, este elemento que guarda outros elementos é conhecido como Parent. Então, se torna uma hierarquia, se este elemento está dentro de outro, ele é o child dele. E se dentro deste elemento, existe algum outro dentro dele, ele é parent daquele elemento. 

[4] - Quais são os cinco principais métodos de selecionar elementos DOM dentro do JS?
Resposta: por Marca, por ID, por Seletor, por Nome e por Classe

*- EVENTOS DOM -*

Evento é tudo aquilo que possa acontecer naquele elemento (exemplo: uma div). Várias coisas podem ocorrer com essa div e a mais comum são `eventos de mouse`. Exemplos:

• mouseenter -> Quando o mouse passa sob a div
• mousemove -> Quando o mouse se move por dentro da div
• mousedown -> Quando eu clico na div e seguro o botão
• mouseup -> Quando eu solto o clique que estava na div
• click -> Quando eu apenas clico e solto rapidamente na div
• mouseout -> Quando arrasta o mouse para fora da div

Existem muitos outros que você pode verificar em: https://developer.mozilla.org/pt-BR/docs/Web/Events

Mas lembre-se: nem todos os elementos são compatíveis com todos os eventos.

No entanto, antes de disparar u evento, para tratar um evento é necessário entendermos sobre funções

*- FUNÇÕES -*
Uma função em JavaScript é um conjunto de códigos que só vão ser executadas quando o evento ocorrer.
Para fazermos isto devemos deixar nossas linhas de código em um bloco, um bloco é delimitado por chaves { }

Este bloco, você precisa nomeá-lo como uma `function` e também dá-la um nome, por exemplo:

			function acao(){
				bloco de código;
			}

E dependendo da situação, dentro desses parenteses você pode colocar alguns `parâmetros`

Os eventos, eles podem ser executados tanto na parte do HTML como na parte do JavaScript

`VIA HTML`

<div id="area" onclick="clicar()"></div>

Além de disparar diretamente do html, da para eu diparar os eventos utilizando `listeners` que são `ouvidores`.

`VIA JAVASCRIPT`

var area = window.document.getElementById('area')

area.addEventListener('click', clicar)
NomeDaVariavel.AdicioneUmEvento('TipoDoEvento', NomeDaFunção)

function clicar() {
	area.innerText = 'Clicou'
}


Vamos a um outro exemplo:

Nosso HTML vai ficar assim:

<input type="number" name="txtn1" id="txtn1">
<input type="number" name="txtn2" id="txtn2">
<input type="button" value="Somar" id="adicao">
<div id="res">Resultado</div>

Nossa idéia é fazer um script onde eu recebo valores do usuário e realizo uma função e o devolvo ao usuário o resultado dessa função

No nosso script, vai ficar assim:

var adicao = document.getElementById('adicao')

adicao.getEventListener('click', somar) -> adicionando um evento para o elemento da variável adicao


function somar() {
	var tn1 = document.getElementById('txtn1')
	var tn2 = document.querySelector('input#txtn2')
	var res = document.getElementById('res')

	var n1 = Number(tn1.value) -> Converte para dados do tipo Number, o valor que foi preenchido na tn1 e tn2, por isso o .value

	var n2 = Number(tn2.value)
	var soma = n1+n2

	res.innerText = `A soma entre ${n1} e ${n2} é igual a ${soma}`
}

