var agora = new Date();
var diaSem = agora.getDay();
console.log(diaSem);


// É importante interpretar aqui que o dia da semana é interpretado como valores, segue a tabela abaixo:
/*
	0 = Domingo
	1 = Segunda
	2 = Terça
	3 = Quarta
	4 = Quinta
	5 = Sexta
	6 = Sábado
*/


switch(diaSem) {
	case 0:
		console.log('Domingo');
		break;

	case 1:
		console.log('Segunda');
		break;

	case 2:
		console.log('Terça');
		break;

	case 3:
		console.log('Quarta');
		break;
		
	case 4:
		console.log('Quinta');
		break;
				
	case 5:
		console.log('Sexta');
		break;

	case 6:
		console.log('Sábado');
		break;

	default:
		console.log('[ERRO] Dia inválido!');
		break;
	
}

// Os cases de um switch só funcionam com valores inteiros e caracteres. O Switch é utilizado mais especificamente em situações mais pontuais. 

