$(document).ready(function() {
	$.getJSON( "model/getveterinarios.php", function( json, textStatus ) 
	{	
		//console.log(json.length);
		
		json.forEach(function(resultado)
		{			
			$("#VETERINARIO").append($("<option>").text(resultado.NOME).val(resultado.VALOR));
		})
	
	});

	function alerta(x){

	$('.alertas').hide();
		console.log(x);
		$('.'+x).show();
	}

    $('#form-cliente')
        .bootstrapValidator({
            message: 'Este campo não esta correto.',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
               
                
                NOME_CLIENTE:{
                    validators: {
                        notEmpty: {
                            message: 'Campo obrigatório'
                        }
                        
                    }
                },
                EMAIL_CLIENTE:{
                    validators: {
                        notEmpty: {
                            message: 'Campo obrigatório'
                        }
                        
                    }
                },
				VETERINARIO:{
                    validators: {
                        notEmpty: {
                            message: 'Campo obrigatório'
                        }
                        
                    }
                },
                CONTEUDO:{
                    validators: {
                        notEmpty: {
                            message: 'Campo obrigatório'
                        }
                        
                    }
                }
                
            }
        })
        .on('success.form.bv', function(e) {
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            //preparo o objeto
            /*var contatoJson = '';
			contatoJson.NOME_CLIENTE = $('#NOME_CLIENTE').val(); 
			contatoJson.EMAIL_CLIENTE = $('#EMAIL_CLIENTE').val(); 
			contatoJson.VETERINARIO = $('#VETERINARIO').val(); 
			contatoJson.CONTEUDO = $('#CONTEUDO').val(); 
			console.log(contatoJson);

			$('#form-cliente').serialize();*/

            // Use Ajax to submit form data
            $.post($form.attr('action'), $('#form-cliente').serialize(), function(result) {
            	//PRONTO, ENVIEI OS DADOS.

            	
				$('.alertas').show();
        		
				
            }, 'json');
        }
    );
});

