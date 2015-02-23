
/*
	Fun��o ch_nblur(mensagem)
	Recebe uma mensagem como par�metro.
	Se o valor da tag  que sai de foco
	for igual a '', atribui o par�metro
	informado para o valor do tag.
*/
function ch_nblur(mensagem){
	if (this.value == ''){
		this.value = mensagem;
	}
}


/*
	Fun��o ch_nfocus(mensagem)
	Recebe uma mensagem como par�metro.
	Se o valor da tag que entra em focus
	for igual ao par�metro informado, atribui
	'' para o valor do tag.
*/
function ch_nfocus(mensagem){
	if (this.value == mensagem){
		this.value = '';
	}
}