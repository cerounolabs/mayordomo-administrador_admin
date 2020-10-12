$(document).ready(function() {
	var codigo	    = document.getElementById('tableCodigo').className;	
    var xDATA       = getOrdenTrabajoDetalle(codigo);

    var tableData   = $('#tableLoadAndrologia').DataTable(
        {
            processing	: true,
            destroy		: true,
            searching	: true,
            paging		: true,
            lengthChange: true,
            info		: true,
            orderCellsTop: true,
            fixedHeader	: true,
            language	: {
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
            data : xDATA,
            columnDefs	: [
                { targets			: [0],	visible : false,searchable : false, orderData : [0, 0] },
                { targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] },
                { targets			: [2],	visible : true,	searchable : true,	orderData : [2, 0] },
                { targets			: [3],	visible : true, searchable : true,	orderData : [3, 0] },
                { targets			: [4],	visible : true,	searchable : true,	orderData : [4, 0] },
                { targets			: [5],	visible : true, searchable : true,	orderData : [5, 0] },
                { targets			: [6],	visible : false,searchable : false,	orderData : [6, 0] },
                { targets			: [7],	visible : false,searchable : false,	orderData : [7, 0] },
                { targets			: [8],	visible : false,searchable : false,	orderData : [8, 0] },
                { targets			: [9],	visible : true, searchable : true,	orderData : [9, 0] },
                { targets			: [10],	visible : true,	searchable : true,	orderData : [10, 0] },
                { targets			: [11],	visible : true,	searchable : true,	orderData : [11, 0] },
                { targets			: [12],	visible : true,	searchable : true,	orderData : [12, 0] },
                { targets			: [13],	visible : true, searchable : true,	orderData : [13, 0] },
                { targets			: [14],	visible : true,	searchable : true,	orderData : [14, 0] },
            ],
            columns		: [
                { data				: 'orden_trabajo_andrologia_codigo', name : 'orden_trabajo_andrologia_codigo'},
                { render			: 
                    function (data, type, full, meta) {
                        var btnCOM  = '';
                        btnCOM = btnCOM + '<span style="font-weight:bold;">ELECTR.  : </span>' + full.animal_codigo_electronico +'<br>';
                        btnCOM = btnCOM + '<span style="font-weight:bold;">RP       : </span>' + full.animal_codigo_rp + '<br>';
                        btnCOM = btnCOM + '<span style="font-weight:bold;">HBP      : </span>' + full.animal_codigo_hbp + '<br>';
                        btnCOM = btnCOM + '<span style="font-weight:bold;">SITRAP   : </span>' + full.animal_codigo_sitrap + '<br>';
                        btnCOM = btnCOM + '<span style="font-weight:bold;">INTERNO  : </span>' + full.animal_codigo_interno + '<br>';
                        btnCOM = btnCOM + '<span style="font-weight:bold;">NOMBRE   : </span>' + full.animal_codigo_nombre + '<br>';

                        return btnCOM;
                    }
                },
                { data				: 'tipo_estado_nombre', name : 'tipo_estado_nombre'},
                { data				: 'tipo_motivo_nombre', name : 'tipo_motivo_nombre'},
                { data				: 'tipo_escroto_nombre', name : 'tipo_escroto_nombre'},
                { data				: 'tipo_consistencia_nombre', name : 'tipo_consistencia_nombre'},
                { data				: 'tipo_resultado_corral_nombre', name : 'tipo_resultado_corral_nombre'},
                { data				: 'tipo_resultado_laboratorio_nombre', name : 'tipo_resultado_laboratorio_nombre'},
                { data				: 'orden_trabajo_andrologia_fecha_carga', name : 'orden_trabajo_andrologia_fecha_carga'},
                { data				: 'orden_trabajo_andrologia_peso', name : 'orden_trabajo_andrologia_peso'},
                { data				: 'orden_trabajo_andrologia_circunferencia_escrotal', name : 'orden_trabajo_andrologia_circunferencia_escrotal'},
                { data				: 'orden_trabajo_andrologia_cola', name : 'orden_trabajo_andrologia_cola'},
                { data				: 'orden_trabajo_andrologia_vesicula', name : 'orden_trabajo_andrologia_vesicula'},
                { data				: 'orden_trabajo_andrologia_veterinario_comentario', name : 'orden_trabajo_andrologia_veterinario_comentario'},
                { render			: 
                    function (data, type, full, meta) {
                        var btnCOM  = '';
                        var btnDSP	= '<button onclick="" title="Ver" type="button" class="btn btn-primary btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eye"></i></button>';
                        var btnUPD	= '<button onclick="" title="Editar" type="button" class="btn btn-success btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-edit"></i></button>';
                        var btnDLT	= '<button onclick="" title="Eliminar" type="button" class="btn btn-danger btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eraser"></i></button>';
                        var btnAUD	= '<button onclick="" title="Auditoria" type="button" class="btn btn-warning btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-user-secret"></i></button>';
                        
                        btnCOM = btnDSP + '&nbsp;' + btnUPD + btnDLT + '&nbsp;' + btnAUD;
                        return btnCOM;
                    }
                },
            ]
        }
    );

    $('.form-group').change(function() {
        var codigo	    = document.getElementById('tableCodigo').className;
        var xDATA       = getOrdenTrabajoDetalle(codigo);
        
        tableData.clear().rows.add(xDATA).draw();
    });
});