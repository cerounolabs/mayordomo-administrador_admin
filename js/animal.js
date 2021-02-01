$(document).ready(function() {
	var codigo	    = document.getElementById('tableCodigo').className;	
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
                { targets			: [16],	visible : true, searchable : true,	orderData : [16, 0] },
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
                { render			: 
                    function (data, type, full, meta) {
                        var codPag  = "'"+'animal.php?especie='+ codigo +"'";
                        var btnDSP	= '<button onclick="setAnimal('+ codigo +', '+ full.establecimiento_codigo +', '+ full.animal_codigo +','+ codPag +', 2);" title="Ver" type="button" class="btn btn-primary btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eye"></i></button>';
                        var btnUPD	= '<button onclick="setAnimal('+ codigo +', '+ full.establecimiento_codigo +', '+ full.animal_codigo +','+ codPag +', 3);" title="Editar" type="button" class="btn btn-success btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-edit"></i></button>';
                        var btnDLT	= '<button onclick="setAnimal('+ codigo +', '+ full.establecimiento_codigo +', '+ full.animal_codigo +','+ codPag +', 4);" title="Eliminar" type="button" class="btn btn-danger btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-eraser"></i></button>';
                        var btnAUD	= '<button onclick="setAnimal('+ codigo +', '+ full.establecimiento_codigo +', '+ full.animal_codigo +','+ codPag +', 5);" title="Auditoria" type="button" class="btn btn-warning btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-user-secret"></i></button>';
                        var btnPES	= '<button onclick="setAnimal('+ codigo +', '+ full.establecimiento_codigo +', '+ full.animal_codigo +','+ codPag +', 6);" title="Registrar Peso" type="button" class="btn btn-circle"; style="background-color:#0BD9F4; color:#ffffff"; data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-paw"></i></button>';
                        return (btnDSP + '&nbsp;' + btnUPD + '&nbsp;' + btnDLT + '&nbsp;' + btnAUD + '&nbsp;' + btnPES);
                    }
                },
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

function setAnimal(rowEspecie, rowEst, codElem, codPag, codAcc){
    var codEst = '';
    console.log('entra> '+codAcc);
    if (codElem != 0) {
        codEst  = rowEst;
    } else {
        codEst  = document.getElementById(rowEst).value;
    }
    
    var xJSON           = getAnimal(2, codEst, codElem, 0, 0, 0, 0, 0, 0, 0, 0);
    var xJSON1          = getDominio('ANIMALPELAJE');
    var xJSON2          = getDominio('ANIMALGRADOSANGRE');
    var xJSON3          = getDominio('ANIMALHACIENDA');
    var xJSON4          = getDominio('ANIMALCARIMBO');
    var html            = '';
    var bodyCol         = '';
    var bodyTit         = '';
    var bodyMod         = '';
    var bodyOnl         = '';
    var bodyBot         = '';
    var selPelaje       = '';
    var selSangre       = '';
    var selHacienda     = '';
    var selCarimbo      = '';
    var rowAuditoria    = '';
    var fechpeso        = '';
    var pesokilogramo   = 0;
    var pesocodigo      = 0;
    

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

        case 6:
            bodyTit = 'REGISTRAR PESO';
            bodyCol = '#0BD9F4;';
            bodyMod = 'C';
            bodyOnl = '';
            bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
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
            '               <input class="form-control" type="hidden" id="workCodigo"       name="workCodigo"       value="0"                   required readonly>'+
            '               <input class="form-control" type="hidden" id="workModo"         name="workModo"         value="'+ bodyMod +'"       required readonly>'+
            '               <input class="form-control" type="hidden" id="workPage"         name="workPage"         value="'+ codPag +'"        required readonly>'+
            '               <input class="form-control" type="hidden" id="workEspecie"      name="workEspecie"      value="'+ rowEspecie +'"    required readonly>'+
            '               <input class="form-control" type="hidden" id="workAnimalPeso"   name="workAnimalPeso"   value="0"                   required readonly>'+
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
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var018">Carimbo</label>'+
            '                       <select id="var018" name="var018" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
            '                           <optgroup label="Carimbo">'+ selCarimbo +
            '                           </optgroup>'+
            '                       </select>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var017">Fecha Nacimiento</label>'+
            '                       <input id="var017" name="var017" class="form-control" type="month" style="text-transform:uppercase; height:40px;" placeholder="Fecha Nacimiento" '+ bodyOnl +'required>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12 col-md-4">'+
            '                   <div class="form-group">'+
            '                       <label for="var019">Peso</label>'+
            '                       <input id="var019" name="var019" class="form-control" value="0" type="number" style="text-transform:uppercase; height:40px;" placeholder="Peso" '+ bodyOnl +'>'+
            '                   </div>'+
            '               </div>'+
            '               <div class="col-sm-12">'+
            '                   <div class="form-group">'+
            '                       <label for="var016">COMENTARIO</label>'+
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
        
        var xJSON5          = getAnimalPeso(codElem);
        
		xJSON.forEach(element => {
			if (element.animal_codigo == codElem) {
                xJSON1.forEach(element1 => {
					if (element1.tipo_estado_parametro == 1 && element1.tipo_parametro == element.tipo_pelaje_parametro) {
						selPelaje = selPelaje + '                               <option value="'+ element1.tipo_parametro +'" selected>'+ element1.tipo_nombre +'</option>';
					} else {
						selPelaje = selPelaje + '                               <option value="'+ element1.tipo_parametro +'">'+ element1.tipo_nombre +'</option>';
					}
                });

                xJSON2.forEach(element1 => {
					if (element1.tipo_estado_parametro == 1 && element1.tipo_parametro == element.tipo_grado_sangre_parametro) {
						selSangre = selSangre + '                               <option value="'+ element1.tipo_parametro +'" selected>'+ element1.tipo_nombre +'</option>';
					} else {
						selSangre = selSangre + '                               <option value="'+ element1.tipo_parametro +'">'+ element1.tipo_nombre +'</option>';
					}
                });
                
                xJSON3.forEach(element1 => {
					if (element1.tipo_estado_parametro == 1 && element1.tipo_parametro == element.tipo_hacienda_parametro) {
						selHacienda = selHacienda + '                               <option value="'+ element1.tipo_parametro +'" selected>'+ element1.tipo_nombre +'</option>';
					} else {
						selHacienda = selHacienda + '                               <option value="'+ element1.tipo_parametro +'">'+ element1.tipo_nombre +'</option>';
					}
                });

                xJSON4.forEach(element1 => {
                    if (element1.tipo_estado_parametro == 1 && element1.tipo_parametro == element.tipo_carimbo_parametro) {
                        selCarimbo = selCarimbo + '                               <option value="'+ element1.tipo_parametro +'" selected>'+ element1.tipo_nombre +'</option>';
                    } else {
                        selCarimbo = selCarimbo + '                               <option value="'+ element1.tipo_parametro +'">'+ element1.tipo_nombre +'</option>';
                    }
                });

                xJSON5.forEach(element2 => {
                    if (element2.animal_codigo == codElem) {
                        fechpeso            = element2.animal_peso_fecha_1;
                        pesokilogramo       = element2.animal_peso_kilogramo;
                        pesocodigo          = element2.animal_peso_codigo;
                    }
                });
                        html = 
                            '<div class="modal-content">'+
                            '   <form id="form" data-parsley-validate method="post" action="../class/crud/animal.php">'+
                            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                            '	    </div>'+
                            ''+
                            '	    <div class="modal-body" >'+
                            '           <div class="form-group">'+
                            '               <input class="form-control" type="hidden" id="workCodigo"       name="workCodigo"       value="'+ element.animal_codigo +'"       required readonly>'+
                            '               <input class="form-control" type="hidden" id="workModo"         name="workModo"         value="'+ bodyMod +'"                     required readonly>'+
                            '               <input class="form-control" type="hidden" id="workPage"         name="workPage"         value="'+ codPag +'"                      required readonly>'+
                            '               <input class="form-control" type="hidden" id="workEspecie"      name="workEspecie"      value="'+ rowEspecie +'"                  required readonly>'+
                            '               <input class="form-control" type="hidden" id="workAnimalPeso"   name="workAnimalPeso"   value="'+ pesocodigo  +'"                 required readonly>'+
                            '           </div>'+
                            ''+
                            '           <div class="row">'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var001">Establecimiento</label>'+
                            '                       <select id="var001" name="var001" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                            '                           <optgroup label="Establecimiento">'+
                            '                               <option value="'+ element.establecimiento_codigo +'" selected>'+ element.establecimiento_nombre +'</option>'+
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var002">Categoría</label>'+
                            '                       <select id="var002" name="var002" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                            '                           <optgroup label="Categoría">'+
                            '                               <option value="'+ element.tipo_categoria_parametro +'" selected>'+ element.tipo_categoria_nombre +'</option>'+
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var003">SubCategoría</label>'+
                            '                       <select id="var003" name="var003" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                            '                           <optgroup label="SubCategoría">'+
                            '                               <option value="'+ element.tipo_subcategoria_parametro +'" selected>'+ element.tipo_subcategoria_nombre +'</option>'+
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var004">Origen</label>'+
                            '                       <select id="var004" name="var004" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                            '                           <optgroup label="Origen">'+
                            '                               <option value="'+ element.tipo_origen_parametro +'" selected>'+ element.tipo_origen_nombre +'</option>'+
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var005">Raza</label>'+
                            '                       <select id="var005" name="var005" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                            '                           <optgroup label="Raza">'+
                            '                               <option value="'+ element.tipo_raza_parametro +'" selected>'+ element.tipo_raza_nombre +'</option>'+
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var006">Propietario</label>'+
                            '                       <select id="var006" name="var006" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                            '                           <optgroup label="Propietario">'+
                            '                               <option value="'+ element.persona_codigo +'" selected>'+ element.persona_completo +'</option>'+
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var007">Pelaje</label>'+
                            '                       <select id="var007" name="var007" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                            '                           <optgroup label="Pelaje">'+ selPelaje +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var008">Grado Sangre</label>'+
                            '                       <select id="var008" name="var008" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                            '                           <optgroup label="Grado Sangre">'+ selSangre +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var009">Hacienda</label>'+
                            '                       <select id="var009" name="var009" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                            '                           <optgroup label="Hacienda">'+ selHacienda +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var010">Cód. Electrónico</label>'+
                            '                       <input id="var010" name="var010" value="'+ element.animal_codigo_electronico +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código Electrónico" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var011">Cód. RP</label>'+
                            '                       <input id="var011" name="var011" value="'+ element.animal_codigo_rp +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código RP" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var012">Cód. HBP</label>'+
                            '                       <input id="var012" name="var012" value="'+ element.animal_codigo_hbp +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código HBP" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var013">Cód. SITRAP</label>'+
                            '                       <input id="var013" name="var013" value="'+ element.animal_codigo_sitrap +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código SITRAP" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var014">Cód. Interno</label>'+
                            '                       <input id="var014" name="var014" value="'+ element.animal_codigo_interno +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código Interno" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var015">Cód. Nombre</label>'+
                            '                       <input id="var015" name="var015" value="'+ element.animal_codigo_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="Código Nombre" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var018">Carimbo</label>'+
                            '                       <select id="var018" name="var018" class="form-control" style="width:100%; height:40px;" '+ bodyOnl +' required>'+
                            '                           <optgroup label="Carimbo">'+ selCarimbo +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var017">Fecha Nacimiento</label>'+
                            '                       <input id="var017" name="var017" value="'+fechpeso+'" class="form-control" type="month" style="text-transform:uppercase; height:40px;" placeholder="Fecha Nacimiento" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var019">Peso</label>'+
                            '                       <input id="var019" name="var019" value="'+pesokilogramo+'"  class="form-control" type="number" style="text-transform:uppercase; height:40px;" placeholder="Peso" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '               <div class="col-sm-12">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var016">COMENTARIO</label>'+
                            '                       <textarea id="var016" name="var016" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.animal_observacion +'</textarea>'+
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
                    fechpeso = '';
                    pesokilogramo = 0;
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
        xJSON5          = getAnimalPeso(codElem);
        var xJSON6      = getDominio('ANIMALPESO');
        var xJSON7      = getAnimalPeso2(codElem);
        console.log(xJSON7);
        var selPeso     = '';   
        var ultfecha    = '';
        var ultpeso     = 0;
		xJSON.forEach(element => {
			if (element.animal_codigo == codElem) {
                xJSON7.forEach(element1 => {
                    if (element1.animal_codigo == codElem) {
                        ultfecha    = element1.animal_peso_fecha_1;
                        ultpeso     = element1.animal_peso_kilogramo;
                        pesocodigo  = element1.animal_peso_codigo;
                    }
                });

                xJSON5.forEach(element2 => {
                    if (element2.animal_codigo == codElem) {
                        selPeso = selPeso +
                            '                      <div class="col-sm-12 col-md-5">'+
                            '                        <div class="form-group" >'+
                            '                            <label for="var025">'+element2.animal_peso_kilogramo+'</label>'+
                            '                        </div>'+
                            '                      </div>'+
                            ''+
                            '                      <div class="col-sm-12 col-md-6">'+
                            '                        <div class="form-group" style="text-align:center">'+
                            '                            <label for="var026">'+element2.animal_peso_fecha_2+'</label><br>'+
                            '                        </div>'+
                            '                      </div>';
                    }
                });
                        html = 
                            '<div class="modal-content">'+
                            '   <form id="form" data-parsley-validate method="post" action="../class/crud/animal.php">'+
                            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                            '	    </div>'+
                            ''+
                            '	    <div class="modal-body" >'+
                            '           <div class="form-group">'+
                            '               <input class="form-control" type="hidden" id="workCodigo"       name="workCodigo"       value="'+ element.animal_codigo +'"       required readonly>'+
                            '               <input class="form-control" type="hidden" id="workModo"         name="workModo"         value="'+ bodyMod +'"                     required readonly>'+
                            '               <input class="form-control" type="hidden" id="workPage"         name="workPage"         value="'+ codPag +'"                      required readonly>'+
                            '               <input class="form-control" type="hidden" id="workEspecie"      name="workEspecie"      value="'+ rowEspecie +'"                  required readonly>'+
                            '               <input class="form-control" type="hidden" id="workAnimalPeso"   name="workAnimalPeso"   value="'+ pesocodigo  +'"                 required readonly>'+
                            '           </div>'+
                            ''+
                            '           <div class="row">'+
                            '               <div class="col-sm-12 col-md-12">'+
                            '                   <div class="row">'+
                            '                     <div class="col-sm-12 col-md-3">'+
                            '                       <div class="form-group">'+
                            '                          <label for="var001"> Establecimiento:       '+element.establecimiento_nombre +'</label>'+   
                            '                       </div>'+
                            '                     </div>'+
                            ''+
                            '                           <div class="col-sm-12 col-md-3">'+
                            '                               <div class="form-group" >'+
                            '                                   <label for="var003">SubCategoría:   '+ element.tipo_subcategoria_nombre +'</label>'+
                            '	                            </div>'+
                            '	                        </div>'+
                            ''+     
                            '                           <div class="col-sm-12 col-md-3">'+
                            '                               <div class="form-group" >'+
                            '                                   <label for="var004">Origen: '+ element.tipo_origen_nombre +'</label><br>'+
                            '	                            </div>'+
                            '	                        </div>'+
                            ''+     
                            '                           <div class="col-sm-12 col-md-3">'+
                            '                               <div class="form-group" >'+
                            '                                   <label for="var005">Raza:   '+ element.tipo_raza_nombre +'</label>'+
                            '	                            </div>'+
                            '	                        </div>'+
                            ''+     
                            '                           <div class="col-sm-12 col-md-3">'+
                            '                               <div class="form-group" >'+
                            '                                   <label for="var007">Pelaje: '+ element.tipo_pelaje_nombre +'</label>'+
                            '	                            </div>'+
                            '	                        </div>'+
                            ''+     
                            '                           <div class="col-sm-12 col-md-3">'+
                            '                               <div class="form-group" >'+
                            '                                   <label for="var008">Grado Sangre:   '+ element.tipo_grado_sangre_nombre +'</label>'+
                            '	                            </div>'+
                            '	                        </div>'+
                            ''+     
                            '                           <div class="col-sm-12 col-md-3">'+
                            '                               <div class="form-group" >'+
                            '                                   <label for="var009">Hacienda:   '+ element.tipo_hacienda_nombre +'</label>'+
                            '	                            </div>'+
                            '	                        </div>'+
                            ''+     
                            '                           <div class="col-sm-12 col-md-3">'+
                            '                               <div class="form-group" >'+
                            '                                   <label for="var018">Carimbo:    '+ element.tipo_carimbo_nombre +'</label>'+
                            '	                            </div>'+
                            '	                        </div>' +
                        //    '                    </div>'+
                            '                  </div>'+
                            '               </div>'+
                            '            </div>'+
                            ''+
                            '            <div class="row">'+
                            '               <div class="col-sm-12 col-md-9">'+
                            '                   <div class="row">'+
                            '                      <div class="col-sm-12 col-md-3">'+
                            '                        <div class="form-group">'+
                            '                            <label for="var021">Ultimo Peso:</label><br>'+
                            '                              <input type="text" id="var021" name="var021" value="'+ultpeso+'" class="form-control" style="height:40px" readonly>'+
                            '                        </div>'+
                            '                      </div>'+
                            ''+
                            '                      <div class="col-sm-12 col-md-3">'+
                            '                        <div class="form-group">'+
                            '                            <label for="var022">Ultimo Fecha</label><br>'+
                             '                               <input type="text" id="var022" name="var022" value="'+ultfecha+'" class="form-control" style="height:40px" readonly>'+
                            '                        </div>'+
                            '                      </div>'+
                            ''+
                            '                      <div class="col-sm-12 col-md-6">'+
                            '                        <div class="form-group">'+
                            '                        </div>'+
                            '                      </div>'+
                            ''+
                            '                      <div class="col-sm-12 col-md-3">'+
                            '                         <div class="form-group">'+
                            '                            <label for="var020">Peso</label>'+
                            '                               <select id="var020" name="var020" class="form-control" style="width:100%; height:40px;">'+
                            '                                   <optgroup label="Peso">'+
                            '                                   </optgroup>'+
                            '                               </select>'+
                            '                           </div>'+
                            '                       </div>'+
                            ''+     
                            '                      <div class="col-sm-12 col-md-3">'+
                            '                         <div class="form-group">'+
                            '                             <label for="var019">Ingresar Peso</label>'+
                            '                             <input id="var019" name="var019" class="form-control" value="0" onblur="selectDifPeso(var019, var021, var023);"  type="number" min="0" style="text-transform:uppercase; height:40px;" placeholder="Peso" '+ bodyOnl +'>'+
                            '                           </div>'+
                            '                       </div>'+
                            ''+     
                            '                      <div class="col-sm-12 col-md-3">'+
                            '                           <div class="form-group">'+
                            '                               <label for="var017">Fecha</label>'+
                            '                               <input id="var017" name="var017" class="form-control" type="date" onblur="selectCantDia(var017, var022, var024);" style="text-transform:uppercase; height:40px;" placeholder="Fecha Nacimiento" '+ bodyOnl +'>'+
                            '                           </div>'+
                            '                      </div>'+
                            ''+ 
                            '                      <div class="col-sm-12 col-md-3">'+
                            '                        <div class="form-group">'+
                            '                        </div>'+
                            '                      </div>'+
                            ''+
                            '                      <div class="col-sm-12 col-md-3">'+
                            '                           <div class="form-group">'+
                            '                               <label for="var023">Diferencia de Peso</label>'+
                            '                               <input type="number" id="var023" name="var023" class="form-control" style="height:40px" placeholder="Diferencia de Peso" readonly>'+
                            '                           </div>'+
                            '                      </div>'+
                            ''+ 
                            '                      <div class="col-sm-12 col-md-3">'+
                            '                           <div class="form-group">'+
                            '                               <label for="var024">Cantidad de Dias</label>'+
                            '                               <input type="number" id="var024" name="var024" value="var024" class="form-control" style="height:40px" placeholder="Cantidad de Días" readonly>'+
                            '                           </div>'+
                            '                      </div>'+
                            '                   </div>'+
                            '               </div>'+
                            ''+
                            '                      <div class="col-sm-12 col-md-3">'+
                            '                         <div class="row">'+
                            '                           <div class="col-sm-12 col-md-12">'+
                            '                               <div class="form-group">'+
                            '                                   <h3><label for="" >Histórico de Peso</label></h3>'+
                            '	                            </div>'+
                            '	                        </div>'+
                            ''+
                            '                           <div class="col-sm-6">'+
                            '                               <div class="form-group" >'+
                            '                                   <h5><label for="var025">   Peso </label></h5>'+
                            '	                            </div>'+
                            '	                        </div>'+
                            ''+
                            '                           <div class="col-sm-6">'+
                            '                               <div class="form-group" >'+
                            '                                   <h5><label for="var026">    Fecha   </label></h5>'+ 
                            '	                            </div>'+
                            '	                        </div>'+ selPeso +
                            '	                      </div>'+
                            '	                   </div>'+
                            '	         </div>'+
                            ''+
                            '           <div class="row">'+
                            '               <div class="col-sm-12 col-md-12">'+
                            '                   <div class="row">'+
                            '                     <div class="col-sm-12 col-md-12">'+
                            '                       <div class="form-group">'+
                            '                           <label for="var027">COMENTARIO</label>'+
                            '                              <textarea id="var027" name="var027" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
                            '                       </div>'+
                            '                     </div>'+
                            '                   </div>'+
                            '               </div>'+
                            '           </div>'+
                            ''+
                            '	         <div class="modal-footer">'+ bodyBot +
                            '		        <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                            '	         </div>'+
                            '   </form>'+
                            '</div>';
            }
            
		});
	}

	$("#modal-content").empty();
    $("#modal-content").append(html);
    
    if (codAcc == 1) {
        selectEstablecimiento('var001'),
        selectDominio('var002', 'ANIMALCATEGORIA', 2);
        selectAnimalCategoria(rowEspecie, 'var002', 'var003', 2);
        selectDominio('var004', 'ANIMALORIGEN', 2);
        selectDominio('var005', 'ANIMALRAZA', 2);
        selectEstablecimientoPersona('var006', 'var001', 2, 2);
        selectDominio('var007', 'ANIMALPELAJE', 2);
        selectDominio('var008', 'ANIMALGRADOSANGRE', 2);
        selectDominio('var009', 'ANIMALHACIENDA', 2);
        selectDominio('var018', 'ANIMALCARIMBO', 2);
    }else{
        selectDominio('var020', 'ANIMALPESO', 2);
    }

    $('#var001').change(function() {
        selectEstablecimientoPersona('var006', 'var001', 2, 2);
    });

    $('#var002').change(function() {
        selectAnimalCategoria(rowEspecie, 'var002', 'var003', 2);
    });

  /*  $('#var019').change(function() {
        selectDifPeso('var019', 'var021', 'var023');
        console.log('holax');
    });*/
}