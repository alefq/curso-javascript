// <![CDATA[
$(document).ready(function() {

	var mainForm = $('#form');
	mainForm.on('submit', submitControl(mainForm));
	//definimos el event manager para "onclick"
	var borrarmensajes = $('#borrarMensajes');
	borrarmensajes.on('click', function() {
		var spanError = getErrorElement('ERROR', 'error');
		$( '.errorDiv' ).append(spanError);
	});
	//definimos el event manager para "onclick"
	var mostrarMensajes = $('#mostrarMensajes');
	mostrarMensajes.on('click', function() {
		//Eliminamos todos los elementos 'span'
		$( '.errorDiv' ).find('span').remove();
	});

});
// end ready

var submitControl = function(mainForm) {
	//Utilizamos el jquery http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	removePreviousErrors(mainForm);
	mainForm.validate({
		rules : {
			email : {
				required : true,
				email : true
			},
			password : {
				required : true,
				minlength : 6, 
				equalTo: '#password2'
			},
			password2 : {
				required : true,
				minlength : 6,
				equalTo: '#password'
			}, 
			'terms[]': {
                required: true
            }
		}
	});
	// TODO
	// Verificar si ingresó el password, si no está vacío.
	// Si no se ingresó, crear un elemento de error
	// y agregar ese elemento a continuación del input para el password.
	// Lógica similar a la validación del mail.
	// Done: Con el jquerypluginvalidator

	// TODO
	// Verificar si el segundo password coincide con el primero.
	// Si no coincide crear un elemento de error y agregar ese elemento
	// a continuación del input para el segundo password.
	// Done: Con el jquerypluginvalidator


	// TODO
	// Verificar si se chequeó el acuerdo de términos
	// Si no se chequeó crear un elemento de errror y agregar
	// luego del checkbox
	// Done: Con el jquerypluginvalidator


	return true;
};

/**
 * TODO
 * Borrar los elementos de errores anteriores.
 * Hay que borrar todos los error elements que se insertaron.
 * Y también quitar la clase CSS de error de los inputs
 **/
var removePreviousErrors = function removePreviousErrors(form) {
	// Implementar acá
};

/**
 * TODO
 * Crear un span usando jquery.
 * Asignar como text del span el message pasado como.
 * Asignar como class el className pasado como parámetro.
 * Retornar el span.
 **/
var getErrorElement = function getErrorElement(message, className) {
	// Implementar acá
	var errorSpan = $('<span>');
	errorSpan.text(message);
	errorSpan.addClass(className);
	return errorSpan;
};
