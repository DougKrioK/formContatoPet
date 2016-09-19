<?php 
	$NOME = $_POST['NOME_CLIENTE'];
	$EMAIL = $_POST['EMAIL_CLIENTE'];
	$VETERINARIO = $_POST['VETERINARIO'];
	$CONTEUDO = $_POST['CONTEUDO'];


	$dados = array(
		'success' => '1',
		'NOME'	=> $NOME,
		'EMAIL'	=> $EMAIL,
		'VETERINARIO'	=> $VETERINARIO,
		'CONTEUDO'	=> $CONTEUDO

	);
	echo( json_encode( $dados ) );
?>