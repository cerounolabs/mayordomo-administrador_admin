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
                        var codPag  = "'"+'ordentrabajo_detalle.php?codigo='+ full.tipo_orden_trabajo_parametro +'&ot='+ full.orden_trabajo_codigo+"'";
                        var btnDSP	= '<button onclick="setOrdenTrabajoDetalle('+ full.tipo_orden_trabajo_parametro + ', '+ full.orden_trabajo_codigo +', '+full.orden_trabajo_andrologia_codigo +', 2);" title="Ver" type="button" class="btn btn-primary btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eye"></i></button>';
                        var btnUPD	= '<button onclick="setOrdenTrabajoDetalle('+ full.tipo_orden_trabajo_parametro + ', '+ full.orden_trabajo_codigo +', '+full.orden_trabajo_andrologia_codigo +', 3);" title="Editar" type="button" class="btn btn-success btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-edit"></i></button>';
                        var btnDLT	= '<button onclick="setOrdenTrabajoDetalle('+ full.tipo_orden_trabajo_parametro + ', '+ full.orden_trabajo_codigo +', '+full.orden_trabajo_andrologia_codigo +', 4);" title="Eliminar" type="button" class="btn btn-danger btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eraser"></i></button>';
                        var btnAUD	= '<button onclick="setOrdenTrabajoDetalle('+ full.tipo_orden_trabajo_parametro + ', '+ full.orden_trabajo_codigo +', '+full.orden_trabajo_andrologia_codigo +', 5);" title="Auditoria" type="button" class="btn btn-warning btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-user-secret"></i></button>';
                        var btnFIC	= '<button onclick="setAnimal(26,'+ full.establecimiento_codigo +', '+ full.animal_codigo +', '+ codPag +', 3);" title="Editar" type="button" class="btn btn-success btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-paw"></i></button>';
                        btnCOM = btnDSP + '&nbsp;' + btnUPD + btnDLT + '&nbsp;' + btnAUD + '&nbsp;' + btnFIC;
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

function setOrdenTrabajoDetalle(codTip, codOT, codElem, codAcc){
	var xJSON       = getOrdenTrabajoDetalle(codOT);
	var aJSON       = getOrdenTrabajoDetalle(codOT); 
    var xJSON1      = getDominio('ORDENTRABAJOANDROLOGIAESTADO');
    var xJSON2      = getDominio('ORDENTRABAJOANDROLOGIAESCROTO');
    var xJSON3      = getDominio('ORDENTRABAJOANDROLOGIACONSISTENCIA');
    var xJSON4      = getDominio('ORDENTRABAJOANDROLOGIAMOTIVO');
	var html        = '';
	var bodyCol     = '';
	var bodyTit     = '';
	var bodyMod     = '';
	var bodyOnl     = '';
	var bodyBot     = '';
    var selEstado   = '';
    var selEscroto  = '';
    var selConsistencia = '';
    var selMotivo   = '';
	var rowAuditoria= '';

	switch (codAcc) {
		case 1:
			bodyTit = 'NUEVO';
			bodyCol = '#163562;';
			bodyMod = 'C';
			bodyOnl = '';
			bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
			break;

		case 2:
			bodyTit = 'VER';
			bodyCol = '#6929d5;';
			bodyMod = 'R';
			bodyOnl = 'readonly';
			bodyBot = '';
			break;

		case 3:
			bodyTit = 'EDITAR';
			bodyCol = '#007979;';
			bodyMod = 'U';
			bodyOnl = '';
			bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
			break;

		case 4:
			bodyTit = 'ELIMINAR';
			bodyCol = '#ff2924;';
			bodyMod = 'D';
			bodyOnl = 'readonly';
			bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
			break;
	
		case 5:
			bodyTit = 'AUDITORIA';
			bodyCol = '#d38109;';
			bodyMod = 'A';
			bodyOnl = 'readonly';
			bodyBot = '';
			break;

		default:
			break;
	}

	if (codAcc == 1) {
		xJSON1.forEach(element1 => {
			if (element1.tipo_estado_codigo == 1) {
				selEstado = selEstado + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
			}
		})

        xJSON2.forEach(element1 => {
			if (element1.tipo_estado_codigo == 1) {
				selEscroto = selEscroto + '                             <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
			}
        })
        
        xJSON3.forEach(element1 => {
			if (element1.tipo_estado_codigo == 1) {
				selConsistencia = selConsistencia + '                   <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
			}
		})

		xJSON4.forEach(element1 => {
			if (element1.tipo_estado_codigo == 1) {
				selMotivo = selMotivo + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
			}
        });
        
        html = 
            '<div class="modal-content">'+
            '   <form id="form" data-parsley-validate method="post" action="../class/crud/ordentrabajo_detalle.php">'+
            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
            '	    </div>'+
            ''+
            '	    <div class="modal-body" >'+
            '           <div class="form-group">'+
            '               <input class="form-control" type="hidden" id="workCodigo"   name="workCodigo"   value="0"                                                 required readonly>'+
            '               <input class="form-control" type="hidden" id="workModo"     name="workModo"     value="'+ bodyMod +'"                                     required readonly>'+
            '               <input class="form-control" type="hidden" id="workPage"     name="workPage"     value="ordentrabajo_detalle.php?codigo='+ codTip +'&ot='+ codOT +'"     required readonly>'+
            '               <input class="form-control" type="hidden" id="workTipo"     name="workTipo"     value="'+ codOT +'"                                       required readonly>'+
            '           </div>'+					'           </div>'+
            ''+
            '           <div class="row pt-3">'+
            '               <div class="col-sm-12 col-md-3">'+
            '                   <div class="form-group">'+
            '                       <label for="var01">ESTADO</label>'+
            '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
            '                           <optgroup label="Estado">'+ selEstado +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-3">'+
            '                   <div class="form-group">'+
            '                       <label for="var02">MOTIVO</label>'+
            '                       <select id="var02" name="var02" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
            '                           <optgroup label="Motivo">'+ selMotivo +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-3">'+
            '                   <div class="form-group">'+
            '                       <label for="var03">ESCROTO</label>'+
            '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
            '                           <optgroup label="Motivo">'+ selEscroto +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-3">'+
            '                   <div class="form-group">'+
            '                       <label for="var04">CONSISTENCIA</label>'+
            '                       <select id="var04" name="var04" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
            '                           <optgroup label="Motivo">'+ selConsistencia +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-3">'+
            '                   <div class="form-group">'+
            '                       <label for="var05">PESO</label>'+
            '                       <input id="var05" name="var05" value="" class="form-control" type="number" step=".001" style="text-transform:uppercase; height:40px;" placeholder="PESO" '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-3">'+
            '                   <div class="form-group">'+
            '                       <label for="var06">C.E.</label>'+
            '                       <textarea id="var06" name="var06" value="" class="form-control" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.tipo_observacion +'</textarea>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-3">'+
            '                   <div class="form-group">'+
            '                       <label for="var07">COLA</label>'+
            '                       <textarea id="var07" name="var07" class="form-control" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.tipo_observacion +'</textarea>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-3">'+
            '                   <div class="form-group">'+
            '                       <label for="var08">VESICULA</label>'+
            '                       <textarea id="var08" name="var08" class="form-control"style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.tipo_observacion +'</textarea>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var09">COMENTARIO</label>'+
            '                       <textarea id="var09" name="var09" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.tipo_observacion +'</textarea>'+
            '                   </div>'+
            '               </div>'+
            '            </div>'+
            '          </div>'+
            '	    <div class="modal-footer">'+ bodyBot +
            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
            '	    </div>'+
            '   </form>'+
            '</div>';
			
    } else if (codAcc > 1 && codAcc < 5) {
        xJSON.forEach(element => {
            if (element.orden_trabajo_codigo == codOT && element.orden_trabajo_andrologia_codigo == codElem) {
                xJSON1.forEach(element1 => {
                    if (element1.tipo_codigo == element.tipo_estado_codigo) {
                        selEstado = selEstado + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                    } else {
                        selEstado = selEstado + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                    }
                });
        
                xJSON2.forEach(element1 => {
                    if (element1.tipo_codigo == element.tipo_escroto_codigo) {
                        selEscroto = selEscroto + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                    } else {
                        selEscroto = selEscroto + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                    }
                });

                xJSON3.forEach(element1 => {
                    if (element1.tipo_codigo == element.tipo_consistencia_codigo) {
                        selConsistencia = selConsistencia + '                                 <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                    } else {
                        selConsistencia = selConsistencia + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                    }
                });
                
                xJSON4.forEach(element1 => {
                    if (element1.tipo_codigo == element.tipo_motivo_codigo) {
                        selMotivo = selMotivo + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                    } else {
                        selMotivo = selMotivo + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                    }
                });

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/ordentrabajo_detalle.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input class="form-control" type="hidden" id="workCodigo"   name="workCodigo"   value="'+ codElem +'"                                       required readonly>'+
                    '               <input class="form-control" type="hidden" id="workModo"     name="workModo"     value="'+ bodyMod +'"                                       required readonly>'+
                    '               <input class="form-control" type="hidden" id="workPage"     name="workPage"     value="ordentrabajo_detalle.php?codigo='+ codTip +'&ot='+ codOT +'"                             required readonly>'+
                    '               <input class="form-control" type="hidden" id="workOT"       name="workOT"       value="'+ codOT +'"                                         required readonly>'+
                    '               <input class="form-control" type="hidden" id="workAnimal"   name="workAnimal"   value="'+ element.animal_codigo +'"                         required readonly>'+
                    '               <input class="form-control" type="hidden" id="workAccion"   name="workAccion"   value="1"                                                   required readonly>'+
                    '               <input class="form-control" type="hidden" id="workCorral"   name="workCorral"   value="'+ element.tipo_resultado_corral_codigo +'"          required readonly>'+
                    '               <input class="form-control" type="hidden" id="workEst"      name="workEst"      value="'+ element.establecimiento_codigo +'"                required readonly>'+
                    '               <input class="form-control" type="hidden" id="workLab"      name="workLab"      value="'+ element.tipo_resultado_laboratorio_codigo +'"     required readonly>'+
                    '           </div>'+
                    '           <div class="row pt-3">'+
                    '               <div class="col-sm-12 col-md-3">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var01">ESTADO</label>'+
                    '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Estado">'+ selEstado +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-3">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var02">MOTIVO</label>'+
                    '                       <select id="var02" name="var02" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Tipo">'+ selMotivo + 
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-3">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03">ESCROTO</label>'+
                    '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Tipo">'+ selEscroto + 
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-3">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var04">CONSISTENCIA</label>'+
                    '                       <select id="var04" name="var04" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Tipo">'+ selConsistencia + 
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-3">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var05">PESO</label>'+
                    '                       <input id="var05" name="var05" value="'+ element.orden_trabajo_andrologia_peso +'"class="form-control" type="number" step=".001" style="text-transform:uppercase; height:40px;" placeholder="PESO" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-3">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var06">C.E.</label>'+
                    '                       <input id="var06" name="var06" value="'+ element.orden_trabajo_andrologia_circunferencia_escrotal +'" class="form-control" style="text-transform:uppercase; height:40px;" placeholder="C.E." '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-3">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var07">COLA</label>'+
                    '                       <input id="var07" name="var07" value="'+ element.orden_trabajo_andrologia_cola +'" class="form-control" style="text-transform:uppercase; height:40px;" placeholder="COLA" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-3">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var08">VESICULA</label>'+
                    '                       <input id="var08" name="var08" value="'+ element.orden_trabajo_andrologia_vesicula +'" class="form-control"style="text-transform:uppercase; height:40px;" placeholder="VESICULA" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var09">COMENTARIO</label>'+
                    '                       <textarea id="var09" name="var09" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.orden_trabajo_andrologia_observacion +'</textarea>'+
                    '                   </div>'+
                    '               </div>'+
                    '           </div>'+
                    '	    </div>'+
                    '	    <div class="modal-footer">'+ bodyBot +
                    '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                    '	    </div>'+
                    '   </form>'+
                    '</div>';
            }
        });
	} else if (codAcc == 5) {
		aJSON.forEach(element => {
			rowAuditoria = rowAuditoria + 
			'					<tr class="bg-conmebol" style="text-align:center;">'+
			'						<td class="border-top-0">'+ element.auditoria_metodo +'</td>'+
			'						<td class="border-top-0">'+ element.auditoria_empresa_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.auditoria_usuario +'</td>'+
			'						<td class="border-top-0">'+ element.auditoria_fecha_hora +'</td>'+
			'						<td class="border-top-0">'+ element.auditoria_ip +'</td>'+
			'						<td class="border-top-0">'+ element.tipo_orden +'</td>'+
			'						<td class="border-top-0">'+ element.tipo_path +'</td>'+
			'						<td class="border-top-0">'+ element.tipo_estado_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.tipo_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.tipo_observacion +'</td>'+
			'					</tr>';
		});

		html = 
		'<div class="modal-content">'+
		'   <form id="form" data-parsley-validate method="" action="">'+
		'	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
		'		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
		'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
		'	    </div>'+
		'	    <div class="modal-body" >'+
		'			<table id="tableLoad" class="table v-middle" style="width: 100%;">'+
		'				<thead id="tableAuditoria">'+
		'					<tr class="bg-conmebol" style="text-align:center;">'+
		'						<th class="border-top-0">M&Eacute;TODO</th>'+
		'						<th class="border-top-0">EMPRESA</th>'+
		'						<th class="border-top-0">USUARIO</th>'+
		'						<th class="border-top-0">FECHA HORA</th>'+
		'						<th class="border-top-0">IP</th>'+
		'						<th class="border-top-0">ORDEN</th>'+
		'						<th class="border-top-0">IMAGEN</th>'+
		'						<th class="border-top-0">ESTADO</th>'+
		'						<th class="border-top-0">TIPO</th>'+
		'						<th class="border-top-0">OBSERVACI&Oacute;N</th>'+
		'					</tr>'+
		'				</thead>'+
		'				<tbody>'+rowAuditoria+
		'				</tbody>'+
		'			</table>'+
		'	    </div>'+
		'	    <div class="modal-footer">'+ bodyBot +
		'		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
		'	    </div>'+
		'   </form>'+
		'</div>';
	}

	$("#modal-content").empty();
	$("#modal-content").append(html);
}