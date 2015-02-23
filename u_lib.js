
/*
	Função ch_nblur(mensagem)
	Recebe uma mensagem como parâmetro.
	Se o valor da tag  que sai de foco
	for igual a '', atribui o parâmetro
	informado para o valor do tag.
*/
function ch_nblur(mensagem){
	if (this.value == ''){
		this.value = mensagem;
	}
}


/*
	Função ch_nfocus(mensagem)
	Recebe uma mensagem como parâmetro.
	Se o valor da tag que entra em focus
	for igual ao parâmetro informado, atribui
	'' para o valor do tag.
*/
function ch_nfocus(mensagem){
	if (this.value == mensagem){
		this.value = '';
	}
}