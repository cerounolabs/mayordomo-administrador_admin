$(document).ready(function() {
	var xJSON	= getPais();
	
	$('#tableLoad').DataTable({
		processing	: true,
		destroy		: true,
		searching	: true,
		paging		: true,
		lengthChange: true,
		info		: true,
		order: [[ 0, "asc" ]],
		orderCellsTop: false,
		fixedHeader	: false,
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
		data		: xJSON,
		columnDefs	: [
			{ targets			: [0],	visible : true,	searchable : true,	orderData : [0, 0] },
			{ targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] },
			{ targets			: [2],	visible : true,	searchable : true,	orderData : [2, 0] },
			{ targets			: [3],	visible : true,	searchable : true,	orderData : [3, 0] },
			{ targets			: [4],	visible : true,	searchable : true,	orderData : [4, 0] },
			{ targets			: [5],	visible : true,	searchable : true,	orderData : [5, 0] },
			{ targets			: [6],	visible : true,	searchable : true,	orderData : [6, 0] },
			{ targets			: [7],	visible : true,	searchable : true,	orderData : [7, 0] },
			{ targets			: [8],	visible : false,searchable : false,	orderData : [8, 0] },
			{ targets			: [9],	visible : false,searchable : false,	orderData : [9, 0] },
			{ targets			: [10],	visible : false,searchable : false,	orderData : [10, 0] },
			{ targets			: [11],	visible : false,searchable : false,	orderData : [11, 0] },
			{ targets			: [12],	visible : true,	searchable : true,	orderData : [11, 0] }
		],
		columns		: [
			{ data				: 'pais_orden', name : 'pais_orden'},
			{ data				: 'pais_codigo', name : 'pais_codigo'},
			{ data				: 'tipo_estado_nombre', name : 'tipo_estado_nombre'},
			{ data				: 'pais_nombre', name : 'pais_nombre'},
			{ data				: 'pais_iso3166_char2', name : 'pais_iso3166_char2'},
			{ data				: 'pais_iso3166_char3', name : 'pais_iso3166_char3'},
			{ data				: 'pais_iso3166_numero', name : 'pais_iso3166_numero'},
			{ data				: 'pais_observacion', name : 'pais_observacion'},
			{ data				: 'auditoria_empresa_nombre', name : 'auditoria_empresa_nombre'},
			{ data				: 'auditoria_usuario', name : 'auditoria_usuario'},
			{ data				: 'auditoria_fecha_hora', name : 'auditoria_fecha_hora'},
			{ data				: 'auditoria_ip', name : 'auditoria_ip'},
			{ render			: 
				function (data, type, full, meta) {
					var btnDSP	= '<button onclick="setPais('+ full.pais_codigo +', 2);" title="Ver" type="button" class="btn btn-primary btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eye"></i></button>';
					var btnUPD	= '<button onclick="setPais('+ full.pais_codigo +', 3);" title="Editar" type="button" class="btn btn-success btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-edit"></i></button>';
					var btnDLT	= '<button onclick="setPais('+ full.pais_codigo +', 4);" title="Eliminar" type="button" class="btn btn-danger btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eraser"></i></button>';
					var btnAUD	= '<button onclick="setPais('+ full.pais_codigo +', 5);" title="Auditoria" type="button" class="btn btn-warning btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-user-secret"></i></button>';
					return (btnDSP + '&nbsp;' + btnUPD + '&nbsp;' + btnDLT + '&nbsp;' + btnAUD);
				}
			},
		]
	});
});


function setPais(codElem, codAcc){
	var xJSON       = getPais();
	var aJSON       = getPais(); //getAPais(codDom, codElem);
	var html        = '';
	var bodyCol     = '';
	var bodyTit     = '';
	var bodyMod     = '';
	var bodyOnl     = '';
	var bodyBot     = '';
	var selEstado   = '';
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
		html = 
			'<div class="modal-content">'+
			'   <form id="form" data-parsley-validate method="post" action="../class/crud/pais.php">'+
			'	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
			'		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
			'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
			'	    </div>'+
			'	    <div class="modal-body" >'+
			'           <div class="form-group">'+
			'               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
			'               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
			'               <input id="workPage" name="workPage" value="pais" class="form-control" type="hidden" required readonly>'+
			'           </div>'+
			'           <div class="row pt-3">'+
			'               <div class="col-sm-12 col-md-6">'+
			'                   <div class="form-group">'+
			'                       <label for="var01">ESTADO</label>'+
			'                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
			'                           <optgroup label="Estado">'+
			'                               <option value="1">ACTIVO</option>'+
			'                               <option value="2">INACTIVO</option>'+
			'                               <option value="3">BLOQUEADO</option>'+
			'                           </optgroup>'+
			'                       </select>'+
			'                   </div>'+
			'               </div>'+
			'               <div class="col-sm-12 col-md-6">'+
			'                   <div class="form-group">'+
			'                       <label for="var02">ORDEN</label>'+
			'                       <input id="var02" name="var02" value="" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="NRO ORDEN" '+ bodyOnl +'>'+
			'                   </div>'+
			'               </div>'+
			'               <div class="col-sm-12 col-md-12">'+
			'                   <div class="form-group">'+
			'                       <label for="var03">PAIS</label>'+
			'                       <input id="var03" name="var03" value="" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="PAIS" required '+ bodyOnl +'>'+
			'                   </div>'+
			'               </div>'+
			'               <div class="col-sm-12 col-md-4">'+
			'                   <div class="form-group">'+
			'                       <label for="var04">ISO 3166-2C</label>'+
			'                       <input id="var04" name="var04" value="" class="form-control" type="text" minlength="2" maxlength="2" style="text-transform:uppercase; height:40px;" placeholder="ISO 3166-2C" '+ bodyOnl +'>'+
			'                   </div>'+
			'               </div>'+
			'               <div class="col-sm-12 col-md-4">'+
			'                   <div class="form-group">'+
			'                       <label for="var05">ISO 3166-3C</label>'+
			'                       <input id="var05" name="var05" value="" class="form-control" type="text" minlength="3" maxlength="3"  style="text-transform:uppercase; height:40px;" placeholder="ISO 3166-3C" '+ bodyOnl +'>'+
			'                   </div>'+
			'               </div>'+
			'               <div class="col-sm-12 col-md-4">'+
			'                   <div class="form-group">'+
			'                       <label for="var06">ISO 3166-3N</label>'+
			'                       <input id="var06" name="var06" value="" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="ISO 3166-3N" '+ bodyOnl +'>'+
			'                   </div>'+
			'               </div>'+
			'               <div class="col-sm-12">'+
			'                   <div class="form-group">'+
			'                       <label for="var07">OBSERVACIÓN</label>'+
			'                       <textarea id="var07" name="var07" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
			'                   </div>'+
			'               </div>'+
			'           </div>'+
			'	    </div>'+
			'	    <div class="modal-footer">'+ bodyBot +
			'		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
			'	    </div>'+
			'   </form>'+
			'</div>';
	} else if (codAcc > 1 && codAcc < 5) {
		xJSON.forEach(element => {
			if (element.pais_codigo == codElem) {
				switch (element.tipo_estado_codigo) {
					case 1:
						selEstado = 
						'                               <option value="1" selected>ACTIVO</option>'+
						'                               <option value="2">INACTIVO</option>'+
						'                               <option value="3">BLOQUEADO</option>';
						break;
				
					case 2:
						selEstado = 
						'                               <option value="1">ACTIVO</option>'+
						'                               <option value="2" selected>INACTIVO</option>'+
						'                               <option value="3">BLOQUEADO</option>';
						break;

					case 3:
						selEstado = 
						'                               <option value="1">ACTIVO</option>'+
						'                               <option value="2">INACTIVO</option>'+
						'                               <option value="3" selected>BLOQUEADO</option>';
						break;
				}

				html = 
					'<div class="modal-content">'+
					'   <form id="form" data-parsley-validate method="post" action="../class/crud/pais.php">'+
					'	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
					'		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
					'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'	    </div>'+
					'	    <div class="modal-body" >'+
					'           <div class="form-group">'+
					'               <input id="workCodigo" name="workCodigo" value="'+ element.pais_codigo +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workPage" name="workPage" value="pais" class="form-control" type="hidden" required readonly>'+
					'           </div>'+
					'           <div class="row pt-3">'+
					'               <div class="col-sm-12 col-md-6">'+
					'                   <div class="form-group">'+
					'                       <label for="var01">ESTADO</label>'+
					'                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
					'                           <optgroup label="Estado">'+ selEstado +
					'                           </optgroup>'+
					'                       </select>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12 col-md-6">'+
					'                   <div class="form-group">'+
					'                       <label for="var02">ORDEN</label>'+
					'                       <input id="var02" name="var02" value="'+ element.pais_orden +'" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="NRO ORDEN" '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12 col-md-12">'+
					'                   <div class="form-group">'+
					'                       <label for="var03">PAIS</label>'+
					'                       <input id="var03" name="var03" value="'+ element.pais_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="PAIS" required '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12 col-md-4">'+
					'                   <div class="form-group">'+
					'                       <label for="var04">ISO 3166-2C</label>'+
					'                       <input id="var04" name="var04" value="'+ element.pais_iso3166_char2 +'" class="form-control" type="text" minlength="2" maxlength="2" style="text-transform:uppercase; height:40px;" placeholder="ISO 3166-2C" '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12 col-md-4">'+
					'                   <div class="form-group">'+
					'                       <label for="var05">ISO 3166-3C</label>'+
					'                       <input id="var05" name="var05" value="'+ element.pais_iso3166_char3 +'" class="form-control" type="text" minlength="3" maxlength="3"  style="text-transform:uppercase; height:40px;" placeholder="ISO 3166-3C" '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12 col-md-4">'+
					'                   <div class="form-group">'+
					'                       <label for="var06">ISO 3166-3N</label>'+
					'                       <input id="var06" name="var06" value="'+ element.pais_iso3166_numero +'" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="ISO 3166-3N" '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12">'+
					'                   <div class="form-group">'+
					'                       <label for="var07">OBSERVACIÓN</label>'+
					'                       <textarea id="var07" name="var07" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.pais_observacion +'</textarea>'+
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
			'						<td class="border-top-0">'+ element.pais_orden +'</td>'+
			'						<td class="border-top-0">'+ element.tipo_estado_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.pais_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.pais_iso3166_char2 +'</td>'+
			'						<td class="border-top-0">'+ element.pais_iso3166_char3 +'</td>'+
			'						<td class="border-top-0">'+ element.pais_iso3166_numero +'</td>'+
			'						<td class="border-top-0">'+ element.pais_observacion +'</td>'+
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
		'						<th class="border-top-0">ESTADO</th>'+
		'						<th class="border-top-0">PAÍS</th>'+
		'						<th class="border-top-0">ISO 3166-2C</th>'+
		'						<th class="border-top-0">ISO 3166-3C</th>'+
		'						<th class="border-top-0">ISO 3166-3N</th>'+
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