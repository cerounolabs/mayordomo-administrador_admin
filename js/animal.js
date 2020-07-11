function selectEstablecimiento(rowInput) {
    var xJSON   = getEstablecimiento();
    var selItem = document.getElementById(rowInput);

    while (selItem.length > 0) {
        selItem.remove(0);
    }
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var item        = pad(element.establecimiento_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.establecimiento_codigo;
            option.text     = item + ' - ' + element.establecimiento_nombre;                    
            selItem.add(option, null);
        }
    });
}

function selectDominio(rowInput, rowDominio) {
    var selItem = document.getElementById(rowInput);
    var xJSON   = getDominio(rowDominio);
            
    while (selItem.length > 0) {
        selItem.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'TODOS'; 
    option.selected = true;                    
    selItem.add(option, null);

    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var item        = pad(element.tipo_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_codigo;
            option.text     = item + ' - ' + element.tipo_nombre;
            selItem.add(option, null);
        }
    });
}

function selectPropietario(rowInput, rowEsta) {
    var selEsta = document.getElementById(rowEsta);
    var xJSON   = getPropietario(selEsta.value);
    var selItem = document.getElementById(rowInput);

    while (selItem.length > 0) {
        selItem.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'TODOS'; 
    option.selected = true;                    
    selItem.add(option, null);
   
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1 && element.tipo_rol_codigo == 49) {
            var item        = pad(element.persona_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.persona_codigo;
            option.text     = item + ' - ' + element.persona_completo;                    
            selItem.add(option, null);
        }
    });
}

function changeCategoria(rowEspecie, rowCategoria, rowInput) {
    var selItem = document.getElementById(rowInput);
    var selCate = document.getElementById(rowCategoria);
    var xJSON   = getDominioTri('ANIMALESPECIECATEGORIASUBCATEGORIA');

    while (selItem.length > 0) {
        selItem.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'TODOS'; 
    option.selected = true;                    
    selItem.add(option, null);

    xJSON.forEach(element => {
        if (element.tipo_dominio1_codigo == rowEspecie && element.tipo_dominio2_codigo == selCate.value) {
            var item        = pad(element.tipo_dominio3_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_dominio3_codigo;
            option.text     = item + ' - ' + element.tipo_dominio3_nombre;
            selItem.add(option, null);
        }
    });
}

$(document).ready(function() {
    var codEst      = document.getElementById('var01');
    var codCat      = document.getElementById('var02');
    var codSub      = document.getElementById('var03');
    var codOrg      = document.getElementById('var04');
    var codRaz      = document.getElementById('var05');
    var codPro      = document.getElementById('var06');
    var codPel      = document.getElementById('var07');
    var codGra      = document.getElementById('var08');
    var codHac      = document.getElementById('var09');
    var xDATA       = getAnimal(1, codEst.value, 0, codCat.value, codSub.value, codOrg.value, codRaz.value, codPro.value, codPel.value, codGra.value, codHac.value);

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
                { targets			: [3],	visible : true,	searchable : true,	orderData : [3, 0] },
                { targets			: [4],	visible : true,	searchable : true,	orderData : [4, 0] },
                { targets			: [5],	visible : true,	searchable : true,	orderData : [5, 0] },
                { targets			: [6],	visible : true,	searchable : true,	orderData : [6, 0] },
                { targets			: [7],	visible : true,	searchable : true,	orderData : [7, 0] },
                { targets			: [8],	visible : true,	searchable : true,	orderData : [8, 0] },
                { targets			: [9],	visible : true,	searchable : true,	orderData : [9, 0] },
                { targets			: [10],	visible : true,	searchable : true,	orderData : [10, 0] },
                { targets			: [11],	visible : true,	searchable : true,	orderData : [11, 0] },
                { targets			: [12],	visible : true,	searchable : true,	orderData : [12, 0] },
                { targets			: [13],	visible : true,	searchable : true,	orderData : [13, 0] },
                { targets			: [14],	visible : true,	searchable : true,	orderData : [14, 0] },
                { targets			: [15],	visible : true,	searchable : true,	orderData : [15, 0] },
                { targets			: [16],	visible : false,searchable : false,	orderData : [16, 0] },
            ],
            columns		: [
                { data				: 'animal_codigo', name : 'animal_codigo'},
                { data				: 'tipo_estado_nombre', name : 'tipo_estado_nombre'},
                { data				: 'animal_codigo_electronico', name : 'animal_codigo_electronico'},
                { data				: 'animal_codigo_rp', name : 'animal_codigo_rp'},
                { data				: 'animal_codigo_hbp', name : 'animal_codigo_hbp'},
                { data				: 'animal_codigo_sitrap', name : 'animal_codigo_sitrap'},
                { data				: 'animal_codigo_interno', name : 'animal_codigo_interno'},
                { data				: 'animal_codigo_nombre', name : 'animal_codigo_nombre'},
                { data				: 'tipo_categoria_nombre', name : 'tipo_categoria_nombre'},
                { data				: 'tipo_subcategoria_nombre', name : 'tipo_subcategoria_nombre'},
                { data				: 'tipo_origen_nombre', name : 'tipo_origen_nombre'},
                { data				: 'tipo_raza_nombre', name : 'tipo_raza_nombre'},
                { data				: 'persona_completo', name : 'persona_completo'},
                { data				: 'tipo_pelaje_nombre', name : 'tipo_pelaje_nombre'},
                { data				: 'tipo_grado_sangre_nombre', name : 'tipo_grado_sangre_nombre'},
                { data				: 'tipo_hacienda_nombre', name : 'tipo_hacienda_nombre'},
                { data				: 'tipo_subcategoria_nombre', name : 'tipo_subcategoria_nombre'},
            ]
        }
    );

    $('.form-group').change(function() {
        var codEst      = document.getElementById('var01');
        var codCat      = document.getElementById('var02');
        var codSub      = document.getElementById('var03');
        var codOrg      = document.getElementById('var04');
        var codRaz      = document.getElementById('var05');
        var codPro      = document.getElementById('var06');
        var codPel      = document.getElementById('var07');
        var codGra      = document.getElementById('var08');
        var codHac      = document.getElementById('var09');
        var xDATA       = getAnimal(1, codEst.value, 0, codCat.value, codSub.value, codOrg.value, codRaz.value, codPro.value, codPel.value, codGra.value, codHac.value);
        tableData.clear().rows.add(xDATA).draw();
    });
});

function setAnimal(rowEspecie, rowEst, codElem, codAcc){
    var codEst		    = document.getElementById(rowEst);
    var xJSON           = getAnimal(2, codEst.value, codElem, 0, 0, 0, 0, 0, 0, 0, 0);
    var xJSON1          = getDominio('ANIMALCATEGORIA');
    var xJSON2          = getDominio('ANIMALSUBCATEGORIA');
    var xJSON3          = getDominio('ANIMALORIGEN');
    var xJSON4          = getDominio('ANIMALRAZA');
    var xJSON5          = getDominio('ANIMALRAZA');
    var xJSON6          = getDominio('ANIMALPELAJE');
    var xJSON7          = getDominio('ANIMALGRADOSANGRE');
    var xJSON8          = getDominio('ANIMALHACIENDA');
    var html            = '';
    var bodyCol         = '';
    var bodyTit         = '';
    var bodyMod         = '';
    var bodyOnl         = '';
    var bodyBot         = '';
    var selEstado       = '';
    var selCategoria    = '';
    var selSubCategoria = '';
    var selOrigen       = '';
    var selPropietario  = '';
    var selRaza         = '';
    var selPelaje       = '';
    var selSangre       = '';
    var selHacienda     = '';
    var inpCategoria    = 'var002';
    var inpSubCategoria = 'var003';
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
            '   <form id="form" data-parsley-validate method="post" action="../class/crud/animal.php">'+
            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
            '	    </div>'+
            '	    <div class="modal-body" >'+
            '           <div class="form-group">'+
            '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workPage" name="workPage" value="animal" class="form-control" type="hidden" required readonly>'+
            '               <input id="workEspecie" name="workEspecie" value="'+ rowEspecie +'" class="form-control" type="hidden" required readonly>'+
            '           </div>'+
            '           <div class="row pt-3">'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var001">Establecimiento</label>'+
            '                       <select id="var001" name="var001" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="Establecimiento">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var002">Categoría</label>'+
            '                       <select id="var002" name="var002" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="Categoría">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var003">SubCategoría</label>'+
            '                       <select id="var003" name="var003" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="SubCategoría">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var004">Origen</label>'+
            '                       <select id="var004" name="var004" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="Origen">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var005">Raza</label>'+
            '                       <select id="var005" name="var005" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="Raza">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var006">Propietario</label>'+
            '                       <select id="var006" name="var006" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="Propietario">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var007">Pelaje</label>'+
            '                       <select id="var007" name="var007" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="Pelaje">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var008">Grado Sangre</label>'+
            '                       <select id="var008" name="var008" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="Grado Sangre">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var009">Hacienda</label>'+
            '                       <select id="var009" name="var009" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="Hacienda">'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var010">Cód. Electrónico</label>'+
            '                       <input id="var010" name="var010" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código Electrónico" '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var011">Cód. RP</label>'+
            '                       <input id="var011" name="var011" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código RP" '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var012">Cód. HBP</label>'+
            '                       <input id="var012" name="var012" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código HBP" '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var013">Cód. SITRAP</label>'+
            '                       <input id="var013" name="var013" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código SITRAP" '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var014">Cód. Interno</label>'+
            '                       <input id="var014" name="var014" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código Interno" '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var015">Cód. Nombre</label>'+
            '                       <input id="var015" name="var015" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código Nombre" '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var016">OBSERVACIÓN</label>'+
            '                       <textarea id="var016" name="var016" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
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
			if (element.tipo_codigo == codElem) {
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
					'   <form id="form" data-parsley-validate method="post" action="../class/crud/dominio.php">'+
					'	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
					'		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
					'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'	    </div>'+
					'	    <div class="modal-body" >'+
					'           <div class="form-group">'+
					'               <input id="workDominio" name="workDominio" value="' + codDom + '" class="form-control" type="hidden" required readonly>'+
					'               <input id="workCodigo" name="workCodigo" value="'+ element.tipo_codigo +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workPage" name="workPage" value="dominio" class="form-control" type="hidden" required readonly>'+
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
					'                       <input id="var02" name="var02" value="'+ element.tipo_orden +'" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="NRO ORDEN" '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12 col-md-12">'+
					'                   <div class="form-group">'+
					'                       <label for="var03">TIPO</label>'+
					'                       <input id="var03" name="var03" value="'+ element.tipo_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="TIPO" required '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12 col-md-12">'+
					'                   <div class="form-group">'+
					'                       <label for="var04">PATH</label>'+
					'                       <input id="var04" name="var04" value="'+ element.tipo_path +'" class="form-control" type="text" style="text-transform:lowercase; height:40px;" placeholder="PATH" '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12">'+
					'                   <div class="form-group">'+
					'                       <label for="var05">OBSERVACIÓN</label>'+
					'                       <textarea id="var05" name="var05" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.tipo_observacion +'</textarea>'+
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
    
    selectEstablecimiento('var001'),
    selectDominio('var002', 'ANIMALCATEGORIA');
    changeCategoria(rowEspecie, 'var002', 'var003');
    selectDominio('var004', 'ANIMALORIGEN');
    selectDominio('var005', 'ANIMALRAZA');
    selectPropietario('var006', 'var001');
    selectDominio('var007', 'ANIMALPELAJE');
    selectDominio('var008', 'ANIMALGRADOSANGRE');
    selectDominio('var009', 'ANIMALHACIENDA');

    $('#var001').change(function() {
        selectPropietario('var006', 'var001');
    });

    $('#var002').change(function() {
        changeCategoria(rowEspecie, 'var002', 'var003');
    });
}