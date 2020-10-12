$(document).ready(function() {
	var codigo	    = document.getElementById('tableCodigo').className;	
    var codEst      = document.getElementById('var01');
    var codEsta     = document.getElementById('var02');
    var codPAdmin   = document.getElementById('var03');
    var codPVete    = document.getElementById('var04');
    var xDATA       = getOrdenTrabajo(codigo, codEst.value, codEsta.value, codPAdmin.value, codPVete.value);

    var tableData   = $('#tableLoad').DataTable(
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
                { targets			: [3],	visible : false,searchable : false,	orderData : [3, 0] },
                { targets			: [4],	visible : true,	searchable : true,	orderData : [4, 0] },
                { targets			: [5],	visible : true,	searchable : true,	orderData : [5, 0] },
                { targets			: [6],	visible : true,	searchable : true,	orderData : [6, 0] },
                { targets			: [7],	visible : true,	searchable : true,	orderData : [7, 0] },
                { targets			: [8],	visible : true,	searchable : true,	orderData : [8, 0] },
                { targets			: [9],	visible : false,searchable : false,	orderData : [9, 0] },
                { targets			: [10],	visible : true,	searchable : true,	orderData : [10, 0] },
            ],
            columns		: [
                { data				: 'orden_trabajo_codigo', name : 'orden_trabajo_codigo'},
                { data				: 'tipo_estado_nombre', name : 'tipo_estado_nombre'},
                { data				: 'establecimiento_nombre', name : 'establecimiento_nombre'},
                { data				: 'tipo_orden_trabajo_nombre', name : 'tipo_orden_trabajo_nombre'},
                { data				: 'orden_trabajo_numero', name : 'orden_trabajo_numero'},
                { data				: 'orden_trabajo_fecha_inicio', name : 'orden_trabajo_fecha_inicio'},
                { data				: 'orden_trabajo_fecha_fin', name : 'orden_trabajo_fecha_fin'},
                { data				: 'persona_administrador_completo', name : 'persona_administrador_completo'},
                { data				: 'persona_veterinario_completo', name : 'persona_veterinario_completo'},
                { data				: 'orden_trabajo_observacion', name : 'orden_trabajo_observacion'},
                { render			: 
                    function (data, type, full, meta) {
                        var btnCOM  = '';
                        var btnDSP	= '<button onclick="setOrdenTrabajo('+ full.tipo_orden_trabajo_codigo +', '+ full.tipo_orden_trabajo_parametro +', '+ full.establecimiento_codigo +', '+ full.orden_trabajo_codigo +', 2);" title="Ver" type="button" class="btn btn-primary btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eye"></i></button>';
                        var btnUPD	= '<button onclick="setOrdenTrabajo('+ full.tipo_orden_trabajo_codigo +', '+ full.tipo_orden_trabajo_parametro +', '+ full.establecimiento_codigo +', '+ full.orden_trabajo_codigo +', 3);" title="Editar" type="button" class="btn btn-success btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-edit"></i></button>';
                        var btnDLT	= '<button onclick="setOrdenTrabajo('+ full.tipo_orden_trabajo_codigo +', '+ full.tipo_orden_trabajo_parametro +', '+ full.establecimiento_codigo +', '+ full.orden_trabajo_codigo +', 4);" title="Eliminar" type="button" class="btn btn-danger btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eraser"></i></button>';
                        var btnAUD	= '<button onclick="setOrdenTrabajo('+ full.tipo_orden_trabajo_codigo +', '+ full.tipo_orden_trabajo_parametro +', '+ full.establecimiento_codigo +', '+ full.orden_trabajo_codigo +', 5);" title="Auditoria" type="button" class="btn btn-warning btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-user-secret"></i></button>';
                        var btnFIC	= '<button onclick="setOrdenTrabajo('+ full.tipo_orden_trabajo_codigo +', '+ full.tipo_orden_trabajo_parametro +', '+ full.establecimiento_codigo +', '+ full.orden_trabajo_codigo +', 6);" title="Detalle" type="button" class="btn btn-info btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-warehouse"></i></button>';
                        var btnPRO	= '<button onclick="setOrdenTrabajo('+ full.tipo_orden_trabajo_codigo +', '+ full.tipo_orden_trabajo_parametro +', '+ full.establecimiento_codigo +', '+ full.orden_trabajo_codigo +', 7);" title="Procesar" type="button" class="btn btn-secondary btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-cog"></i></button>';
                        

                        switch (full.tipo_estado_parametro) {
                            case 1:
                                btnCOM = btnFIC + '&nbsp;' + btnPRO + '&nbsp;' + btnDSP + '&nbsp;' + btnUPD + '&nbsp;' + btnDLT + '&nbsp;' + btnAUD + '&nbsp;';
                                break;
                        
                            case 2:
                                btnCOM = btnFIC + '&nbsp;' + btnDSP + '&nbsp;' + btnUPD + '&nbsp;' + btnDLT + '&nbsp;' + btnAUD + '&nbsp;';
                                btnCOM = btnFIC + '&nbsp;' + btnPRO + '&nbsp;' + btnDSP + '&nbsp;' + btnUPD + '&nbsp;' + btnDLT + '&nbsp;' + btnAUD + '&nbsp;';
                                break;

                            case 3:
                                btnCOM = btnFIC + '&nbsp;' + btnDSP + '&nbsp;' + btnDLT + '&nbsp;' + btnAUD + '&nbsp;';
                                btnCOM = btnFIC + '&nbsp;' + btnPRO + '&nbsp;' + btnDSP + '&nbsp;' + btnUPD + '&nbsp;' + btnDLT + '&nbsp;' + btnAUD + '&nbsp;';
                                break;

                            case 4:
                                btnCOM = btnFIC + '&nbsp;' + btnDSP + '&nbsp;' + btnAUD + '&nbsp;';
                                btnCOM = btnFIC + '&nbsp;' + btnPRO + '&nbsp;' + btnDSP + '&nbsp;' + btnUPD + '&nbsp;' + btnDLT + '&nbsp;' + btnAUD + '&nbsp;';
                                break;

                            case 5:
                                btnCOM = btnFIC + '&nbsp;' + btnPRO + '&nbsp;' + btnDSP + '&nbsp;' + btnUPD + '&nbsp;' + btnDLT + '&nbsp;' + btnAUD + '&nbsp;';
                                break;

                            case 6:
                                btnCOM = btnFIC + '&nbsp;' + btnDSP + '&nbsp;' + btnAUD + '&nbsp;';
                                btnCOM = btnFIC + '&nbsp;' + btnPRO + '&nbsp;' + btnDSP + '&nbsp;' + btnUPD + '&nbsp;' + btnDLT + '&nbsp;' + btnAUD + '&nbsp;';
                                break;
                        }
                        
                        return btnCOM;
                    }
                },
            ]
        }
    );

    $('.form-group').change(function() {
        var codigo	    = document.getElementById('tableCodigo').className;	
        var codEst      = document.getElementById('var01');
        var codEsta     = document.getElementById('var02');
        var codPAdmin   = document.getElementById('var03');
        var codPVete    = document.getElementById('var04');
        var xDATA       = getOrdenTrabajo(codigo, codEst.value, codEsta.value, codPAdmin.value, codPVete.value);
        
        tableData.clear().rows.add(xDATA).draw();
    });
});

function setOrdenTrabajo(rowOTC, rowOTP, rowEst, codElem, codAcc){
    var codEst = '';

    if (codElem != 0) {
        codEst  = rowEst;
    } else {
        codEst  = document.getElementById(rowEst).value;
    }
    
    var xJSON           = getOrdenTrabajo(rowOTP, codEst, 0, 0, 0);
    var xJSON1          = getDominio('ORDENTRABAJOESTADO');
    var xJSON2          = getDominio('ORDENTRABAJOTIPO');
    var xJSON3          = getEstablecimientoPersona(codEst);
    var html            = '';
    var bodyCol         = '';
    var bodyTit         = '';
    var bodyMod         = '';
    var bodyOnl         = '';
    var bodyBot         = '';
    var inpOT           = getFechaHora(6);
    var selEstado       = '';
    var selTipo         = '';
    var selPAdm         = '';
    var selPVet         = '';
    var rowAuditoria    = '';

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
            bodyTit = 'ANULAR';
            bodyCol = '#ff2924;';
            bodyMod = 'U';
            bodyOnl = 'readonly';
            bodyBot = '           <button type="submit" class="btn btn-danger">Anular</button>';
            break;

        case 5:
            bodyTit = 'AUDITORIA';
            bodyCol = '#d38109;';
            bodyMod = 'A';
            bodyOnl = 'readonly';
            bodyBot = '';
            break;

        case 7:
            bodyTit = 'PROCESAR';
            bodyCol = '#6c757d;';
            bodyMod = 'P';
            bodyOnl = 'readonly';
            bodyBot = '           <button type="submit" class="btn btn-secondary">Procesar</button>';
            break;

        default:
            break;
    }
    
    if (codAcc == 1) {
        xJSON1.forEach(element1 => {
            if (element1.tipo_estado_parametro == 1 && element1.tipo_parametro == 1) {
                var item    = pad(element1.tipo_codigo, 3);
				selEstado   = selEstado + '                               <option value="'+ element1.tipo_codigo +'">'+ item + ' - ' + element1.tipo_nombre +'</option>';
			}
        });

        xJSON2.forEach(element1 => {
            if (element1.tipo_estado_parametro == 1 && element1.tipo_parametro == rowOTP) {
                var item    = pad(element1.tipo_codigo, 3);
				selTipo     = selTipo + '                               <option value="'+ element1.tipo_codigo +'">'+ item + ' - ' + element1.tipo_nombre +'</option>';
			}
        });

        html = 
            '<div class="modal-content">'+
            '   <form id="form" data-parsley-validate method="post" action="../class/crud/ordentrabajo.php">'+
            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
            '	    </div>'+
            ''+
            '	    <div class="modal-body" >'+
            '           <div class="form-group">'+
            '               <input class="form-control" type="hidden" id="workCodigo"   name="workCodigo"   value="0"                                       required readonly>'+
            '               <input class="form-control" type="hidden" id="workModo"     name="workModo"     value="'+ bodyMod +'"                           required readonly>'+
            '               <input class="form-control" type="hidden" id="workPage"     name="workPage"     value="ordentrabajo.php?codigo='+ rowOTP +'&"    required readonly>'+
            '               <input class="form-control" type="hidden" id="workTipo"     name="workTipo"     value="'+ rowOTC +'"                            required readonly>'+
            '           </div>'+
            ''+
            '           <div class="row">'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var001">Establecimiento</label>'+
            '                       <select id="var001" name="var001" class="form-control" style="width:100%; height:40px;" readonly required>'+
            '                           <optgroup label="Establecimiento">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var002">Estado</label>'+
            '                       <select id="var002" name="var002" class="form-control" style="width:100%; height:40px;" readonly required>'+
            '                           <optgroup label="Estado">'+ selEstado +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var003">Tipo O.T.</label>'+
            '                       <select id="var003" name="var003" class="form-control" style="width:100%; height:40px;" readonly required>'+
            '                           <optgroup label="Tipo O.T.">'+ selTipo +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var004">O.T. Nro.</label>'+
            '                       <input id="var004" name="var004" value="'+ inpOT +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" readonly required>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var005">Administrador</label>'+
            '                       <select id="var005" name="var005" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="Administrador">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var006">Veterinario</label>'+
            '                       <select id="var006" name="var006" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="Veterinario">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var007">Inicio Actividad</label>'+
            '                       <input id="var007" name="var007" class="form-control" type="date" style="text-transform:uppercase; height:40px;" '+ bodyOnl +' required>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var008">Fin Actividad</label>'+
            '                       <input id="var008" name="var008" class="form-control" type="date" style="text-transform:uppercase; height:40px;" readonly>'+
            '                   </div>'+
            '               </div>'+
            ''+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var009">COMENTARIO</label>'+
            '                       <textarea id="var009" name="var009" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
            '                   </div>'+
            '               </div>'+
            '           </div>'+
            '	    </div>'+
            ''+
            '	    <div class="modal-footer">'+ bodyBot +
            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
            '	    </div>'+
            '   </form>'+
            '</div>';
	} else if (codAcc > 1 && codAcc < 3) {
		xJSON.forEach(element => {
			if (element.orden_trabajo_codigo == codElem) {
                xJSON1.forEach(element1 => {
                    if (element1.tipo_estado_parametro == 1) {
                        var item    = pad(element1.tipo_codigo, 3);

                        if(element.tipo_estado_codigo == element1.tipo_codigo){
                            selEstado   = selEstado + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ item + ' - ' + element1.tipo_nombre +'</option>';
                        } else {
                            selEstado   = selEstado + '                               <option value="'+ element1.tipo_codigo +'">'+ item + ' - ' + element1.tipo_nombre +'</option>';
                        }
                    }
                });

                xJSON3.forEach(element1 => {
                    var item    = pad(element1.persona_codigo, 3);

                    if (element1.tipo_estado_parametro == 1 && element1.tipo_rol_parametro == 2) {
                        if(element.persona_administrador_codigo == element1.persona_codigo){
                            selPAdm   = selPAdm + '                               <option value="'+ element1.persona_codigo +'" selected>'+ item + ' - ' + element1.persona_completo +'</option>';
                        } else {
                            selPAdm   = selPAdm + '                               <option value="'+ element1.persona_codigo +'">'+ item + ' - ' + element1.persona_completo +'</option>';
                        }
                    }

                    if (element1.tipo_estado_parametro == 1 && element1.tipo_rol_parametro == 3) {
                        if(element.persona_veterinario_codigo == element1.persona_codigo){
                            selPVet   = selPVet + '                               <option value="'+ element1.persona_codigo +'" selected>'+ item + ' - ' + element1.persona_completo +'</option>';
                        } else {
                            selPVet   = selPVet + '                               <option value="'+ element1.persona_codigo +'">'+ item + ' - ' + element1.persona_completo +'</option>';
                        }
                    }
                });

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/ordentrabajo.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    ''+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input class="form-control" type="hidden" id="workCodigo"   name="workCodigo"   value="'+ codElem +'"                           required readonly>'+
                    '               <input class="form-control" type="hidden" id="workModo"     name="workModo"     value="'+ bodyMod +'"                           required readonly>'+
                    '               <input class="form-control" type="hidden" id="workPage"     name="workPage"     value="ordentrabajo.php?codigo='+ rowOTP +'&"   required readonly>'+
                    '               <input class="form-control" type="hidden" id="workTipo"     name="workTipo"     value="'+ rowOTC +'"                            required readonly>'+
                    '           </div>'+
                    ''+
                    '           <div class="row">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var001">Establecimiento</label>'+
                    '                       <select id="var001" name="var001" class="form-control" style="width:100%; height:40px;" readonly required>'+
                    '                           <optgroup label="Establecimiento">'+
                    '                               <option value="'+ element.establecimiento_codigo +'">'+ element.establecimiento_nombre +'</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var002">Estado</label>'+
                    '                       <select id="var002" name="var002" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                    '                           <optgroup label="Estado">'+ selEstado +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var003">Tipo O.T.</label>'+
                    '                       <select id="var003" name="var003" class="form-control" style="width:100%; height:40px;" readonly required>'+
                    '                           <optgroup label="Tipo O.T.">'+
                    '                               <option value="'+ element.tipo_orden_trabajo_codigo +'">'+ element.tipo_orden_trabajo_nombre +'</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var004">O.T. Nro.</label>'+
                    '                       <input id="var004" name="var004" value="'+ element.orden_trabajo_numero +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" readonly required>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var005">Administrador</label>'+
                    '                       <select id="var005" name="var005" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                    '                           <optgroup label="Administrador">'+ selPAdm +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var006">Veterinario</label>'+
                    '                       <select id="var006" name="var006" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                    '                           <optgroup label="Veterinario">'+ selPVet +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var007">Inicio Actividad</label>'+
                    '                       <input id="var007" name="var007" value="'+ element.orden_trabajo_fecha_inicio +'" class="form-control" type="date" style="text-transform:uppercase; height:40px;" '+ bodyOnl +' required>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var008">Fin Actividad</label>'+
                    '                       <input id="var008" name="var008" value="'+ element.orden_trabajo_fecha_fin +'" class="form-control" type="date" style="text-transform:uppercase; height:40px;" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var009">COMENTARIO</label>'+
                    '                       <textarea id="var009" name="var009" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.orden_trabajo_observacion +'</textarea>'+
                    '                   </div>'+
                    '               </div>'+
                    '           </div>'+
                    '	    </div>'+
                    ''+
                    '	    <div class="modal-footer">'+ bodyBot +
                    '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                    '	    </div>'+
                    '   </form>'+
                    '</div>';
			}
        });
    } else if (codAcc == 3) {
        xJSON.forEach(element => {
			if (element.orden_trabajo_codigo == codElem) {
                xJSON1.forEach(element1 => {
                    if (element1.tipo_codigo == element.tipo_estado_codigo) {
                        var item    = pad(element1.tipo_codigo, 3);
                        selEstado   = selEstado + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ item + ' - ' + element1.tipo_nombre +'</option>';
                    }
                });

                xJSON3.forEach(element1 => {
                    var item    = pad(element1.persona_codigo, 3);

                    if (element1.tipo_estado_parametro == 1 && element1.tipo_rol_parametro == 2) {
                        if(element.persona_administrador_codigo == element1.persona_codigo){
                            selPAdm   = selPAdm + '                               <option value="'+ element1.persona_codigo +'" selected>'+ item + ' - ' + element1.persona_completo +'</option>';
                        } else {
                            selPAdm   = selPAdm + '                               <option value="'+ element1.persona_codigo +'">'+ item + ' - ' + element1.persona_completo +'</option>';
                        }
                    }

                    if (element1.tipo_estado_parametro == 1 && element1.tipo_rol_parametro == 3) {
                        if(element.persona_veterinario_codigo == element1.persona_codigo){
                            selPVet   = selPVet + '                               <option value="'+ element1.persona_codigo +'" selected>'+ item + ' - ' + element1.persona_completo +'</option>';
                        } else {
                            selPVet   = selPVet + '                               <option value="'+ element1.persona_codigo +'">'+ item + ' - ' + element1.persona_completo +'</option>';
                        }
                    }
                });

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/ordentrabajo.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    ''+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input class="form-control" type="hidden" id="workCodigo"   name="workCodigo"   value="'+ codElem +'"                           required readonly>'+
                    '               <input class="form-control" type="hidden" id="workModo"     name="workModo"     value="'+ bodyMod +'"                           required readonly>'+
                    '               <input class="form-control" type="hidden" id="workPage"     name="workPage"     value="ordentrabajo.php?codigo='+ rowOTP +'&"   required readonly>'+
                    '               <input class="form-control" type="hidden" id="workTipo"     name="workTipo"     value="'+ rowOTC +'"                            required readonly>'+
                    '           </div>'+
                    ''+
                    '           <div class="row">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var001">Establecimiento</label>'+
                    '                       <select id="var001" name="var001" class="form-control" style="width:100%; height:40px;" readonly required>'+
                    '                           <optgroup label="Establecimiento">'+
                    '                               <option value="'+ element.establecimiento_codigo +'">'+ element.establecimiento_nombre +'</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var002">Estado</label>'+
                    '                       <select id="var002" name="var002" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' readonly required>'+
                    '                           <optgroup label="Estado">'+ selEstado +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var003">Tipo O.T.</label>'+
                    '                       <select id="var003" name="var003" class="form-control" style="width:100%; height:40px;" readonly required>'+
                    '                           <optgroup label="Tipo O.T.">'+
                    '                               <option value="'+ element.tipo_orden_trabajo_codigo +'">'+ element.tipo_orden_trabajo_nombre +'</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var004">O.T. Nro.</label>'+
                    '                       <input id="var004" name="var004" value="'+ element.orden_trabajo_numero +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" readonly required>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var005">Administrador</label>'+
                    '                       <select id="var005" name="var005" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                    '                           <optgroup label="Administrador">'+ selPAdm +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var006">Veterinario</label>'+
                    '                       <select id="var006" name="var006" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                    '                           <optgroup label="Veterinario">'+ selPVet +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var007">Inicio Actividad</label>'+
                    '                       <input id="var007" name="var007" value="'+ element.orden_trabajo_fecha_inicio +'" class="form-control" type="date" style="text-transform:uppercase; height:40px;" '+ bodyOnl +' required>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var008">Fin Actividad</label>'+
                    '                       <input id="var008" name="var008" value="'+ element.orden_trabajo_fecha_fin +'" class="form-control" type="date" style="text-transform:uppercase; height:40px;" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var009">COMENTARIO</label>'+
                    '                       <textarea id="var009" name="var009" class="form-control" rows="5" style="text-transform:uppercase;" required>'+ element.orden_trabajo_observacion +'</textarea>'+
                    '                   </div>'+
                    '               </div>'+
                    '           </div>'+
                    '	    </div>'+
                    ''+
                    '	    <div class="modal-footer">'+ bodyBot +
                    '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                    '	    </div>'+
                    '   </form>'+
                    '</div>';
			}
		});
    
	} else if (codAcc == 4) {
        xJSON.forEach(element => {
			if (element.orden_trabajo_codigo == codElem) {
                xJSON1.forEach(element1 => {
                    if (element1.tipo_estado_parametro == 1 && element1.tipo_parametro == 6) {
                        var item    = pad(element1.tipo_codigo, 3);
                        selEstado   = selEstado + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ item + ' - ' + element1.tipo_nombre +'</option>';
                    }
                });

                xJSON3.forEach(element1 => {
                    var item    = pad(element1.persona_codigo, 3);

                    if (element1.tipo_estado_parametro == 1 && element1.tipo_rol_parametro == 2) {
                        if(element.persona_administrador_codigo == element1.persona_codigo){
                            selPAdm   = selPAdm + '                               <option value="'+ element1.persona_codigo +'" selected>'+ item + ' - ' + element1.persona_completo +'</option>';
                        } else {
                            selPAdm   = selPAdm + '                               <option value="'+ element1.persona_codigo +'">'+ item + ' - ' + element1.persona_completo +'</option>';
                        }
                    }

                    if (element1.tipo_estado_parametro == 1 && element1.tipo_rol_parametro == 3) {
                        if(element.persona_veterinario_codigo == element1.persona_codigo){
                            selPVet   = selPVet + '                               <option value="'+ element1.persona_codigo +'" selected>'+ item + ' - ' + element1.persona_completo +'</option>';
                        } else {
                            selPVet   = selPVet + '                               <option value="'+ element1.persona_codigo +'">'+ item + ' - ' + element1.persona_completo +'</option>';
                        }
                    }
                });

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/ordentrabajo.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    ''+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input class="form-control" type="hidden" id="workCodigo"   name="workCodigo"   value="'+ codElem +'"                           required readonly>'+
                    '               <input class="form-control" type="hidden" id="workModo"     name="workModo"     value="'+ bodyMod +'"                           required readonly>'+
                    '               <input class="form-control" type="hidden" id="workPage"     name="workPage"     value="ordentrabajo.php?codigo='+ rowOTP +'&"   required readonly>'+
                    '               <input class="form-control" type="hidden" id="workTipo"     name="workTipo"     value="'+ rowOTC +'"                            required readonly>'+
                    '           </div>'+
                    ''+
                    '           <div class="row">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var001">Establecimiento</label>'+
                    '                       <select id="var001" name="var001" class="form-control" style="width:100%; height:40px;" readonly required>'+
                    '                           <optgroup label="Establecimiento">'+
                    '                               <option value="'+ element.establecimiento_codigo +'">'+ element.establecimiento_nombre +'</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var002">Estado</label>'+
                    '                       <select id="var002" name="var002" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                    '                           <optgroup label="Estado">'+ selEstado +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var003">Tipo O.T.</label>'+
                    '                       <select id="var003" name="var003" class="form-control" style="width:100%; height:40px;" readonly required>'+
                    '                           <optgroup label="Tipo O.T.">'+
                    '                               <option value="'+ element.tipo_orden_trabajo_codigo +'">'+ element.tipo_orden_trabajo_nombre +'</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var004">O.T. Nro.</label>'+
                    '                       <input id="var004" name="var004" value="'+ element.orden_trabajo_numero +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" readonly required>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var005">Administrador</label>'+
                    '                       <select id="var005" name="var005" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                    '                           <optgroup label="Administrador">'+ selPAdm +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var006">Veterinario</label>'+
                    '                       <select id="var006" name="var006" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                    '                           <optgroup label="Veterinario">'+ selPVet +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var007">Inicio Actividad</label>'+
                    '                       <input id="var007" name="var007" value="'+ element.orden_trabajo_fecha_inicio +'" class="form-control" type="date" style="text-transform:uppercase; height:40px;" '+ bodyOnl +' required>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var008">Fin Actividad</label>'+
                    '                       <input id="var008" name="var008" value="'+ element.orden_trabajo_fecha_fin +'" class="form-control" type="date" style="text-transform:uppercase; height:40px;" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var009">COMENTARIO</label>'+
                    '                       <textarea id="var009" name="var009" class="form-control" rows="5" style="text-transform:uppercase;" required>'+ element.orden_trabajo_observacion +'</textarea>'+
                    '                   </div>'+
                    '               </div>'+
                    '           </div>'+
                    '	    </div>'+
                    ''+
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
	} else if (codAcc == 6) {
        window.location.href = '../public/ordentrabajo_detalle.php?codigo='+rowOTP+'&ot='+codElem;
    } else if (codAcc == 7) {
        xJSON.forEach(element => {
			if (element.orden_trabajo_codigo == codElem) {
                xJSON1.forEach(element1 => {
                    if (element1.tipo_estado_parametro == 1 && element1.tipo_parametro == 2) {
                        var item    = pad(element1.tipo_codigo, 3);
                        selEstado   = selEstado + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ item + ' - ' + element1.tipo_nombre +'</option>';
                    }
                });

                xJSON3.forEach(element1 => {
                    var item    = pad(element1.persona_codigo, 3);

                    if (element1.tipo_estado_parametro == 1 && element1.tipo_rol_parametro == 2) {
                        if(element.persona_administrador_codigo == element1.persona_codigo){
                            selPAdm   = selPAdm + '                               <option value="'+ element1.persona_codigo +'" selected>'+ item + ' - ' + element1.persona_completo +'</option>';
                        } else {
                            selPAdm   = selPAdm + '                               <option value="'+ element1.persona_codigo +'">'+ item + ' - ' + element1.persona_completo +'</option>';
                        }
                    }

                    if (element1.tipo_estado_parametro == 1 && element1.tipo_rol_parametro == 3) {
                        if(element.persona_veterinario_codigo == element1.persona_codigo){
                            selPVet   = selPVet + '                               <option value="'+ element1.persona_codigo +'" selected>'+ item + ' - ' + element1.persona_completo +'</option>';
                        } else {
                            selPVet   = selPVet + '                               <option value="'+ element1.persona_codigo +'">'+ item + ' - ' + element1.persona_completo +'</option>';
                        }
                    }
                });

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/ordentrabajo.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    ''+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input class="form-control" type="hidden" id="workCodigo"   name="workCodigo"   value="'+ codElem +'"                           required readonly>'+
                    '               <input class="form-control" type="hidden" id="workModo"     name="workModo"     value="'+ bodyMod +'"                           required readonly>'+
                    '               <input class="form-control" type="hidden" id="workPage"     name="workPage"     value="ordentrabajo.php?codigo='+ rowOTP +'&"   required readonly>'+
                    '               <input class="form-control" type="hidden" id="workTipo"     name="workTipo"     value="'+ rowOTC +'"                            required readonly>'+
                    '           </div>'+
                    ''+
                    '           <div class="row">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var001">Establecimiento</label>'+
                    '                       <select id="var001" name="var001" class="form-control" style="width:100%; height:40px;" readonly required>'+
                    '                           <optgroup label="Establecimiento">'+
                    '                               <option value="'+ element.establecimiento_codigo +'">'+ element.establecimiento_nombre +'</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var002">Estado</label>'+
                    '                       <select id="var002" name="var002" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                    '                           <optgroup label="Estado">'+ selEstado +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var003">Tipo O.T.</label>'+
                    '                       <select id="var003" name="var003" class="form-control" style="width:100%; height:40px;" readonly required>'+
                    '                           <optgroup label="Tipo O.T.">'+
                    '                               <option value="'+ element.tipo_orden_trabajo_codigo +'">'+ element.tipo_orden_trabajo_nombre +'</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var004">O.T. Nro.</label>'+
                    '                       <input id="var004" name="var004" value="'+ element.orden_trabajo_numero +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" readonly required>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var005">Administrador</label>'+
                    '                       <select id="var005" name="var005" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                    '                           <optgroup label="Administrador">'+ selPAdm +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var006">Veterinario</label>'+
                    '                       <select id="var006" name="var006" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                    '                           <optgroup label="Veterinario">'+ selPVet +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var007">Inicio Actividad</label>'+
                    '                       <input id="var007" name="var007" value="'+ element.orden_trabajo_fecha_inicio +'" class="form-control" type="date" style="text-transform:uppercase; height:40px;" '+ bodyOnl +' required>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var008">Fin Actividad</label>'+
                    '                       <input id="var008" name="var008" value="'+ element.orden_trabajo_fecha_fin +'" class="form-control" type="date" style="text-transform:uppercase; height:40px;" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    ''+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var009">COMENTARIO</label>'+
                    '                       <textarea id="var009" name="var009" class="form-control" rows="5" style="text-transform:uppercase;" required>'+ element.orden_trabajo_observacion +'</textarea>'+
                    '                   </div>'+
                    '               </div>'+
                    '           </div>'+
                    '	    </div>'+
                    ''+
                    '	    <div class="modal-footer">'+ bodyBot +
                    '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                    '	    </div>'+
                    '   </form>'+
                    '</div>';
			}
		});
    }

	$("#modal-content").empty();
    $("#modal-content").append(html);
    
    if (codAcc == 1) {
        selectEstablecimiento('var001'),
        selectEstablecimientoPersona('var005', 'var001', 2, 2);
        selectEstablecimientoPersona('var006', 'var001', 3, 2);
    }

    $('#var001').change(function() {
        selectEstablecimientoPersona('var005', 'var001', 2, 2);
        selectEstablecimientoPersona('var006', 'var001', 3, 2);
    });
}