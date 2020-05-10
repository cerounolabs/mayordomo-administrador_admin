function getEstablecimiento(){
    if (localStorage.getItem('establecimientoJSON') === null){
        getJSON('establecimientoJSON', '000/establecimiento');
    }

    var xJSON = JSON.parse(localStorage.getItem('establecimientoJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            if (element.tipo_estado_codigo == 1) {
                xDATA.push(element);
            }
        });
    }

    return xDATA;
}

function getEstablecimientoId(codElem){
    if (localStorage.getItem('establecimientoJSON') === null){
        getJSON('establecimientoJSON', '000/establecimiento');
    }

    var xJSON = JSON.parse(localStorage.getItem('establecimientoJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            if (element.establecimiento_codigo == codElem) {
                xDATA.push(element);
            }
        });
    }

    return xDATA;
}

function getEstablecimientoDetalle(codElem){
    window.location.replace('../public/establecimiento_detalle.php?establecimiento='+codElem); 
}

function getPoblacionDetalle(codElem){
    var xDATA   = '';
    var xJSON   = JSON.parse(xDATA);
    var html    = '';
    var htmlBody= '';

    xJSON.forEach(element => {
        if (element.tipo_categoria_codigo == codElem) {
            var tableTR = 
            '                       <tr>'+
            '                           <td class="text-center"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modaldiv2" onclick="setPoblacion('+element.establecimiento_poblacion_codigo+', 2);" title="Ver"><i class="ti-eye"></i></button>&nbsp;<button type="button" class="btn btn-success" data-toggle="modal" data-target="#modaldiv2" onclick="setPoblacion('+element.establecimiento_poblacion_codigo+', 3);" title="Editar"><i class="ti-pencil"></i></button>&nbsp;<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modaldiv2" onclick="setPoblacion('+element.establecimiento_poblacion_codigo+', 4);" title="Eliminar"><i class="ti-trash"></i></button></th>'+
            '                           <td class="text-center">' + element.persona_completo + '</th>'+
            '                           <td class="text-center">' + element.tipo_origen_nombre + '</th>'+
            '                           <td class="text-center">' + element.tipo_raza_nombre + '</th>'+
            '                           <td class="text-center">' + element.tipo_categoria_nombre + '</th>'+
            '                           <td class="text-center">' + element.tipo_subcategoria_nombre + '</th>'+
            '                           <td class="text-center">' + element.establecimiento_poblacion_peso_promedio + '</th>'+
            '                           <td class="text-center">' + element.establecimiento_poblacion_cantidad + '</th>'+
            '                       </tr>';

            htmlBody    = htmlBody + tableTR;
        }
    });

    html =
        '<div class="modal-content">'+
        '   <div class="modal-header" style="color:#fff; background-color: #563dea;">'+
        '		<h4 class="modal-title" id="vcenter"> POBLACIÓN BOVINA </h4>'+
        '		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
        '	</div>'+
        '   <div class="modal-body" >'+
        '       <div class="row pt-3">'+
        '           <div class="table-responsive">'+
        '               <table id="tableDetalle" class="table v-middle" style="width: 100%;">'+
        '                   <thead>'+
        '                       <tr class="bg-light">'+
        '                           <th class="border-top-0 text-center">ACCIÓN</th>'+
        '                           <th class="border-top-0 text-center">PROPIETARIO</th>'+
        '                           <th class="border-top-0 text-center">ORIGEN</th>'+
        '                           <th class="border-top-0 text-center">RAZA</th>'+
        '                           <th class="border-top-0 text-center">CATEGORÍA</th>'+
        '                           <th class="border-top-0 text-center">SUBCATEGORÍA</th>'+
        '                           <th class="border-top-0 text-center">PESO PROMEDIO</th>'+
        '                           <th class="border-top-0 text-center">CANTIDAD</th>'+
        '                       </tr>'+
        '                   </thead>'+
        '                   <tbody>'+ htmlBody +
        '                   </tbody>'+
        '               </table>'+
        '           </div>'+
        '	    </div>'+
        '	</div>'+
        '</div>';

    $("#modalcontent").empty();
    $("#modalcontent").append(html);
}

function setEstablecimiento(codElem, codAcc, codPag){
    var xJSON       = getEstablecimientoId(codElem);
    var aJSON       = getEstablecimientoId(codElem);
    var xJSON1      = getDominio('ESTABLECIMIENTOTIPO');
    var xJSON2      = getDominio('ESTABLECIMIENTOFINALIDAD');
    var xJSON3      = getPersona();
    var xJSON4      = getDistrito();
    var html        = '';
    var bodyCol     = '';
    var bodyTit     = '';
    var bodyMod     = '';
    var bodyOnl     = '';
    var bodyBot     = '';
    var selEstado   = '';
    var selTipo     = '';
    var selFinalidad= '';
    var selPersona  = '';
    var selDistrito = '';
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
    
    switch (codPag) {
        case 1:
            codPag = 'establecimiento.php?';
            break;
    
        case 2:
            codPag = 'establecimiento_detalle.php?establecimiento=' + codElem + '&';
            break;
    }

    if (codAcc == 1) {
        xJSON1.forEach(element1 => {
            if (element1.tipo_estado_codigo == 1) {
                selTipo = selTipo + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
            }
        });

        xJSON2.forEach(element1 => {
            if (element1.tipo_estado_codigo == 1) {
                selFinalidad = selFinalidad + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
            }
        });

        xJSON3.forEach(element1 => {
            if (element1.tipo_estado_codigo == 1 && element1.tipo_persona_codigo == 12) {
                selPersona = selPersona + '                               <option value="'+ element1.persona_codigo +'">'+ element1.persona_completo + ' | ' + element1.persona_documento + ' | ' + element1.persona_codigo_sitrap + ' | ' + element1.persona_codigo_sigor + '</option>';
            }
        });

        xJSON4.forEach(element1 => {
            if (element1.tipo_estado_codigo == 1) {
                selDistrito = selDistrito + '                               <option value="'+ element1.distrito_codigo +'">'+ element1.pais_nombre + ' | ' + element1.departamento_nombre + ' | ' + element1.distrito_nombre + '</option>';
            }
        });

        html = 
            '<div class="modal-content">'+
            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento.php">'+
            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
            '	    </div>'+
            '	    <div class="modal-body" >'+
            '           <div class="form-group">'+
            '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workPage" name="workPage" value="'+ codPag +'" class="form-control" type="hidden" required readonly>'+
            '               <button type="button" class="btn btn-info mr-auto" onclick="setEstablecimientoPersona();" data-toggle="modal" data-target="#modal-dialog2"><i class="ti-plus"></i> Agregar Persona</button>'+
            '           </div>'+
            '           <div class="row pt-3">'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var01">ESTADO</label>'+
            '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Estado">'+
            '                               <option value="1">ACTIVO</option>'+
			'                               <option value="2">INACTIVO</option>'+
			'                               <option value="3">BLOQUEADO</option>'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
			'                   <div class="form-group">'+
			'                       <label for="var15">ORDEN</label>'+
			'                       <input id="var15" name="var15" value="" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="NRO ORDEN">'+
			'                   </div>'+
			'               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var02">TIPO ESTABLECIMIENTO</label>'+
            '                       <select id="var02" name="var02" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Tipo Establecimiento">'+ selTipo +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var03">TIPO FINALIDAD</label>'+
            '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Tipo Finalidad">'+ selFinalidad +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var04">ESTABLECIMIENTO</label>'+
            '                       <input id="var04" name="var04" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="ESTABLECIMIENTO" required>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var05">EMPRESA GANADERA</label>'+
            '                       <select id="var05" name="var05" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Empresa Ganadera">'+ selPersona + 
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var06">DISTRITO</label>'+
            '                       <select id="var06" name="var06" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Distrito">'+ selDistrito + 
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var07">TOTAL HECT&Aacute;REA</label>'+
            '                       <input id="var07" name="var07" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="TOTAL HECT&Aacute;REA">'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var08">CANTIDAD POTRERO</label>'+
            '                       <input id="var08" name="var08" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="CANTIDAD POTRERO">'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var09">C&Oacute;DIGO SENACSA</label>'+
            '                       <input id="var09" name="var09" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SENACSA">'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var10">C&Oacute;DIGO SIGOR</label>'+
            '                       <input id="var10" name="var10" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SIGOR">'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var11">C&Oacute;DIGO SITRAP</label>'+
            '                       <input id="var11" name="var11" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SITRAP">'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var12">LATITUD</label>'+
            '                       <input id="var12" name="var12" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="LATITUD">'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var13">LONGITUD</label>'+
            '                       <input id="var13" name="var13" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="LONGITUD">'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var14">OBSERVACIÓN</label>'+
            '                       <textarea id="var14" name="var14" value="" class="form-control" rows="5" style="text-transform:uppercase;"></textarea>'+
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
            if (element.establecimiento_codigo == codElem) {
                xJSON1.forEach(element1 => {
					if (element1.tipo_codigo == element.tipo_establecimiento_codigo) {
						selTipo = selTipo + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre + '</option>';
					} else {
						selTipo = selTipo + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre + '</option>';
					}
                });
                
                xJSON2.forEach(element1 => {
					if (element1.tipo_codigo == element.tipo_finalidad_codigo) {
						selFinalidad = selFinalidad + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre + '</option>';
					} else {
						selFinalidad = selFinalidad + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre + '</option>';
					}
				});

                xJSON3.forEach(element1 => {
                    if (element1.persona_codigo == element.persona_codigo) {
                        selPersona = selPersona + '                               <option value="'+ element1.persona_codigo +'" selected>'+ element1.persona_completo + ' | ' + element1.persona_documento + ' | ' + element1.persona_codigo_sitrap + ' | ' + element1.persona_codigo_sigor + '</option>';
                    } else {
                        selPersona = selPersona + '                               <option value="'+ element1.persona_codigo +'">'+ element1.persona_completo + ' | ' + element1.persona_documento + ' | ' + element1.persona_codigo_sitrap + ' | ' + element1.persona_codigo_sigor + '</option>';
                    }
                });

                xJSON4.forEach(element1 => {
                    if (element1.distrito_codigo == element.distrito_codigo) {
                        selDistrito = selDistrito + '                               <option value="'+ element1.distrito_codigo +'" selected>'+ element1.pais_nombre + ' | ' + element1.departamento_nombre + ' | ' + element1.distrito_nombre + '</option>';
                    } else {
                        selDistrito = selDistrito + '                               <option value="'+ element1.distrito_codigo +'">'+ element1.pais_nombre + ' | ' + element1.departamento_nombre + ' | ' + element1.distrito_nombre + '</option>';
                    }
                });

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
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="'+ codPag +'" class="form-control" type="hidden" required readonly>'+
                    '               <button type="button" class="btn btn-info mr-auto" onclick="setEstablecimientoPersona();" data-toggle="modal" data-target="#modal-dialog2"><i class="ti-plus"></i> Agregar Persona</button>'+
                    '           </div>'+
                    '           <div class="row pt-3">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var01">ESTADO</label>'+
                    '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Estado">'+ selEstado +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var15">ORDEN</label>'+
                    '                       <input id="var15" name="var15" value="'+ element.establecimiento_orden +'" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="NRO ORDEN" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var02">TIPO ESTABLECIMIENTO</label>'+
                    '                       <select id="var02" name="var02" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Tipo Establecimiento">'+ selTipo +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03">TIPO FINALIDAD</label>'+
                    '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Tipo Finalidad">'+ selFinalidad +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var04">ESTABLECIMIENTO</label>'+
                    '                       <input id="var04" name="var04" value="'+ element.establecimiento_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="ESTABLECIMIENTO" required '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var05">EMPRESA GANADERA</label>'+
                    '                       <select id="var05" name="var05" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Empresa Ganadera">'+ selPersona + 
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var06">DISTRITO</label>'+
                    '                       <select id="var06" name="var06" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Distrito">'+ selDistrito + 
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var07">TOTAL HECT&Aacute;REA</label>'+
                    '                       <input id="var07" name="var07" value="'+ element.establecimiento_total_hectarea +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="TOTAL HECT&Aacute;REA" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var08">CANTIDAD POTRERO</label>'+
                    '                       <input id="var08" name="var08" value="'+ element.establecimiento_total_potrero +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="CANTIDAD POTRERO" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var09">C&Oacute;DIGO SENACSA</label>'+
                    '                       <input id="var09" name="var09" value="'+ element.establecimiento_codigo_senacsa +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SENACSA" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var10">C&Oacute;DIGO SIGOR</label>'+
                    '                       <input id="var10" name="var10" value="'+ element.establecimiento_codigo_sigor +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SIGOR" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var11">C&Oacute;DIGO SITRAP</label>'+
                    '                       <input id="var11" name="var11" value="'+ element.establecimiento_codigo_sitrap +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SITRAP" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var12">LATITUD</label>'+
                    '                       <input id="var12" name="var12" value="'+ element.establecimiento_latitud +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="LATITUD" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var13">LONGITUD</label>'+
                    '                       <input id="var13" name="var13" value="'+ element.establecimiento_longitud +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="LONGITUD" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var14">OBSERVACIÓN</label>'+
                    '                       <textarea id="var14" name="var14" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_observacion +'</textarea>'+
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
			'						<td class="border-top-0">'+ element.establecimiento_orden +'</td>'+
			'						<td class="border-top-0">'+ element.tipo_estado_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.establecimiento_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.tipo_establecimiento_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.tipo_finalidad_nombre +'</td>'+
            '						<td class="border-top-0">'+ element.distrito_nombre +'</td>'+
            '						<td class="border-top-0">'+ element.persona_completo +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_codigo_senacsa +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_codigo_sigor +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_codigo_sitrap +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_total_hectarea +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_total_potrero +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_latitud +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_longitud +'</td>'+
			'						<td class="border-top-0">'+ element.establecimiento_observacion +'</td>'+
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
        '						<th class="border-top-0">ESTABLECIMIENTO</th>'+
		'						<th class="border-top-0">TIPO</th>'+
		'						<th class="border-top-0">FINALIDAD</th>'+
        '						<th class="border-top-0">DISTRITO</th>'+
        '						<th class="border-top-0">PROPIETARIO</th>'+
        '						<th class="border-top-0">COD. SENACSA</th>'+
        '						<th class="border-top-0">COD. SIGOR</th>'+
        '						<th class="border-top-0">COD. SITRAP</th>'+
        '						<th class="border-top-0">DIMENSIÓN</th>'+
        '						<th class="border-top-0">CANT POTRERO</th>'+
        '						<th class="border-top-0">LATITUD</th>'+
        '						<th class="border-top-0">LONGITUD</th>'+
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

function setPoblacion(codElem, codAcc){
	var xJSON       = getEstablecimientoPoblacion(codElem);
	var html        = '';
	var bodyCol     = '';
	var bodyTit     = '';
	var bodyMod     = '';
	var bodyOnl     = '';
	var bodyBot     = '';
	var selEstado   = '';

	switch (codAcc) {
		case 1:
			bodyTit = 'POBLACIÓN NUEVO';
			bodyCol = '#4798e8;';
			bodyMod = 'C';
			bodyOnl = '';
			bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
			break;

		case 2:
			bodyTit = 'POBLACIÓN VER';
			bodyCol = '#563dea;';
			bodyMod = 'R';
			bodyOnl = 'readonly';
			bodyBot = '';
			break;

		case 3:
			bodyTit = 'POBLACIÓN EDITAR';
			bodyCol = '#1ca58f;';
			bodyMod = 'U';
			bodyOnl = '';
			bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
			break;

		case 4:
			bodyTit = 'POBLACIÓN ELIMINAR';
			bodyCol = '#eb4c4c;';
			bodyMod = 'D';
			bodyOnl = 'readonly';
			bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
			break;
	
		default:
			break;
	}

	if (codAcc != 1) {
		xJSON.forEach(element => {
			if (element.establecimiento_poblacion_codigo == codElem) {
				html =
					'<div class="modal-content">'+
					'   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_poblacion.php">'+
					'       <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
					'		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
					'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'	    </div>'+
					'       <div class="modal-body" >'+
					'           <div class="form-group">'+
					'               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_poblacion_codigo +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
					'               <input id="workCount" name="workCount" value="1" class="form-control" type="hidden" required readonly>'+
					'           </div>'+
					'           <div class="row pt-3">'+
					'               <div class="col-sm-4">'+
					'                   <div class="form-group">'+
					'                       <label for="var101_1">PROPIETARIO</label>'+
					'                       <select id="var101_1" name="var101_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
					'                           <optgroup label="Propietario">'+
					'                               <option value="' + element.persona_codigo + '">' + element.persona_completo + '</option>'+
					'                           </optgroup>'+
					'                       </select>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-4">'+
					'                   <div class="form-group">'+
					'                       <label for="var102_1">ORIGEN</label>'+
					'                       <select id="var102_1" name="var102_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
					'                           <optgroup label="Origen">'+
					'                               <option value="' + element.tipo_origen_codigo + '">' + element.tipo_origen_nombre + '</option>'+
					'                           </optgroup>'+
					'                       </select>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-4">'+
					'                   <div class="form-group">'+
					'                       <label for="var103_1">RAZA</label>'+
					'                       <select id="var103_1" name="var103_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
					'                           <optgroup label="Raza">'+
					'                               <option value="' + element.tipo_raza_codigo + '">' + element.tipo_raza_nombre + '</option>'+
					'                           </optgroup>'+
					'                       </select>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-4">'+
					'                   <div class="form-group">'+
					'                       <label for="var104_1">CATEGOR&Iacute;A - SUBCATEGOR&Iacute;A</label>'+
					'                       <select id="var104_1" name="var104_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
					'                           <optgroup label="Categoría - SubCategoría">'+
					'                               <option value="' + element.tipo_categoria_codigo + '_' + element.tipo_subcategoria_codigo + '">' + element.tipo_categoria_nombre + ' - ' + element.tipo_subcategoria_nombre + '</option>'+
					'                           </optgroup>'+
					'                       </select>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-4">'+
					'                   <div class="form-group">'+
					'                       <label for="var105_1">PESO PROMEDIO</label>'+
					'                       <input type="number" class="form-control" id="var105_1" name="var105_1" value="' + element.establecimiento_poblacion_peso_promedio + '" step=".01" style="width:100%; height:40px;" '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-4">'+
					'                   <div class="form-group">'+
					'                       <label for="var106_1">CANTIDAD</label>'+
					'                       <input type="number" class="form-control" id="var106_1" name="var106_1" value="' + element.establecimiento_poblacion_cantidad + '" min="1" style="width:100%; height:40px;" '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12">'+
					'                   <div class="form-group">'+
					'                       <label for="var107_1">OBSERVACIÓN</label>'+
					'                       <textarea id="var107_1" name="var107_1" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_poblacion_observacion +'</textarea>'+
					'                   </div>'+
					'               </div>'+
					'           </div>'+
					'       </div>'+
					'	    <div class="modal-footer">'+ bodyBot +
					'		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
					'	    </div>'+
					'   </form>'+
					'</div>';
			}
		});
	}

	$("#modalcontent2").empty();
	$("#modalcontent2").append(html);
}

function setPersona2(){
    var xJSON1      = getDominio('PERSONATIPO');
    var xJSON2      = getDominio('PERSONADOCUMENTO');
    var html        = '';
    var selTipo     = '';
    var selDocumento= '';

    xJSON1.forEach(element1 => {
        if (element1.tipo_estado_codigo == 1) {
            selTipo = selTipo + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
        }
    });

    xJSON2.forEach(element1 => {
        if (element1.tipo_estado_codigo == 1) {
            selDocumento = selDocumento + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
        }
    });

    html = 
        '<div class="modal-content">'+
        '   <form id="form" data-parsley-validate method="post" action="../class/crud/persona.php">'+
        '       <div class="modal-header" style="color:#fff; background: #2585e4;">'+
        '		    <h4 class="modal-title" id="vcenter"> PERSONA</h4>'+
        '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
        '	    </div>'+
        '       <div class="modal-body" >'+
        '           <div class="form-group">'+
        '               <input type="hidden" class="form-control" id="workCodigo" name="workCodigo" value="" required readonly>'+
        '               <input type="hidden" class="form-control" id="workModo" name="workModo" value="C" required readonly>'+
        '               <input type="hidden" class="form-control" id="workPage" name="workPage" value="establecimiento.php?" required readonly>'+
        '           </div>'+
        '           <div class="row pt-3">'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var102">TIPO PERSONA</label>'+
        '                       <select id="var102" name="var102" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
        '                           <optgroup label="Tipo Persona">'+ selTipo +
        '                           </optgroup>'+
        '                       </select>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var103">TIPO DOCUMENTO</label>'+
        '                       <select id="var103" name="var103" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
        '                           <optgroup label="Tipo Documento">'+ selDocumento +
        '                           </optgroup>'+
        '                       </select>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var104">DOCUMENTO</label>'+
        '                       <input id="var104" name="var104" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="NRO DOCUMENTO" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var105">PERSONA / EMPRESA</label>'+
        '                       <input id="var105" name="var105" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="PERSONA / EMPRESA" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var106">SIGLAS SITRAP</label>'+
        '                       <input id="var106" name="var106" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="SIGLAS SITRAP" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var107">C&Oacute;DIGO SIGOR</label>'+
        '                       <input id="var107" name="var107" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SIGOR" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var108">TEL&Eacute;FONO</label>'+
        '                       <input id="var108" name="var108" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="TEL&Eacute;FONO" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var109">EMAIL</label>'+
        '                       <input id="var109" name="var109" class="form-control" type="email" style="text-transform:lowercase; height:40px;" placeholder="EMAIL" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-12">'+
        '                   <div class="form-group">'+
        '                       <label for="var110">OBSERVACI&Oacute;N</label>'+
        '                       <textarea id="var110" name="var110" class="form-control" rows="5" style="text-transform:uppercase;"></textarea>'+
        '                   </div>'+
        '               </div>'+
        '           </div>'+
        '       </div>'+
        '	    <div class="modal-footer">'+
        '           <button type="submit" class="btn btn-info">Agregar</button>'+
        '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
        '	    </div>'+
        '   </form>'+
        '</div>';

    $("#modal-content2").empty();
    $("#modal-content2").append(html);
}

function setSeccion(codElem, codAcc){
    var xJSON       = JSON.parse(localStorage.getItem("seccionJSON"))['data'];
    var html        = '';
    var bodyCol     = '';
    var bodyTit     = '';
    var bodyMod     = '';
    var bodyOnl     = '';
    var bodyBot     = '';
    var selEstado   = '';

    switch (codAcc) {
        case 1:
            bodyTit = 'SECCIÓN NUEVO';
            bodyCol = '#4798e8;';
            bodyMod = 'C';
            bodyOnl = '';
            bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
            break;

        case 2:
            bodyTit = 'SECCIÓN VER';
            bodyCol = '#563dea;';
            bodyMod = 'R';
            bodyOnl = 'readonly';
            bodyBot = '';
            break;

        case 3:
            bodyTit = 'SECCIÓN EDITAR';
            bodyCol = '#1ca58f;';
            bodyMod = 'U';
            bodyOnl = '';
            bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
            break;

        case 4:
            bodyTit = 'SECCIÓN ELIMINAR';
            bodyCol = '#eb4c4c;';
            bodyMod = 'D';
            bodyOnl = 'readonly';
            bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
            break;
    
        default:
            break;
    }

    if (codAcc == 1) {
        html = 
            '<div class="modal-content">'+
            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_seccion.php">'+
            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
            '	    </div>'+
            '	    <div class="modal-body" >'+
            '           <div class="form-group">'+
            '               <input id="workEstablecimiento" name="workEstablecimiento" value="" class="form-control" type="hidden" required readonly>'+
            '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
            '           </div>'+
            '           <div class="row pt-3">'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var01">ESTADO</label>'+
            '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
            '                           <optgroup label="Estado">'+
            '                               <option value="1">HABILITADO</option>'+
            '                               <option value="2">DESHABILITADO</option>'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-8">'+
            '                   <div class="form-group">'+
            '                       <label for="var02">SECCIÓN</label>'+
            '                       <input id="var02" name="var02" value="" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="SECCIÓN" required '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var03">OBSERVACIÓN</label>'+
            '                       <textarea id="var03" name="var03" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
            '                   </div>'+
            '               </div>'+
            '           </div>'+
            '	    </div>'+
            '	    <div class="modal-footer">'+ bodyBot +
            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
            '	    </div>'+
            '   </form>'+
            '</div>';
    } else {
        xJSON.forEach(element => {
            if (element.establecimiento_seccion_codigo == codElem) {
                if (element.tipo_estado_codigo == 1){
                    selEstado = 
                    '                               <option value="1" selected>HABILITADO</option>'+
                    '                               <option value="2">DESHABILITADO</option>';
                } else {
                    selEstado = 
                    '                               <option value="1">HABILITADO</option>'+
                    '                               <option value="2" selected>DESHABILITADO</option>';
                }

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_seccion.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_seccion_codigo +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                    '           </div>'+
                    '           <div class="row pt-3">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var01">ESTADO</label>'+
                    '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Estado">'+ selEstado +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-8">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var02">SECCIÓN</label>'+
                    '                       <input id="var02" name="var02" value="'+ element.establecimiento_seccion_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="SECCIÓN" required '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03">OBSERVACIÓN</label>'+
                    '                       <textarea id="var03" name="var03" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_seccion_observacion +'</textarea>'+
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
    }

    $("#modalcontent").empty();
    $("#modalcontent").append(html);
}

function setPotrero(codElem, codAcc){
    var xJSON       = JSON.parse(localStorage.getItem("potreroJSON"))['data'];
    var xJSON1      = JSON.parse(localStorage.getItem("dominioJSON"))['data'];
    var xJSON2      = JSON.parse(localStorage.getItem("seccionJSON"))['data'];
    var html        = '';
    var bodyCol     = '';
    var bodyTit     = '';
    var bodyMod     = '';
    var bodyOnl     = '';
    var bodyBot     = '';
    var selEstado   = '';
    var selPastura1 = '';
    var selPastura2 = '';
    var selSeccion  = '';

    switch (codAcc) {
        case 1:
            bodyTit = 'POTRERO NUEVO';
            bodyCol = '#4798e8;';
            bodyMod = 'C';
            bodyOnl = '';
            bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
            break;

        case 2:
            bodyTit = 'POTRERO VER';
            bodyCol = '#563dea;';
            bodyMod = 'R';
            bodyOnl = 'readonly';
            bodyBot = '';
            break;

        case 3:
            bodyTit = 'POTRERO EDITAR';
            bodyCol = '#1ca58f;';
            bodyMod = 'U';
            bodyOnl = '';
            bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
            break;

        case 4:
            bodyTit = 'POTRERO ELIMINAR';
            bodyCol = '#eb4c4c;';
            bodyMod = 'D';
            bodyOnl = 'readonly';
            bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
            break;
    
        default:
            break;
    }

    if (codAcc == 1) {
        xJSON1.forEach(element1 => {
            if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'ESTABLECIMIENTOPASTURA') {
                selPastura1 = selPastura1 + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                selPastura2 = selPastura2 + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
            }
        });

        xJSON2.forEach(element1 => {
            if (element1.tipo_estado_codigo == 1) {
                selSeccion = selSeccion + '                               <option value="'+ element1.establecimiento_seccion_codigo +'">'+ element1.establecimiento_seccion_nombre +'</option>';
            }
        });

        html = 
            '<div class="modal-content">'+
            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_potrero.php">'+
            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
            '	    </div>'+
            '	    <div class="modal-body" >'+
            '           <div class="form-group">'+
            '               <input id="workEstablecimiento" name="workEstablecimiento" value="" class="form-control" type="hidden" required readonly>'+
            '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
            '           </div>'+
            '           <div class="row pt-3">'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var01">ESTADO</label>'+
            '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
            '                           <optgroup label="Estado">'+
            '                               <option value="1">HABILITADO</option>'+
            '                               <option value="2">DESHABILITADO</option>'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var02">TIPO PASTURA 1</label>'+
            '                       <select id="var02" name="var02" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Tipo Pastura 1">'+ selPastura1 +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var03">TIPO PASTURA 2</label>'+
            '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Tipo Pastura 2">'+ selPastura2 +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var04">SECCIÓN</label>'+
            '                       <select id="var04" name="var04" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Sección">'+ selSeccion + 
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-8">'+
            '                   <div class="form-group">'+
            '                       <label for="var05">POTRERO</label>'+
            '                       <input id="var05" name="var05" value="" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="POTRERO" required '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var06">DIMENSIÓN</label>'+
            '                       <input id="var06" name="var06" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="DIMENSIÓN">'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var07">CAPACIDAD RECEPTIVDAD</label>'+
            '                       <input id="var07" name="var07" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="CAPACIDAD RECEPTIVDAD">'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var08">OBSERVACIÓN</label>'+
            '                       <textarea id="var08" name="var08" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
            '                   </div>'+
            '               </div>'+
            '           </div>'+
            '	    </div>'+
            '	    <div class="modal-footer">'+ bodyBot +
            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
            '	    </div>'+
            '   </form>'+
            '</div>';
    } else {
        xJSON.forEach(element => {
            if (element.establecimiento_potrero_codigo == codElem) {
                if (element.tipo_estado_codigo == 1){
                    selEstado = 
                    '                               <option value="1" selected>HABILITADO</option>'+
                    '                               <option value="2">DESHABILITADO</option>';
                } else {
                    selEstado = 
                    '                               <option value="1">HABILITADO</option>'+
                    '                               <option value="2" selected>DESHABILITADO</option>';
                }

                xJSON1.forEach(element1 => {
                    if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'ESTABLECIMIENTOPASTURA') {
                        if (element1.tipo_codigo == element.tipo_pastura1_codigo) {
                            selPastura1 = selPastura1 + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                        } else {
                            selPastura1 = selPastura1 + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                        }

                        if (element1.tipo_codigo == element.tipo_pastura2_codigo) {
                            selPastura2 = selPastura2 + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                        } else {
                            selPastura2 = selPastura2 + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                        }
                    }
                });

                xJSON2.forEach(element1 => {
                    if (element1.tipo_estado_codigo == 1) {
                        if (element1.establecimiento_seccion_codigo == element.establecimiento_seccion_codigo) {
                            selSeccion = selSeccion + '                               <option value="'+ element1.establecimiento_seccion_codigo +'" selected>'+ element1.establecimiento_seccion_nombre +'</option>';
                        } else {
                            selSeccion = selSeccion + '                               <option value="'+ element1.establecimiento_seccion_codigo +'">'+ element1.establecimiento_seccion_nombre +'</option>';
                        }
                    }
                });

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_potrero.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_potrero_codigo +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                    '           </div>'+
                    '           <div class="row pt-3">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var01">ESTADO</label>'+
                    '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Estado">'+ selEstado +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var02">TIPO PASTURA 1</label>'+
                    '                       <select id="var02" name="var02" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Tipo Pastura 1">'+ selPastura1 +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03">TIPO PASTURA 2</label>'+
                    '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Tipo Pastura 2">'+ selPastura2 +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var04">SECCIÓN</label>'+
                    '                       <select id="var04" name="var04" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Sección">'+ selSeccion +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-8">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var05">POTRERO</label>'+
                    '                       <input id="var05" name="var05" value="'+ element.establecimiento_potrero_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="POTRERO" required '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var06">DIMENSIÓN</label>'+
                    '                       <input id="var06" name="var06" value="'+ element.establecimiento_potrero_hectarea +'" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="DIMENSIÓN"  '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var07">CAPACIDAD RECEPTIVDAD</label>'+
                    '                       <input id="var07" name="var07" value="'+ element.establecimiento_potrero_capacidad +'" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="CAPACIDAD RECEPTIVDAD"  '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var08">OBSERVACIÓN</label>'+
                    '                       <textarea id="var08" name="var08" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_potrero_observacion +'</textarea>'+
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
    }

    $("#modalcontent").empty();
    $("#modalcontent").append(html);
}

function setLote(codElem, codAcc){
    var xJSON       = JSON.parse(localStorage.getItem("loteJSON"))['data'];
    var html        = '';
    var bodyCol     = '';
    var bodyTit     = '';
    var bodyMod     = '';
    var bodyOnl     = '';
    var bodyBot     = '';
    var selEstado   = '';

    switch (codAcc) {
        case 1:
            bodyTit = 'LOTE NUEVO';
            bodyCol = '#4798e8;';
            bodyMod = 'C';
            bodyOnl = '';
            bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
            break;

        case 2:
            bodyTit = 'LOTE VER';
            bodyCol = '#563dea;';
            bodyMod = 'R';
            bodyOnl = 'readonly';
            bodyBot = '';
            break;

        case 3:
            bodyTit = 'LOTE EDITAR';
            bodyCol = '#1ca58f;';
            bodyMod = 'U';
            bodyOnl = '';
            bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
            break;

        case 4:
            bodyTit = 'LOTE ELIMINAR';
            bodyCol = '#eb4c4c;';
            bodyMod = 'D';
            bodyOnl = 'readonly';
            bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
            break;
    
        default:
            break;
    }

    if (codAcc == 1) {
        html = 
            '<div class="modal-content">'+
            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_lote.php">'+
            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
            '	    </div>'+
            '	    <div class="modal-body" >'+
            '           <div class="form-group">'+
            '               <input id="workEstablecimiento" name="workEstablecimiento" value="" class="form-control" type="hidden" required readonly>'+
            '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
            '           </div>'+
            '           <div class="row pt-3">'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var01">ESTADO</label>'+
            '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
            '                           <optgroup label="Estado">'+
            '                               <option value="1">HABILITADO</option>'+
            '                               <option value="2">DESHABILITADO</option>'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-8">'+
            '                   <div class="form-group">'+
            '                       <label for="var02">LOTE</label>'+
            '                       <input id="var02" name="var02" value="" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="LOTE" required '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var03">OBSERVACIÓN</label>'+
            '                       <textarea id="var03" name="var03" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
            '                   </div>'+
            '               </div>'+
            '           </div>'+
            '	    </div>'+
            '	    <div class="modal-footer">'+ bodyBot +
            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
            '	    </div>'+
            '   </form>'+
            '</div>';
    } else {
        xJSON.forEach(element => {
            if (element.establecimiento_lote_codigo == codElem) {
                if (element.tipo_estado_codigo == 1){
                    selEstado = 
                    '                               <option value="1" selected>HABILITADO</option>'+
                    '                               <option value="2">DESHABILITADO</option>';
                } else {
                    selEstado = 
                    '                               <option value="1">HABILITADO</option>'+
                    '                               <option value="2" selected>DESHABILITADO</option>';
                }

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_lote.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_lote_codigo +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                    '           </div>'+
                    '           <div class="row pt-3">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var01">ESTADO</label>'+
                    '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Estado">'+ selEstado +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-8">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var02">LOTE</label>'+
                    '                       <input id="var02" name="var02" value="'+ element.establecimiento_lote_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="LOTE" required '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03">OBSERVACIÓN</label>'+
                    '                       <textarea id="var03" name="var03" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_lote_observacion +'</textarea>'+
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
    }

    $("#modalcontent").empty();
    $("#modalcontent").append(html);
}

function setPersona(codElem, codAcc){
    var xJSON       = JSON.parse(localStorage.getItem("personaJSON"))['data'];
    var xJSON1      = JSON.parse(localStorage.getItem("dominioJSON"))['data'];
    var xJSON2      = JSON.parse(localStorage.getItem("personasJSON"))['data'];
    var html        = '';
    var bodyCol     = '';
    var bodyTit     = '';
    var bodyMod     = '';
    var bodyOnl     = '';
    var bodyBot     = '';
    var selEstado   = '';
    var selUsuario  = '';
    var selPersona  = '';

    switch (codAcc) {
        case 1:
            bodyTit = 'PERSONA NUEVA';
            bodyCol = '#4798e8;';
            bodyMod = 'C';
            bodyOnl = '';
            bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
            break;

        case 2:
            bodyTit = 'PERSONA VER';
            bodyCol = '#563dea;';
            bodyMod = 'R';
            bodyOnl = 'readonly';
            bodyBot = '';
            break;

        case 3:
            bodyTit = 'PERSONA EDITAR';
            bodyCol = '#1ca58f;';
            bodyMod = 'U';
            bodyOnl = '';
            bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
            break;

        case 4:
            bodyTit = 'PERSONA ELIMINAR';
            bodyCol = '#eb4c4c;';
            bodyMod = 'D';
            bodyOnl = 'readonly';
            bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
            break;
    
        default:
            break;
    }

    if (codAcc == 1) {
        xJSON1.forEach(element1 => {
            if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'USUARIOROL') {
                selUsuario = selUsuario + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
            }
        });

        xJSON2.forEach(element2 => {
            if (element2.tipo_estado_codigo == 1) {
                selPersona = selPersona + '                               <option value="'+ element2.persona_codigo +'">'+ element2.persona_completo + ' | ' + element2.persona_documento + ' | ' + element2.persona_codigo_sitrap + ' | ' + element2.persona_codigo_sigor + '</option>';
            }
        });

        html = 
            '<div class="modal-content">'+
            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_persona.php">'+
            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
            '	    </div>'+
            '	    <div class="modal-body" >'+
            '           <div class="form-group">'+
            '               <input id="workEstablecimiento" name="workEstablecimiento" value="" class="form-control" type="hidden" required readonly>'+
            '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
            '               <input id="workCount" name="workCount" value="1" class="form-control" type="hidden" required readonly>'+
            '           </div>'+
            '           <div class="row pt-3">'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var01_1">ESTADO</label>'+
            '                       <select id="var01_1" name="var01_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
            '                           <optgroup label="Estado">'+
            '                               <option value="1">HABILITADO</option>'+
            '                               <option value="2">DESHABILITADO</option>'+
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var02_1">TIPO USUARIO</label>'+
            '                       <select id="var02_1" name="var02_1" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Tipo Usuario">'+ selUsuario +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var03_1">PERSONA</label>'+
            '                       <select id="var03_1" name="var03_1" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Persona">'+ selPersona +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var04_1">OBSERVACIÓN</label>'+
            '                       <textarea id="var04_1" name="var04_1" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
            '                   </div>'+
            '               </div>'+
            '           </div>'+
            '	    </div>'+
            '	    <div class="modal-footer">'+ bodyBot +
            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
            '	    </div>'+
            '   </form>'+
            '</div>';
    } else {
        xJSON.forEach(element => {
            if (element.establecimiento_persona_codigo == codElem) {
                if (element.tipo_estado_codigo == 1){
                    selEstado = 
                    '                               <option value="1" selected>HABILITADO</option>'+
                    '                               <option value="2">DESHABILITADO</option>';
                } else {
                    selEstado = 
                    '                               <option value="1">HABILITADO</option>'+
                    '                               <option value="2" selected>DESHABILITADO</option>';
                }

                xJSON1.forEach(element1 => {
                    if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'USUARIOROL') {
                        if (element1.tipo_codigo == element.tipo_usuario_codigo) {
                            selUsuario = selUsuario + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                        } else {
                            selUsuario = selUsuario + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                        }
                    }
                });

                xJSON2.forEach(element2 => {
                    if (element2.tipo_estado_codigo == 1) {
                        if (element2.persona_codigo == element.persona_codigo) {
                            selPersona = selPersona + '                               <option value="'+ element2.persona_codigo +'" selected>'+ element2.persona_completo + ' | ' + element2.persona_documento + ' | ' + element2.persona_codigo_sitrap + ' | ' + element2.persona_codigo_sigor + '</option>';
                        } else {
                            selPersona = selPersona + '                               <option value="'+ element2.persona_codigo +'">'+ element2.persona_completo + ' | ' + element2.persona_documento + ' | ' + element2.persona_codigo_sitrap + ' | ' + element2.persona_codigo_sigor + '</option>';
                        }                                
                    }
                });

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_persona.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_persona_codigo +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCount" name="workCount" value="1" class="form-control" type="hidden" required readonly>'+
                    '           </div>'+
                    '           <div class="row pt-3">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var101_1">ESTADO</label>'+
                    '                       <select id="var101_1" name="var101_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Estado">'+ selEstado +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var102_1">TIPO USUARIO</label>'+
                    '                       <select id="var102_1" name="var102_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Tipo Usuario">'+ selUsuario +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var103_1">PERSONA</label>'+
                    '                       <select id="var103_1" name="var103_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Persona">'+ selPersona +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var104_1">OBSERVACIÓN</label>'+
                    '                       <textarea id="var104_1" name="var104_1" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>' + element.establecimiento_persona_observacion +'</textarea>'+
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
    }

    $("#modal-content2").empty();
    $("#modal-content2").append(html);
}