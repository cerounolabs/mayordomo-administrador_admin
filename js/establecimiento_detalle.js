$(document).ready(function() {
	var codEst		= document.getElementById('tableEstablecimiento').className;	
	var codPage		= 'establecimiento_detalle.php?establecimiento=' + codEst + '&';
	var estJSON		= getEstablecimientoId(codEst);
	var secJSON		= getEstablecimientoId(codEst);
	var potJSON		= getEstablecimientoId(codEst);
	var lotJSON		= getEstablecimientoId(codEst);
	var perJSON		= getEstablecimientoId(codEst);
	var titEst		= document.getElementById('titleEstablecimiento');

	estJSON.forEach(element => {
		titEst.innerHTML = element.establecimiento_nombre + ' ' + element.establecimiento_codigo_sigor
	});
	
	$('#tableLoadEstablecimientoC').DataTable({
		scrollY			: "300px",
		scrollCollapse	: true,
		processing		: true,
		destroy			: true,
		searching		: false,
		paging			: false,
		lengthChange	: true,
		info			: false,
		order			: [[ 0, "asc" ]],
		orderCellsTop	: false,
		fixedHeader		: false,
		language		: {
			lengthMenu: "Mostrar _MENU_ registros por pagina",
			zeroRecords: "Nothing found - sorry",
			info: "Mostrando pagina _PAGE_ de _PAGES_",
			infoEmpty: "No hay registros disponibles.",
			infoFiltered: "(Filtrado de _MAX_ registros totales)",
			sZeroRecords: "No se encontraron resultados",
			sSearch: "buscar",
			oPaginate: {
				sFirst:    "Primero",
				sLast:     "Último",
				sNext:     "Siguiente",
				sPrevious: "Anterior"
			},
		},
		data            : estJSON,
		columnDefs		: [
			{ targets			: [0],	visible : true,	searchable : true,	orderData : [0, 0] },
			{ targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] },
			{ targets			: [2],	visible : true,	searchable : true,	orderData : [2, 0] },
			{ targets			: [3],	visible : true,	searchable : true,	orderData : [3, 0] },
			{ targets			: [4],	visible : true,	searchable : true,	orderData : [4, 0] },
			{ targets			: [5],	visible : true,	searchable : true,	orderData : [5, 0] },
			{ targets			: [6],	visible : true,	searchable : true,	orderData : [6, 0] },
			{ targets			: [7],	visible : true,	searchable : true,	orderData : [7, 0] }
		],
		columns			: [
			{ data				: 'establecimiento_orden', name : 'establecimiento_orden'},
			{ data				: 'tipo_estado_nombre', name : 'tipo_estado_nombre'},
			{ data				: 'tipo_establecimiento_nombre', name : 'tipo_establecimiento_nombre'},
			{ data				: 'tipo_finalidad_nombre', name : 'tipo_finalidad_nombre'},
			{ data				: 'distrito_nombre', name : 'distrito_nombre'},
			{ data				: 'establecimiento_codigo_senacsa', name : 'establecimiento_codigo_senacsa'},
			{ data				: 'establecimiento_codigo_sigor', name : 'establecimiento_codigo_sigor'},
			{ data				: 'establecimiento_codigo_sitrap', name : 'establecimiento_codigo_sitrap'},
			{ data				: 'establecimiento_total_hectarea', name : 'establecimiento_total_hectarea'},
			{ render			: 
				function (data, type, full, meta) {
					var btnDSP	= '<button onclick="setEstablecimiento('+ full.establecimiento_codigo +', 2, 2);" title="Ver" type="button" class="btn btn-primary btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eye"></i></button>';
					var btnUPD	= '<button onclick="setEstablecimiento('+ full.establecimiento_codigo +', 3, 2);" title="Editar" type="button" class="btn btn-success btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-edit"></i></button>';
					var btnDLT	= '<button onclick="setEstablecimiento('+ full.establecimiento_codigo +', 4, 2);" title="Eliminar" type="button" class="btn btn-danger btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eraser"></i></button>';
					var btnAUD	= '<button onclick="setEstablecimiento('+ full.establecimiento_codigo +', 5, 2);" title="Auditoria" type="button" class="btn btn-warning btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-user-secret"></i></button>';
					return (btnDSP + '&nbsp;' + btnUPD + '&nbsp;' + btnDLT + '&nbsp;' + btnAUD);
				}
			},
		]
	});
/*
	$('#tableLoadSeccionC').DataTable({
		scrollY			: "300px",
		scrollCollapse	: true,
		processing		: true,
		destroy			: true,
		searching		: false,
		paging			: false,
		lengthChange	: true,
		info			: false,
		language		: {
			lengthMenu: "Mostrar _MENU_ registros por pagina",
			zeroRecords: "Nothing found - sorry",
			info: "Mostrando pagina _PAGE_ de _PAGES_",
			infoEmpty: "No hay registros disponibles.",
			infoFiltered: "(Filtrado de _MAX_ registros totales)",
			sZeroRecords: "No se encontraron resultados",
			sSearch: "buscar",
			oPaginate: {
				sFirst:    "Primero",
				sLast:     "Último",
				sNext:     "Siguiente",
				sPrevious: "Anterior"
			},
		},
		data            : secJSON,
		columnDefs		: [
			{ targets			: [0],	visible : true,	searchable : true,	orderData : [0, 0] },
			{ targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] }
		],
		columns			: [
			{ render			: function (data, type, full, meta) {return '<button type="button" class="btn btn-primary" onclick="setSeccion('+ full.establecimiento_seccion_codigo +', 2);" data-toggle="modal" data-target="#modaldiv" title="Ver"><i class="ti-eye"></i></button>&nbsp;<button type="button" class="btn btn-success" onclick="setSeccion('+ full.establecimiento_seccion_codigo +', 3);" data-toggle="modal" data-target="#modaldiv" title="Editar"><i class="ti-pencil"></i></button>&nbsp;<button type="button" class="btn btn-danger" onclick="setSeccion('+ full.establecimiento_seccion_codigo +', 4);" data-toggle="modal" data-target="#modaldiv" title="Eliminar"><i class="ti-trash"></i></button>';}},
			{ data				: 'establecimiento_seccion_nombre', name : 'establecimiento_seccion_nombre'},
		]
	});
	
	$('#tableLoadPotreroC').DataTable({
		scrollY			: "300px",
		scrollCollapse	: true,
		processing		: true,
		destroy			: true,
		searching		: false,
		paging			: false,
		lengthChange	: true,
		info			: false,
		language		: {
			lengthMenu: "Mostrar _MENU_ registros por pagina",
			zeroRecords: "Nothing found - sorry",
			info: "Mostrando pagina _PAGE_ de _PAGES_",
			infoEmpty: "No hay registros disponibles.",
			infoFiltered: "(Filtrado de _MAX_ registros totales)",
			sZeroRecords: "No se encontraron resultados",
			sSearch: "buscar",
			oPaginate: {
				sFirst:    "Primero",
				sLast:     "Último",
				sNext:     "Siguiente",
				sPrevious: "Anterior"
			},
		},
		data            : potJSON,
		columnDefs		: [
			{ targets			: [0],	visible : true,	searchable : true,	orderData : [0, 0] },
			{ targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] },
			{ targets			: [2],	visible : true,	searchable : true,	orderData : [2, 0] },
			{ targets			: [3],	visible : true,	searchable : true,	orderData : [3, 0] },
			{ targets			: [4],	visible : true,	searchable : true,	orderData : [4, 0] },
			{ targets			: [5],	visible : false,searchable : false,	orderData : [5, 0] },
			{ targets			: [6],	visible : false,searchable : false,	orderData : [6, 0] }
		],
		columns			: [
			{ render			: function (data, type, full, meta) {return '<button type="button" class="btn btn-primary" onclick="setPotrero('+ full.establecimiento_potrero_codigo +', 2);" data-toggle="modal" data-target="#modaldiv" title="Ver"><i class="ti-eye"></i></button>&nbsp;<button type="button" class="btn btn-success" onclick="setPotrero('+ full.establecimiento_potrero_codigo +', 3);" data-toggle="modal" data-target="#modaldiv" title="Editar"><i class="ti-pencil"></i></button>&nbsp;<button type="button" class="btn btn-danger" onclick="setPotrero('+ full.establecimiento_potrero_codigo +', 4);" data-toggle="modal" data-target="#modaldiv" title="Eliminar"><i class="ti-trash"></i></button>';}},
			{ data				: 'establecimiento_seccion_nombre', name : 'establecimiento_seccion_nombre'},
			{ data				: 'establecimiento_potrero_nombre', name : 'establecimiento_potrero_nombre'},
			{ data				: 'tipo_pastura1_nombre', name : 'tipo_pastura1_nombre'},
			{ data				: 'tipo_pastura2_nombre', name : 'tipo_pastura2_nombre'},
			{ data				: 'establecimiento_potrero_hectarea', name : 'establecimiento_potrero_hectarea'},
			{ data				: 'establecimiento_potrero_capacidad', name : 'establecimiento_potrero_capacidad'},
		]
	});
	
	$('#tableLoadLoteC').DataTable({
		scrollY			: "300px",
		scrollCollapse	: true,
		processing		: true,
		destroy			: true,
		searching		: false,
		paging			: false,
		lengthChange	: true,
		info			: false,
		language		: {
			lengthMenu: "Mostrar _MENU_ registros por pagina",
			zeroRecords: "Nothing found - sorry",
			info: "Mostrando pagina _PAGE_ de _PAGES_",
			infoEmpty: "No hay registros disponibles.",
			infoFiltered: "(Filtrado de _MAX_ registros totales)",
			sZeroRecords: "No se encontraron resultados",
			sSearch: "buscar",
			oPaginate: {
				sFirst:    "Primero",
				sLast:     "Último",
				sNext:     "Siguiente",
				sPrevious: "Anterior"
			},
		},
		data            : lotJSON,
		columnDefs		: [
			{ targets			: [0],	visible : true,	searchable : true,	orderData : [0, 0] },
			{ targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] }
		],
		columns			: [
			{ render			: function (data, type, full, meta) {return '<button type="button" class="btn btn-primary" onclick="setLote('+ full.establecimiento_lote_codigo +', 2);" data-toggle="modal" data-target="#modaldiv" title="Ver"><i class="ti-eye"></i></button>&nbsp;<button type="button" class="btn btn-success" onclick="setLote('+ full.establecimiento_lote_codigo +', 3);" data-toggle="modal" data-target="#modaldiv" title="Editar"><i class="ti-pencil"></i></button>&nbsp;<button type="button" class="btn btn-danger" onclick="setLote('+ full.establecimiento_lote_codigo +', 4);" data-toggle="modal" data-target="#modaldiv" title="Eliminar"><i class="ti-trash"></i></button>';}},
			{ data				: 'establecimiento_lote_nombre', name : 'establecimiento_lote_nombre'},
		]
	});
	
	$('#tableLoadPersonaC').DataTable({
		scrollY			: "300px",
		scrollCollapse	: true,
		processing		: true,
		destroy			: true,
		searching		: false,
		paging			: false,
		lengthChange	: true,
		info			: false,
		language		: {
			lengthMenu: "Mostrar _MENU_ registros por pagina",
			zeroRecords: "Nothing found - sorry",
			info: "Mostrando pagina _PAGE_ de _PAGES_",
			infoEmpty: "No hay registros disponibles.",
			infoFiltered: "(Filtrado de _MAX_ registros totales)",
			sZeroRecords: "No se encontraron resultados",
			sSearch: "buscar",
			oPaginate: {
				sFirst:    "Primero",
				sLast:     "Último",
				sNext:     "Siguiente",
				sPrevious: "Anterior"
			},
		},
		data            : perJSON,
		columnDefs		: [
			{ targets			: [0],	visible : true,	searchable : true,	orderData : [0, 0] },
			{ targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] },
			{ targets			: [2],	visible : true,	searchable : true,	orderData : [2, 0] },
			{ targets			: [3],	visible : true, searchable : true,	orderData : [3, 0] },
			{ targets			: [4],	visible : true, searchable : true,	orderData : [4, 0] },
			{ targets			: [5],	visible : false,searchable : false,	orderData : [5, 0] },
			{ targets			: [6],	visible : false,searchable : false,	orderData : [6, 0] }
		],
		columns			: [
			{ render			: function (data, type, full, meta) {return '<button type="button" class="btn btn-primary" onclick="setPersona('+ full.establecimiento_persona_codigo +', 2);" data-toggle="modal" data-target="#modaldiv" title="Ver"><i class="ti-eye"></i></button>&nbsp;<button type="button" class="btn btn-success" onclick="setPersona('+ full.establecimiento_persona_codigo +', 3);" data-toggle="modal" data-target="#modaldiv" title="Editar"><i class="ti-pencil"></i></button>&nbsp;<button type="button" class="btn btn-danger" onclick="setPersona('+ full.establecimiento_persona_codigo +', 4);" data-toggle="modal" data-target="#modaldiv" title="Eliminar"><i class="ti-trash"></i></button>';}},
			{ data				: 'tipo_usuario_nombre', name : 'tipo_usuario_nombre'},
			{ data				: 'persona_completo', name : 'persona_completo'},
			{ data				: 'persona_codigo_sitrap', name : 'persona_codigo_sitrap'},
			{ data				: 'persona_codigo_sigor', name : 'persona_codigo_sigor'},
			{ data				: 'persona_telefono', name : 'persona_telefono'},
			{ data				: 'persona_email', name : 'persona_email'},
		]
	});
*/
});