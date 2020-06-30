function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
}

function sumaTotalPoblacion() {
    var rowTotDes   = document.getElementById("tot01");
    var rowTotVaq   = document.getElementById("tot02");
    var rowTotVac   = document.getElementById("tot03");
    var rowTotNov   = document.getElementById("tot04");
    var rowTotSen   = document.getElementById("tot05");
    var rowTotBue   = document.getElementById("tot06");
    var rowTotTor   = document.getElementById("tot07");
    var rowTotAdu   = document.getElementById("tot08");
    var rowTotTer   = document.getElementById("tot09");
    var rowTotGen   = document.getElementById("tot10");

    var cantDes     = 0;
    var cantVaq     = 0;
    var cantVac     = 0;
    var cantNov     = 0;
    var cantSen     = 0;
    var cantBue     = 0;
    var cantTor     = 0;
    var cantAdu     = 0;
    var cantTer     = 0;
    var cantGen     = 0;

    for (let index = 1; index < 100; index++) {
        var existeSiNo = isInPage(document.getElementById("var104_"+index));

        if (existeSiNo != false) {
            var rowCate = document.getElementById("var104_"+index).value;
            var rowCant = Number(document.getElementById('var106_'+index).value);
            var rowPos  = rowCate.search('_');      
            rowCate     = Number(rowCate.substr(0, rowPos));

            switch (rowCate) {
                case 41:
                    cantBue = cantBue + rowCant;
                    break;

                case 42:
                    cantDes = cantDes + rowCant;
                    break;
                    
                case 43:
                    cantNov = cantNov + rowCant;
                    break;

                case 44:
                    cantSen = cantSen + rowCant;
                    break;

                case 45:
                    cantTer = cantTer + rowCant;
                    break;

                case 46:
                    cantTor = cantTor + rowCant;
                    break;

                case 47:
                    cantVac = cantVac + rowCant;
                    break;

                case 48:
                    cantVaq = cantVaq + rowCant;
                    break;
            }

            rowCant = 0;
        }
    }

    rowTotDes.innerHTML = cantDes;
    rowTotVaq.innerHTML = cantVaq;
    rowTotVac.innerHTML = cantVac;
    rowTotNov.innerHTML = cantNov;
    rowTotSen.innerHTML = cantSen;
    rowTotBue.innerHTML = cantBue;
    rowTotTor.innerHTML = cantTor;
    rowTotAdu.innerHTML = cantDes + cantVaq + cantVac + cantNov + cantSen + cantBue + cantTor;
    rowTotTer.innerHTML = cantTer;
    rowTotGen.innerHTML = cantDes + cantVaq + cantVac + cantNov + cantSen + cantBue + cantTor + cantTer;
}

function selectPropietario(codElem, valRow, indRow) {
    var xJSON   = getPropietario(codElem);
    var xSELC   = document.getElementById(valRow + '_' + indRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1 && element.tipo_rol_codigo == 49) {
            var option      = document.createElement('option');
            option.value    = element.persona_codigo;
            option.text     = element.persona_completo;                    
            xSELC.add(option, null);
        }
    });
}

function selectOrigen(valRow, indRow) {
    var xJSON   = getDominio('ANIMALORIGEN');
    var xSELC   = document.getElementById(valRow + '_' + indRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var option      = document.createElement('option');
            option.value    = element.tipo_codigo;
            option.text     = element.tipo_nombre;                    
            xSELC.add(option, null);
        }
    });
}

function selectRaza(valRow, indRow) {
    var xJSON   = getDominio('ANIMALRAZA');
    var xSELC   = document.getElementById(valRow + '_' + indRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var option      = document.createElement('option');
            option.value    = element.tipo_codigo;
            option.text     = element.tipo_nombre;                    
            xSELC.add(option, null);
        }
    });
}

function selectCategoria(valRow, indRow) {
    var xJSON   = getDominio('ANIMALCATEGORIA');
    var xJSON1  = getDominioTri('ANIMALESPECIECATEGORIASUBCATEGORIA');
    var xSELC   = document.getElementById(valRow + '_' + indRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var optgroup    = document.createElement('optgroup');
            optgroup.label  = element.tipo_nombre;

            xJSON1.forEach(element1 => {
                if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio1_codigo == 26 && element1.tipo_dominio2_codigo == element.tipo_codigo) {
                    var option      = document.createElement('option');
                    option.value    = element1.tipo_dominio2_codigo + '_' + element1.tipo_dominio3_codigo;
                    option.text     = element1.tipo_dominio2_nombre + ' - ' + element1.tipo_dominio3_nombre;
                    optgroup.appendChild(option);
                }
            });

            xSELC.add(optgroup, null);
        }
    });
}

function getTitle(codElem) {
    var titEst  = document.getElementById('titleEstablecimiento');
    var estJSON = getEstablecimientoId(codElem);

	estJSON.forEach(element => {
		titEst.innerHTML = element.establecimiento_nombre + ' ' + element.establecimiento_codigo_sigor
	});
}

function getEstablecimientoDetalle(codElem){
    window.location.replace('../public/establecimiento_detalle.php?establecimiento='+codElem); 
}

function getPoblacionDetalle(codElem, codEst){
    var xJSON   = getPoblacion(codEst);
    var html    = '';
    var htmlBody= '';

    xJSON.forEach(element => {
        if (element.tipo_categoria_codigo == codElem) {
            var btnDSP	= '<button onclick="setPoblacion('+ element.establecimiento_poblacion_codigo +', 2, '+ codEst +');" title="Ver" type="button" class="btn btn-primary btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog2"><i class="fa fa-eye"></i></button>';
            var btnUPD	= '<button onclick="setPoblacion('+ element.establecimiento_poblacion_codigo +', 3, '+ codEst +');" title="Editar" type="button" class="btn btn-success btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog2"><i class="fa fa-edit"></i></button>';
            var btnDLT	= '<button onclick="setPoblacion('+ element.establecimiento_poblacion_codigo +', 4, '+ codEst +');" title="Eliminar" type="button" class="btn btn-danger btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog2"><i class="fa fa-eraser"></i></button>';
            var tableTR = 
            '                       <tr>'+
            '                           <td class="text-center">'+ btnDSP + '&nbsp;' + btnUPD + '&nbsp;' + btnDLT + '</td>'+
            '                           <td class="text-center">' + element.persona_completo + '</td>'+
            '                           <td class="text-center">' + element.tipo_origen_nombre + '</td>'+
            '                           <td class="text-center">' + element.tipo_raza_nombre + '</td>'+
            '                           <td class="text-center">' + element.tipo_categoria_nombre + '</td>'+
            '                           <td class="text-center">' + element.tipo_subcategoria_nombre + '</td>'+
            '                           <td class="text-center">' + element.establecimiento_poblacion_peso_promedio + '</td>'+
            '                           <td class="text-center">' + element.establecimiento_poblacion_cantidad + '</td>'+
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
        '                       <tr class="bg-table-title" style="text-align:center;">'+
        '                           <th class="border-top-0 text-center" style="width:160px;">ACCI&Oacute;N</th>'+
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

    $("#modal-content").empty();
    $("#modal-content").append(html);
}

function getPoblacion(codElem){
    getJSON('poblacionJSON', '000/establecimientopoblacion/' + codElem);

    var xJSON = JSON.parse(localStorage.getItem('poblacionJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            xDATA.push(element);
        });
    }

    return xDATA;
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
            if (element1.tipo_estado_codigo == 1 && element1.tipo_persona_codigo == 93) {
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
            '               <button type="button" class="btn btn-info mr-auto" onclick="setPersona(1, 0);" data-toggle="modal" data-target="#modal-dialog2"><i class="ti-plus"></i> Agregar Persona</button>'+
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
                    '               <button type="button" class="btn btn-info mr-auto" onclick="setPersona(1, 0);" data-toggle="modal" data-target="#modal-dialog2"><i class="ti-plus"></i> Agregar Persona</button>'+
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

function setPoblacion(codElem, codAcc, codEst){
	var xJSON       = getPoblacion(codEst);
	var html        = '';
	var bodyCol     = '';
	var bodyTit     = '';
	var bodyMod     = '';
	var bodyOnl     = '';
	var bodyBot     = '';

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
    } else if (codAcc > 1 && codAcc < 5) {
		xJSON.forEach(element => {
			if (element.establecimiento_poblacion_codigo == codElem) {
				html =
					'<div class="modal-content">'+
					'   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_poblacion.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
					'		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
					'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'	    </div>'+
					'       <div class="modal-body" >'+
					'           <div class="form-group">'+
					'               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ codEst +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_poblacion_codigo +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workPage" name="workPage" value="establecimiento_detalle.php?establecimiento='+ codEst +'&" class="form-control" type="hidden" required readonly>'+
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
					'                       <textarea id="var107_1" name="var107_1" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_poblacion_observacion +'</textarea>'+
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

	$("#modal-content2").empty();
    $("#modal-content2").append(html);
}

function setSeccion(codElem, codAcc, codEst){
    var xJSON       = getSeccion(codEst);
    var aJSON       = getSeccion(codEst);
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
            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_seccion.php">'+
			'	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
			'		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
			'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
			'	    </div>'+
            '	    <div class="modal-body" >'+
            '           <div class="form-group">'+
            '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ codEst +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
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
            '                       <label for="var03">SECCIÓN</label>'+
            '                       <input id="var03" name="var03" value="" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="SECCIÓN" required '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var04">OBSERVACIÓN</label>'+
            '                       <textarea id="var04" name="var04" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
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
			if (element.establecimiento_seccion_codigo == codElem) {
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
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_seccion.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
					'		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
					'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'	    </div>'+
					'	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ codEst +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_seccion_codigo +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
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
					'                       <input id="var02" name="var02" value="'+ element.establecimiento_seccion_orden +'" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="NRO ORDEN" '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12 col-md-12">'+
					'                   <div class="form-group">'+
					'                       <label for="var03">SECCIÓN</label>'+
					'                       <input id="var03" name="var03" value="'+ element.establecimiento_seccion_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="SECCIÓN" required '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12">'+
					'                   <div class="form-group">'+
					'                       <label for="var04">OBSERVACIÓN</label>'+
					'                       <textarea id="var04" name="var04" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_seccion_observacion +'</textarea>'+
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
            '						<td class="border-top-0">'+ element.establecimiento_seccion_orden +'</td>'+
            '						<td class="border-top-0">'+ element.tipo_estado_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.establecimiento_seccion_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.establecimiento_seccion_observacion +'</td>'+
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
		'						<th class="border-top-0">SECCIÓN</th>'+
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

function setPotrero(codElem, codAcc, codEst){
    var xJSON       = getPotrero(codEst);
    var aJSON       = getPotrero(codEst);
    var xJSON1      = getDominio('ESTABLECIMIENTOPASTURA');
    var xJSON2      = getSeccion(codEst);
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
                selPastura1 = selPastura1 + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                selPastura2 = selPastura2 + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
            }
        });

        xJSON2.forEach(element1 => {
            if (element1.tipo_estado_codigo == 1 && element1.establecimiento_codigo == codEst) {
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
            '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ codEst +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
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
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var03">TIPO PASTURA 1</label>'+
            '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Tipo Pastura 1">'+ selPastura1 +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var04">TIPO PASTURA 2</label>'+
            '                       <select id="var04" name="var04" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Tipo Pastura 2">'+ selPastura2 +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var05">SECCIÓN</label>'+
            '                       <select id="var05" name="var05" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Sección">'+ selSeccion + 
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var06">POTRERO</label>'+
            '                       <input id="var06" name="var06" value="" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="POTRERO" required '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var07">DIMENSIÓN</label>'+
            '                       <input id="var07" name="var07" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="DIMENSIÓN">'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var08">CAPACIDAD RECEPTIVDAD</label>'+
            '                       <input id="var08" name="var08" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="CAPACIDAD RECEPTIVDAD">'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var09">OBSERVACIÓN</label>'+
            '                       <textarea id="var09" name="var09" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
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
			if (element.establecimiento_potrero_codigo == codElem) {
                xJSON1.forEach(element1 => {
                    if (element1.tipo_estado_codigo == 1) {
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
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_potrero.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ codEst +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_potrero_codigo +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
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
                    '                       <input id="var02" name="var02" value="'+ element.establecimiento_potrero_orden +'" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="NRO ORDEN" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03">TIPO PASTURA 1</label>'+
                    '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Tipo Pastura 1">'+ selPastura1 +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var04">TIPO PASTURA 2</label>'+
                    '                       <select id="var04" name="var04" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Tipo Pastura 2">'+ selPastura2 +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var05">SECCIÓN</label>'+
                    '                       <select id="var05" name="var05" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Sección">'+ selSeccion + 
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var06">POTRERO</label>'+
                    '                       <input id="var06" name="var06" value="'+ element.establecimiento_potrero_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="POTRERO" required '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var07">DIMENSIÓN</label>'+
                    '                       <input id="var07" name="var07" value="'+ element.establecimiento_potrero_hectarea +'" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="DIMENSIÓN" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var08">CAPACIDAD RECEPTIVDAD</label>'+
                    '                       <input id="var08" name="var08" value="'+ element.establecimiento_potrero_capacidad+'" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="CAPACIDAD RECEPTIVDAD" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var09">OBSERVACIÓN</label>'+
                    '                       <textarea id="var09" name="var09" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_potrero_observacion +'</textarea>'+
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
            '						<td class="border-top-0">'+ element.establecimiento_potrero_orden +'</td>'+
            '						<td class="border-top-0">'+ element.tipo_estado_nombre +'</td>'+
            '						<td class="border-top-0">'+ element.tipo_pastura1_nombre +'</td>'+
            '						<td class="border-top-0">'+ element.tipo_pastura2_nombre +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_seccion_nombre +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_potrero_nombre +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_potrero_hectarea +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_potrero_capacidad +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_potrero_observacion +'</td>'+
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
        '						<th class="border-top-0">TIPO PASTURA 1</th>'+
        '						<th class="border-top-0">TIPO PASTURA 2</th>'+
        '						<th class="border-top-0">SECCIÓN</th>'+
        '						<th class="border-top-0">POTRERO</th>'+
        '						<th class="border-top-0">HECTAREA</th>'+
        '						<th class="border-top-0">CAPACIDAD RECEPTIVDAD </th>'+
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

function setLote(codElem, codAcc, codEst){
    var xJSON       = getLote(codEst);
    var aJSON       = getLote(codEst);
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
            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_lote.php">'+
			'	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
			'		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
			'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
			'	    </div>'+
            '	    <div class="modal-body" >'+
            '           <div class="form-group">'+
            '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ codEst +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
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
            '                       <label for="var03">LOTE</label>'+
            '                       <input id="var03" name="var03" value="" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="LOTE" required '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var04">OBSERVACIÓN</label>'+
            '                       <textarea id="var04" name="var04" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
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
			if (element.establecimiento_lote_codigo == codElem) {
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
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_lote.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
					'		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
					'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
					'	    </div>'+
					'	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ codEst +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_lote_codigo +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
					'               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
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
					'                       <input id="var02" name="var02" value="'+ element.establecimiento_lote_orden +'" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="NRO ORDEN" '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12 col-md-12">'+
					'                   <div class="form-group">'+
					'                       <label for="var03">SECCIÓN</label>'+
					'                       <input id="var03" name="var03" value="'+ element.establecimiento_lote_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="LOTE" required '+ bodyOnl +'>'+
					'                   </div>'+
					'               </div>'+
					'               <div class="col-sm-12">'+
					'                   <div class="form-group">'+
					'                       <label for="var04">OBSERVACIÓN</label>'+
					'                       <textarea id="var04" name="var04" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_lote_observacion +'</textarea>'+
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
            '						<td class="border-top-0">'+ element.establecimiento_lote_orden +'</td>'+
            '						<td class="border-top-0">'+ element.tipo_estado_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.establecimiento_lote_nombre +'</td>'+
			'						<td class="border-top-0">'+ element.establecimiento_lote_observacion +'</td>'+
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
		'						<th class="border-top-0">LOTE</th>'+
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

function setPropietario(codElem, codAcc, codEst){
    var xJSON       = getPropietario(codEst);
    var aJSON       = getPropietario(codEst);
    var xJSON1      = getDominio('USUARIOROL');
    var xJSON2      = getPersona();
    var html        = '';
    var bodyCol     = '';
    var bodyTit     = '';
    var bodyMod     = '';
    var bodyOnl     = '';
    var bodyBot     = '';
    var selEstado   = '';
    var selRol      = '';
    var selPersona  = '';
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
                selRol = selRol + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
            }
        });

        xJSON2.forEach(element1 => {
            if (element1.tipo_estado_codigo == 1 && element1.tipo_persona_codigo != 93) {
                selPersona = selPersona + '                               <option value="'+ element1.persona_codigo +'">'+ element1.persona_completo + ' | ' + element1.persona_documento + ' | ' + element1.persona_codigo_sitrap + ' | ' + element1.persona_codigo_sigor +'</option>';
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
            '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ codEst +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
            '               <button type="button" class="btn btn-info mr-auto" onclick="setPersona(2, '+ codEst +');" data-toggle="modal" data-target="#modal-dialog2"><i class="ti-plus"></i> Agregar Persona</button>'+
            '           </div>'+
            '           <div class="row pt-3">'+
            '               <div class="col-sm-12 col-md-4">'+
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
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var02">ORDEN</label>'+
            '                       <input id="var02" name="var02" value="" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="NRO ORDEN" '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var03">ROL</label>'+
            '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Rol">'+ selRol +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var04">PERSONA</label>'+
            '                       <select id="var04" name="var04" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
            '                           <optgroup label="Persona">'+ selPersona +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var05">OBSERVACIÓN</label>'+
            '                       <textarea id="var05" name="var05" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
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
			if (element.establecimiento_persona_codigo == codElem) {
                xJSON1.forEach(element1 => {
                    if (element1.tipo_estado_codigo == 1) {
                        if (element1.tipo_codigo == element.tipo_rol_codigo) {
                            selRol = selRol + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                        } else {
                            selRol = selRol + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                        }
                    }
                });
        
                xJSON2.forEach(element1 => {
                    if (element1.tipo_estado_codigo == 1) {
                        if (element1.persona_codigo == element.persona_codigo) {
                            selPersona = selPersona + '                               <option value="'+ element1.persona_codigo +'" selected>'+ element1.persona_completo + ' | ' + element1.persona_documento + ' | ' + element1.persona_codigo_sitrap + ' | ' + element1.persona_codigo_sigor +'</option>';
                        } else {
                            selPersona = selPersona + '                               <option value="'+ element1.persona_codigo +'">'+ element1.persona_completo + ' | ' + element1.persona_documento + ' | ' + element1.persona_codigo_sitrap + ' | ' + element1.persona_codigo_sigor +'</option>';
                        }
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
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_persona.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ codEst +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_persona_codigo +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                    '               <button type="button" class="btn btn-info mr-auto" onclick="setPersona(2, '+ codEst +');" data-toggle="modal" data-target="#modal-dialog2"><i class="ti-plus"></i> Agregar Persona</button>'+
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
                    '                       <label for="var02">ORDEN</label>'+
                    '                       <input id="var02" name="var02" value="'+ element.establecimiento_persona_orden +'" class="form-control" type="number" min="0" max="999" style="text-transform:uppercase; height:40px;" placeholder="NRO ORDEN" '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03">ROL</label>'+
                    '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Rol">'+ selRol +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var04">PERSONA</label>'+
                    '                       <select id="var04" name="var04" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Persona">'+ selPersona +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var05">OBSERVACIÓN</label>'+
                    '                       <textarea id="var05" name="var05" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_persona_observacion +'</textarea>'+
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
            '						<td class="border-top-0">'+ element.establecimiento_persona_orden +'</td>'+
            '						<td class="border-top-0">'+ element.tipo_estado_nombre +'</td>'+
            '						<td class="border-top-0">'+ element.tipo_rol_nombre +'</td>'+
            '						<td class="border-top-0">'+ element.persona_completo +'</td>'+
            '						<td class="border-top-0">'+ element.establecimiento_persona_observacion +'</td>'+
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
        '						<th class="border-top-0">TIPO ROL</th>'+
        '						<th class="border-top-0">PERSONA</th>'+
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

function setPersona(codPag, codEst){
    var xJSON1      = getDominio('PERSONATIPO');
    var xJSON2      = getDominio('PERSONADOCUMENTO');
    var html        = '';
    var selTipo     = '';
    var selDocumento= '';

    switch (codPag) {
        case 1:
            codPag = 'establecimiento.php?';

            xJSON1.forEach(element1 => {
                if (element1.tipo_estado_codigo == 1 && element1.tipo_codigo == 93) {
                    selTipo = selTipo + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                }
            });
            break;
    
        case 2:
            codPag = 'establecimiento_detalle.php?establecimiento=' + codEst + '&';

            xJSON1.forEach(element1 => {
                if (element1.tipo_estado_codigo == 1 && element1.tipo_codigo != 93) {
                    selTipo = selTipo + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                }
            });
            break;
    }

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
        '               <input type="hidden" class="form-control" id="workPage" name="workPage" value="'+ codPag +'" required readonly>'+
        '           </div>'+
        '           <div class="row pt-3">'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var02">TIPO PERSONA</label>'+
        '                       <select id="var02" name="var02" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
        '                           <optgroup label="Tipo Persona">'+ selTipo +
        '                           </optgroup>'+
        '                       </select>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var03">TIPO DOCUMENTO</label>'+
        '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
        '                           <optgroup label="Tipo Documento">'+ selDocumento +
        '                           </optgroup>'+
        '                       </select>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var04">DOCUMENTO</label>'+
        '                       <input id="var04" name="var04" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="NRO DOCUMENTO" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var05">PERSONA / EMPRESA</label>'+
        '                       <input id="var05" name="var05" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="PERSONA / EMPRESA" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var06">SIGLAS SITRAP</label>'+
        '                       <input id="var06" name="var06" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="SIGLAS SITRAP" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var07">C&Oacute;DIGO SIGOR</label>'+
        '                       <input id="var07" name="var07" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SIGOR" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var08">TEL&Eacute;FONO</label>'+
        '                       <input id="var08" name="var08" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="TEL&Eacute;FONO" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-sm-4">'+
        '                   <div class="form-group">'+
        '                       <label for="var09">EMAIL</label>'+
        '                       <input id="var09" name="var09" class="form-control" type="email" style="text-transform:lowercase; height:40px;" placeholder="EMAIL" required>'+
        '                   </div>'+
        '               </div>'+
        '               <div class="col-12">'+
        '                   <div class="form-group">'+
        '                       <label for="var10">OBSERVACI&Oacute;N</label>'+
        '                       <textarea id="var10" name="var10" class="form-control" rows="5" style="text-transform:uppercase;"></textarea>'+
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