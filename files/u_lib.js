/*
	Função ch_nblur(mensagem) (CHECAR ONBLUR)
	@param id		:	id da tag;
	@param mensagem	:	mensagem do campo;
	
	Recebe uma mensagem como parâmetro.
	Se o valor da tag  que sai de foco
	for igual a '', atribui a mensagem
	informada para o valor do tag.
*/
function ch_nblur(id, mensagem){
	var tag = document.getElementById(id);
	if (tag.value == ''){tag.value = mensagem;};	
}

/*
	Função ch_nfocus(id,mensagem) (CHECAR ONFOCUS)
	@param id		:	id da div
	@param mensagem	:	mensagem a ser comparada;
	
	Recebe uma mensagem como parâmetro.
	Se o valor da tag que entra em focus
	for igual ao parâmetro informado, atribui
	'' para o valor do tag.
*/
function ch_nfocus(id,mensagem){
	var tag = document.getElementById(id);
	if (tag.value == mensagem){tag.value = '';};
}
/*
	Função oc_alerta(id)
	@param id	:	recebe o id da div;
	
	Oculta o alerta.
*/
function oc_alerta(id){
	document.getElementById(id).innerHTML = '';
}

/*
	Função ex_alerta(alert, divid, mensagem)
	param alert: tipo do alert.
	param divid: id da div.
	param mensagem: mensagem a ser exibida.
	Alerta para quando uma tag entrar em foco.
*/
function ex_alerta(alert, divid, mensagem){

	//prepara conteudo do alert
	var alertContent = '<div class="alert alert-'+ alert +'" role="alert">'+ mensagem +'</a></div>';
	
	//carrega o alert dentro da div
	document.getElementById(divid).innerHTML = alertContent;
}