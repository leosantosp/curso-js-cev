var body = document.getElementsByTagName('body');

body.AddEventListener('onload', loading);

function loading() {
		
	var horario = document.getElementById('horario');
	var dayImg = document.querySelector('img#dayImg');
	var data = new Date();
	var hora = data.getHours();
	//var hora = 22;
	//var hora = 16;
	//var hora = 10;
	horario.innerHTML = `Agora são ${hora} horas.`;

	if (hora >= 0 && hora < 12) {
		//Bom Dia!
		dayImg.src= 'images/manha.jpeg';
		document.body.style.background = '#F6E9D9';

	} else if (hora >= 12 && hora < 18) {
		//Boa Tarde!
		dayImg.src= 'images/tarde.jpeg';
		document.body.style.background = '#DBA95B';

	} else {
		// Boa Noite!
		dayImg.src= 'images/noite.jpeg';
		document.body.style.background = '#144798';

	}

}
