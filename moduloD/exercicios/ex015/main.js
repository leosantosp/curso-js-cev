var result = document.querySelector('div#res');

var verifyButton = document.getElementById('verifyButton'); // Botão Verificar

var txtYear = document.querySelector('input#txtyear'); // Input do Ano de Nascimento

verifyButton.addEventListener('click', verify); // Adicionando um evento no botão verificar

var fsex = document.getElementsByName('radsex'); //Input radio para o sexo


function verify() {
	var date = new Date();
	var year = date.getFullYear();

	// Verificação se o ano está como 0 ou o ano do input é maior que o ano do sistema
	if(txtYear.value.length == 0 || txtYear.value > year) {
		window.alert('[ERRO] Verifique os dados e tente novamente!');
	} else {
		var idade = year - Number(txtYear.value); // Calculando idade pegando o ano e subtraindo o valor vindo do input do txtYear

		var gender = ''; // Aqui setamos para o gender uma caixa vazia para depois dependendo das condições, ela ser preenchida com a condição que foi atendida

		// Este comando createElement, cria uma tag dentro do documento HTML da página com a tag que foi especificada, no caso uma <img>
		var img = document.createElement('img');

		//setAttribute são os atributos de uma tag no caso abaixo, é como se estivesse dizendo para adicionar na tag <img> uma <img id="foto">
		img.setAttribute('id', 'foto');

		if (fsex[0].checked) {
			gender = 'Homem';

			if(idade >= 0 && idade < 10) {
				//Criança
				img.setAttribute('src', 'images/bebe-m.png');
			} else if (idade < 21) {
				//Jovem
				img.setAttribute('src', 'images/jovem-m.png');
			} else if (idade < 50) {
				//Adulto
				img.setAttribute('src', 'images/adulto-m.png');
			} else {
				//Idoso
				img.setAttribute('src', 'images/idoso-m.png');
			}

		} else if (fsex[1].checked) {
			gender = 'Mulher';

			if(idade >= 0 && idade < 10) {
				//Criança
				img.setAttribute('src', 'images/bebe-f.png');
			} else if (idade < 21) {
				//Jovem
				img.setAttribute('src', 'images/jovem-f.png');
			} else if (idade < 50) {
				//Adulto
				img.setAttribute('src', 'images/adulto-f.png');
			} else {
				//Idoso
				img.setAttribute('src', 'images/idoso-f.png');
			}
		}

		result.style.textAlign = 'center';
		result.innerHTML = `Detectamos ${gender} com ${idade} anos.`;
		result.appendChild(img); //Este comando diz que vai adicionar um elemento e esse elemento é nossa variável img
	}
}


/* ---------------------------------- TAGS PARA ADICIONAR CLASSES ------------------------------------ */´

		div.classList.add('');
		div.classList.toggle('');
		div.classList.remove('');
		div.classList.item('');
		div.classList.contains('');

		// div é uma referência de objeto para um elemento <div> com class = "foo bar"
		div.classList.remove("foo");
		div.classList.add("anotherclass");

		// Se estiver visível, remova-o, caso contrário, adicione-o
		div.classList.toggle("visible");

		// adicionar/remover, dependendo do teste condicional, i menos de 10
		div.classList.toggle("visible", i < 10 );

		alert(div.classList.contains("foo"));

		// adicionar ou remover várias classes
		div.classList.add("foo","bar");
		div.classList.remove("foo", "bar");