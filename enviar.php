<?php
//Variaveis

$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$msg = $_POST['msg'];
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');

// -------------

// Compo E-mail

	
	$arquivo = '
	<html>
	
	<style type="text/css">
	#msg-bd{
	margin:0px;
	padding: 5% 10%;
	font-family:Verdane;
	font-size:12px;
	color: #666666;
	}
	
	p{font-size: 14px;}
	h2{color: #E63337;}	
	</style>
	
	<div id="msg-bd">
	<p> '.$nome.' enviou uma mensagem </p>
	<p> Assunto: $assunto </p>
	<p>
		Ele diz: <br/>
		<p>'.$msg.'</p>
	</p>
	<h2> Responda para '.$email.' </h2>
	<p> Este e-mail foi enviado em <b>'.$data_envio.'</b> &agrave;s <b>'.$hora_envio.'</b></p>
	<div>
</html>';

// -------------------------

//enviar
	
	// emails para quem será enviado o formulário
	$destino = 'uillandr@gmail.com';
	$assuntoEmail = $nome.' entrou em contato pelo site.';

	// É necessário indicar que o formato do e-mail é html
	$headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= "From: $nome <$email>";
	//$headers .= "Bcc: $EmailPadrao\r\n";
	
	$enviaremail = mail($destino, $assuntoEmail, $arquivo, $headers);
	if($enviaremail){
	$mgm = "Mensagem enviada com êxito! Em breve retornaremos o contato.";
	//echo " <meta http-equiv='refresh' content='3;URL=./Contato.html'>";
	
	} else {
	$mgm = "Não conseguimos enviar sua mensagem. Tente novamente mais tarde ou tente outro canal de comunicação.";
	}
?>
<!--<html><body><script>if(confirm("<?php echo $mgm.'\nClique em OK ou CANCEL para retornar para a página anterior.' ;?>")== true){window.history.back()}else{window.history.back()}</script></body></html>-->
<html><body><script>alert("<?php echo $mgm.'\nClique em OK retornar para a página anterior.' ;?>");window.history.back();</script></body></html>