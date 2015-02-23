
/*
	Função ch_nblur(mensagem) (CHECAR ONBLUR)
	Recebe uma mensagem como parâmetro.
	Se o valor da tag  que sai de foco
	for igual a '', atribui o parâmetro
	informado para o valor do tag.
*/
function ch_nblur(tag, mensagem){
	if (tag.value == ''){tag.value = mensagem;}
}


/*
	Função ch_nfocus(mensagem) (CHECAR ONFOCUS)
	Recebe uma mensagem como parâmetro.
	Se o valor da tag que entra em focus
	for igual ao parâmetro informado, atribui
	'' para o valor do tag.
*/
function ch_nfocus(tag,mensagem){
	if (tag.value == mensagem){tag.value = '';}
}
/*
	Função a_nblur(id)
	Alerta 
*/

//Exibe uma mensagem na divid msg
function msg(){document.getElementById("msg").innerHTML = "Conexão feita com sucesso!";}

function a_nblur(){}

/*
	Função a_nfocus(alert, divid, mensagem)
	param alert: tipo do alert.
	param divid: id da div.
	param mensagem: mensagem a ser exibida.
	Alerta para quando uma tag entrar em foco.
*/
function a_nfocus(alert, divid, mensagem){

	//prepara conteudo do alert
	var alertContent = '<div class="alert alert-' +alert+'" role="alert">'+mensagem+'</a></div>';
	
	//carrega o alert dentro da div
	document.getDocumentById(divid).innerHTML = alertContent;
}