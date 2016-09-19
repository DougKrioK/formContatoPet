<?php 
	//pegaria do banco, e responderia em JSON
	//consulta e perrcorre o result, gerando um array,  pulei esta parte para ganhar tempo.
	$dados[] = array(
			'NOME' => 'Veterinário A',
			'VALOR' => '1'
	);
	

	echo( json_encode( $dados ) );
?>