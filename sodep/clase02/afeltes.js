//recibe el ID de la tabla donde va a pintar las personas
var manejadorTabla = function(id) {
	var that = {};
	var tableDom = $('#' + id);
	var lista = [];
	var agregar = function(p) {
		lista[lista.length] = p;
	};
	//esta es una funcion que es solamente interna
	var crearHTML = function() {
		var i = 0;
		var p;
		var html = "";
		html += "<tr><td>Nombre</td><td>Apellido</td></tr>";
		for ( i = 0; i < lista.length; i++) {
			p = lista[i];
			html += '<tr>';
			html += '<td>' + p.nombre + '</td>';
			html += '<td>' + p.apellido + '</td>';
			html += '</tr>';
		}
		return html;
	};
	that.pintar = function() {
		var html = crearHTML();
		tableDom.html(html);
	};

	//publica el metodo agregar
	that.agregar = agregar;

	return that;
};

var prepareTable = function() {
	var table1 = manejadorTabla('personas1Table');
	var table2 = manejadorTabla('personas2Table');
	table1.pintar();
	table2.pintar();
	var agregarBtn = $('#agregarBtn');
	agregarBtn.on('click', function() {
		var p = {};
		p = $(p);
		p.nombre = $('#nombreText').val();
		p.apellido = $('#apellidoText').val();
		table1.agregar(p);
		table1.pintar();
		table2.agregar(p);
		table2.pintar();
	});
};
