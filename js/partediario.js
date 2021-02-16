$(document).ready(function() {
    console.log('holiis');
    console.log(_parm01BASE);
    var xDATA   = getAnimalMortandadListado(_parm01BASE);
    
    console.log(xDATA);
    $('#tableMortandadCab').DataTable({
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
         //   { targets			: [8],	visible : false,	searchable : false,	orderData : [8, 0] },
        ],
        columns		: [
            { data				: 'animal_mortandad_codigo',           name : 'animal_mortandad_codigo'},
            { data				: 'tipo_estado_codigo',                name : 'tipo_estado_codigo'},
            { data				: 'animal_mortandad_fecha_denuncia_2', name : 'animal_mortandad_fecha_denuncia_2'},
            { data				: 'tipo_mortandad_nombre',             name : 'tipo_mortandad_nombre'},
            { data				: 'animal_codigo_nombre',              name : 'animal_codigo_nombre'},
            { data				: 'persona_denunciante_completo',      name : 'persona_denunciante_completo'},
            { data				: 'persona_verificacion_completo',     name : 'persona_verificacion_completo'},
            { data				: 'animal_mortandad_observacion',      name : 'animal_mortandad_observacion'},
           /* { render			: 
                function (data, type, full, meta) {
                    //var btnUPD	= '<button onclick="" title="Editar" type="button" class="btn btn-success btn-icon btn-circle" data-toggle="modal" data-target="#modal-dialog"><i class="fa fa-edit"></i></button>';

				}
            },*/
        ]
    });
});


function selectEstablecimiento(valRow) {
    var xJSON   = getEstablecimiento();
    var xSELC   = document.getElementById(valRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var item        = pad(element.establecimiento_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.establecimiento_codigo;
            option.text     = item + ' - ' + element.establecimiento_nombre;                    
            xSELC.add(option, null);
        }
    });
}

function selectPotrero(valRow, estRow) {
    var codEst  = document.getElementById(estRow).value;
    var xJSON   = getSeccion(codEst);
    var xJSON1  = getPotrero(codEst);
    var xSELC   = document.getElementById(valRow);
    var auxGRO  = false;

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var optgroup    = document.createElement('optgroup');
            optgroup.label  = element.establecimiento_seccion_nombre;
            auxGRO          = false;

            xJSON1.forEach(element1 => {
                if (element1.tipo_estado_codigo == 1 && element1.establecimiento_seccion_codigo == element.establecimiento_seccion_codigo) {
                    var item        = pad(element1.establecimiento_potrero_codigo, 3);
                    var option      = document.createElement('option');
                    option.value    = element1.establecimiento_potrero_codigo;
                    option.text     = item + ' - ' + element.establecimiento_seccion_nombre + ' - ' + element1.establecimiento_potrero_nombre;
                    optgroup.appendChild(option);
                    auxGRO          = true;
                }
            });

            if (auxGRO == true) {
                xSELC.add(optgroup, null);
            }
        }
    });
}

function selectOrigen(valRow) {
    var xJSON   = getDominio('ANIMALORIGEN');
    var xSELC   = document.getElementById(valRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var item        = pad(element.tipo_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_codigo;
            option.text     = item + ' - ' + element.tipo_nombre;                    
            xSELC.add(option, null);
        }
    });
}

function selectRaza(valRow) {
    var xJSON   = getDominio('ANIMALRAZA');
    var xSELC   = document.getElementById(valRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var item        = pad(element.tipo_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_codigo;
            option.text     = item + ' - ' + element.tipo_nombre;                    
            xSELC.add(option, null);
        }
    });
}

function selectCategoria(valRow) {
    var xJSON   = getDominio('ANIMALCATEGORIA');
    var xJSON1  = getDominioTri('ANIMALESPECIECATEGORIASUBCATEGORIA');
    var xSELC   = document.getElementById(valRow);
    var auxGRO  = false;

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var optgroup    = document.createElement('optgroup');
            optgroup.label  = element.tipo_nombre;
            auxGRO          = false;

            xJSON1.forEach(element1 => {
                if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio1_codigo == 26 && element1.tipo_dominio2_codigo == element.tipo_codigo) {
                    var item        = pad(element1.tipo_dominio3_codigo, 3);
                    var option      = document.createElement('option');
                    option.value    = element1.tipo_dominio2_codigo + '_' + element1.tipo_dominio3_codigo;
                    option.text     = item + ' - ' + element1.tipo_dominio2_nombre + ' - ' + element1.tipo_dominio3_nombre;
                    optgroup.appendChild(option);
                    auxGRO          = true;
                }
            });

            if (auxGRO == true) {
                xSELC.add(optgroup, null);
            }
        }
    });
}

function selectPropietario(valRow, estRow) {
    var codEst  = document.getElementById(estRow).value;
    var xJSON   = getEstablecimientoPersona(codEst);
    var xSELC   = document.getElementById(valRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_parametro == 1 && element.tipo_rol_parametro == 2) {
            var item        = pad(element.persona_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.persona_codigo;
            option.text     = item + ' - ' + element.persona_completo;                    
            xSELC.add(option, null);
        }
    });
}
function selectMortandad(valRow) {
    var xJSON   = getDominio('MORTANDADTIPO');
    var xSELC   = document.getElementById(valRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_parametro == 1) {
            var item        = pad(element.tipo_parametro, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_parametro;
            option.text     = item + ' - ' + element.tipo_nombre;                    
            xSELC.add(option, null);
        }
    });
}

function selectCarimbo(valRow) {
    var xJSON   = getDominio('ANIMALCARIMBO');
    var xSELC   = document.getElementById(valRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var item        = pad(element.tipo_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_codigo;
            option.text     = item + ' - ' + element.tipo_nombre;                    
            xSELC.add(option, null);
        }
    });
}

function selectDenunciante(valRow, estRow) {
    var codEst  = document.getElementById(estRow).value;
    var xJSON   = getEstablecimientoPersona(codEst);
    var xSELC   = document.getElementById(valRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1 && element.tipo_rol_codigo != 49) {
            var item        = pad(element.persona_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.persona_codigo;
            option.text     = item + ' - ' + element.persona_completo;                    
            xSELC.add(option, null);
        }
    });
}

function selectVerificar(valRow, estRow) {
    var codEst  = document.getElementById(estRow).value;
    var xJSON   = getEstablecimientoPersona(codEst);
    var xSELC   = document.getElementById(valRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_parametro == 1 && element.tipo_rol_parametro != 2) {
            var item        = pad(element.persona_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.persona_codigo;
            option.text     = item + ' - ' + element.persona_completo;                    
            xSELC.add(option, null);
        }
    });
}

function selectConsumo(valRow) {
    var xJSON   = getDominio('MOVIMIENTOFAENA');
    var xSELC   = document.getElementById(valRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var item        = pad(element.tipo_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_codigo;
            option.text     = item + ' - ' + element.tipo_nombre;                    
            xSELC.add(option, null);
        }
    });
}

function selectIdentificado(valRow) {
    var xJSON   = getDominio('ANIMALIDENTIFICACION');
    var xSELC   = document.getElementById(valRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 1) {
            var item        = pad(element.tipo_parametro, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_parametro;
            option.text     = item + ' - ' + element.tipo_nombre;                    
            xSELC.add(option, null);
        }
    });
}

function selectAnimal(valRow, estRow) {
    var codEst  = document.getElementById(estRow).value;
    var xJSON   = getAnimalAll(codEst);
    var xSELC   = document.getElementById(valRow);

    while (xSELC.length > 0) {
        xSELC.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                    
    xSELC.add(option, null);
    
    xJSON.forEach(element => {
        if (element.tipo_estado_codigo == 75) {
            var option      = document.createElement('option');
            option.value    = element.animal_codigo;
            option.text     = element.animal_codigo_electronico + ' - ' + element.animal_codigo_rp + ' - ' + element.animal_codigo_hdp + ' - ' + element.animal_codigo_nombre + ' - ' + element.animal_codigo_sitrap + ' - ' + element.animal_codigo_interno + ' - ' + element.tipo_origen_nombre + ' - ' + element.tipo_raza_nombre + ' - ' + element.tipo_categoria_nombre + ' - ' + element.tipo_subcategoria_nombre + ' - ' + element.tipo_pelaje_nombre + ' - ' + element.tipo_grado_sangre_nombre + ' - ' + element.tipo_hacienda_nombre;                    
            xSELC.add(option, null);
        }
    });
}

function viewDetail(valRow) {
    var codElem         = document.getElementById(valRow);
    var viewMortandad   = document.getElementById('viewMortandad');
    var viewConsumo     = document.getElementById('viewConsumo');
    var viewAbigeo      = document.getElementById('viewAbigeo');
    var viewDonacion    = document.getElementById('viewDonacion');
    
    viewMortandad.style.display = 'none';
    viewConsumo.style.display   = 'none';
    viewAbigeo.style.display    = 'none';
    viewDonacion.style.display  = 'none';
    codElem.style.display       = 'block';

    switch (valRow) {
        case 'viewMortandad':
            selectEstablecimiento('var001');
            selectPotrero('var002', 'var001');
            selectIdentificado('var005');
//          selectAnimal('var006', 'var009');
            selectPropietario('var007', 'var001');
            selectOrigen('var008');
            selectRaza('var009');
            selectCategoria('var010');
            selectMortandad('var011');
            selectDenunciante('var013', 'var001');
            selectVerificar('var014', 'var001');
            selectCarimbo('var017');

            viewInput('col006', 1);
            viewInput('col007', 0);
            viewInput('col008', 0);
            viewInput('col009', 0);
            viewInput('col010', 0);
            viewInput('col011', 0);

            break;
    }
}

function viewInput(valRow, banRow) {
    var codElem = document.getElementById(valRow);

    if (banRow == 0) {
        codElem.style.display   = 'none';
    } else {
        codElem.style.display   = '';
    }
}

function changeIdentificacion(valRow){
    console.log('valRow => '.valRow);
    var codElem = document.getElementById(valRow);

    if (codElem.value != 0) {
        viewInput('col006', 1);
        viewInput('col007', 0);
        viewInput('col008', 0);
        viewInput('col009', 0);
        viewInput('col010', 0);
        viewInput('col011', 0);
    } else {
        viewInput('col006', 0);
        viewInput('col007', 1);
        viewInput('col008', 1);
        viewInput('col009', 1);
        viewInput('col010', 1);
        viewInput('col011', 1);
    }

}