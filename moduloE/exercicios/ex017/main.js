var tab = document.querySelector('input#txtNumber');
var btnGenerate = document.querySelector('input#btnGenerate');
var selTab = document.getElementById('seltab');

var res = document.querySelector('div#res');

btnGenerate.addEventListener('click', gerar);

function gerar() {
	var tabNumber = Number(tab.value);
	var c = 1;

	if(tabNumber == '') {
		alert('[ERRO] Você precisa digitar um número!');
	} else {
		selTab.innerHTML = '';
		for(c = 1; c <= 10; c++) {
			var item = document.createElement('option');
			item.text = `${tabNumber} x ${c} = ${tabNumber*c}`;
			selTab.appendChild(item);
		}
	}
}