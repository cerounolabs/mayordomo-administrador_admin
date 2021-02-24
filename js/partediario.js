$(document).ready(function() {
    var xDATA   = getAnimalMortandadListado(_parm01BASE,1);
    var xDATA1   = getAnimalMortandadListado(_parm01BASE,4);
    var xDATA2   = getAnimalMortandadListado(_parm01BASE,2);
    var xDATA3   = getAnimalMortandadListado(_parm01BASE,5);

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
        ],
        columns		: [
            { data				: 'animal_mortandad_codigo',           name : 'animal_mortandad_codigo'},
            { data				: 'tipo_estado_nombre',                name : 'tipo_estado_nombre'},
            { data				: 'animal_mortandad_fecha_denuncia_2', name : 'animal_mortandad_fecha_denuncia_2'},
            { data				: 'tipo_mortandad_nombre',             name : 'tipo_mortandad_nombre'},
            { data				: 'establecimiento_nombre',            name : 'establecimiento_nombre'},
            { data				: 'persona_denunciante_completo',      name : 'persona_denunciante_completo'},
            { data				: 'persona_verificacion_completo',     name : 'persona_verificacion_completo'},
            { data				: 'animal_mortandad_observacion',      name : 'animal_mortandad_observacion'},
        ]
    });

    $('#tableAbigueo').DataTable({
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
        data : xDATA1,
        columnDefs	: [
            { targets			: [0],	visible : false,searchable : false, orderData : [0, 0] },
            { targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] },
            { targets			: [2],	visible : true,	searchable : true,	orderData : [2, 0] },
            { targets			: [3],	visible : true,	searchable : true,	orderData : [3, 0] },
            { targets			: [4],	visible : true,	searchable : true,	orderData : [4, 0] },
            { targets			: [5],	visible : true,	searchable : true,	orderData : [5, 0] },
            { targets			: [6],	visible : true,	searchable : true,	orderData : [6, 0] },
            { targets			: [7],	visible : true,	searchable : true,	orderData : [7, 0] },
        ],
        columns		: [
            { data				: 'animal_mortandad_codigo',           name : 'animal_mortandad_codigo'},
            { data				: 'tipo_estado_nombre',                name : 'tipo_estado_nombre'},
            { data				: 'animal_mortandad_fecha_denuncia_2', name : 'animal_mortandad_fecha_denuncia_2'},
            { data				: 'tipo_mortandad_nombre',             name : 'tipo_mortandad_nombre'},
            { data				: 'establecimiento_nombre',            name : 'establecimiento_nombre'},
            { data				: 'persona_denunciante_completo',      name : 'persona_denunciante_completo'},
            { data				: 'persona_verificacion_completo',     name : 'persona_verificacion_completo'},
            { data				: 'animal_mortandad_observacion',      name : 'animal_mortandad_observacion'},
        ]
    });

    $('#tableConsumo').DataTable({
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
        data : xDATA2,
        columnDefs	: [
            { targets			: [0],	visible : false,searchable : false, orderData : [0, 0] },
            { targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] },
            { targets			: [2],	visible : true,	searchable : true,	orderData : [2, 0] },
            { targets			: [3],	visible : true,	searchable : true,	orderData : [3, 0] },
            { targets			: [4],	visible : true,	searchable : true,	orderData : [4, 0] },
            { targets			: [5],	visible : true,	searchable : true,	orderData : [5, 0] },
            { targets			: [6],	visible : true,	searchable : true,	orderData : [6, 0] },
            { targets			: [7],	visible : true,	searchable : true,	orderData : [7, 0] },
        ],
        columns		: [
            { data				: 'animal_mortandad_codigo',           name : 'animal_mortandad_codigo'},
            { data				: 'tipo_estado_nombre',                name : 'tipo_estado_nombre'},
            { data				: 'animal_mortandad_fecha_denuncia_2', name : 'animal_mortandad_fecha_denuncia_2'},
            { data				: 'tipo_mortandad_nombre',             name : 'tipo_mortandad_nombre'},
            { data				: 'establecimiento_nombre',            name : 'establecimiento_nombre'},
            { data				: 'persona_denunciante_completo',      name : 'persona_denunciante_completo'},
            { data				: 'persona_verificacion_completo',     name : 'persona_verificacion_completo'},
            { data				: 'animal_mortandad_observacion',      name : 'animal_mortandad_observacion'},
        ]
    });

    $('#tableDonacion').DataTable({
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
        data : xDATA3,
        columnDefs	: [
            { targets			: [0],	visible : false,searchable : false, orderData : [0, 0] },
            { targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] },
            { targets			: [2],	visible : true,	searchable : true,	orderData : [2, 0] },
            { targets			: [3],	visible : true,	searchable : true,	orderData : [3, 0] },
            { targets			: [4],	visible : true,	searchable : true,	orderData : [4, 0] },
            { targets			: [5],	visible : true,	searchable : true,	orderData : [5, 0] },
            { targets			: [6],	visible : true,	searchable : true,	orderData : [6, 0] },
            { targets			: [7],	visible : true,	searchable : true,	orderData : [7, 0] },
        ],
        columns		: [
            { data				: 'animal_mortandad_codigo',           name : 'animal_mortandad_codigo'},
            { data				: 'tipo_estado_nombre',                name : 'tipo_estado_nombre'},
            { data				: 'animal_mortandad_fecha_denuncia_2', name : 'animal_mortandad_fecha_denuncia_2'},
            { data				: 'tipo_mortandad_nombre',             name : 'tipo_mortandad_nombre'},
            { data				: 'establecimiento_nombre',            name : 'establecimiento_nombre'},
            { data				: 'persona_denunciante_completo',      name : 'persona_denunciante_completo'},
            { data				: 'persona_verificacion_completo',     name : 'persona_verificacion_completo'},
            { data				: 'animal_mortandad_observacion',      name : 'animal_mortandad_observacion'},
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
    var xJSON   = getDominioSub('MOVIMIENTOORIGENMOTIVO');
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
        if (element.tipo_estado_parametro == 1 && element.tipo_dominio1_parametro == 1) {
            var item        = pad(element.tipo_dominio2_parametro, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_dominio2_parametro;
            option.text     = item + ' - ' + element.tipo_dominio2_nombre;
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

function selectAbigeo(valRow) {
    var xJSON   = getDominioSub('MOVIMIENTOORIGENMOTIVO');
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
        if (element.tipo_estado_parametro == 1 && element.tipo_dominio1_parametro == 4) {
            var item        = pad(element.tipo_dominio2_parametro, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_dominio2_parametro;
            option.text     = item + ' - ' + element.tipo_dominio2_nombre;
            xSELC.add(option, null);
        }
    });
}

function selectConsumo(valRow) {
    var xJSON   = getDominioSub('MOVIMIENTOORIGENMOTIVO');
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
        if (element.tipo_estado_parametro == 1 && element.tipo_dominio1_parametro == 2) {
            var item        = pad(element.tipo_dominio2_parametro, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_dominio2_parametro;
            option.text     = item + ' - ' + element.tipo_dominio2_nombre;
            xSELC.add(option, null);
        }
    });
}

function selectDonacion(valRow) {
    var xJSON   = getDominioSub('MOVIMIENTOORIGENMOTIVO');
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
        if (element.tipo_estado_parametro == 1 && element.tipo_dominio1_parametro == 5) {
            var item        = pad(element.tipo_dominio2_parametro, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_dominio2_parametro;
            option.text     = item + ' - ' + element.tipo_dominio2_nombre;
            xSELC.add(option, null);
        }
    });
}

function selectEntregado(valRow,rowEsta ) {
    var codEst  = document.getElementById(rowEsta).value;
    var xJSON   = getEstablecimientoPersona(codEst);
    var selItem = document.getElementById(valRow);

    while (selItem.length > 0) {
        selItem.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                   
    selItem.add(option, null);


    xJSON.forEach(element => {
        if (element.tipo_estado_parametro == 1) {
            var item        = pad(element.persona_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.persona_codigo;
            option.text     = item + ' - ' + element.persona_completo;                    
            selItem.add(option, null);
        }
    });
}

function selectRecibido(valRow,rowEsta ) {
    var codEst  = document.getElementById(rowEsta).value;
    var xJSON   = getEstablecimientoPersona(codEst);
    var selItem = document.getElementById(valRow);

    while (selItem.length > 0) {
        selItem.remove(0);
    }

    var option      = document.createElement('option');
    option.value    = 0;
    option.text     = 'SELECCIONAR...'; 
    option.selected = true;                   
    selItem.add(option, null);


    xJSON.forEach(element => {
        if (element.tipo_estado_parametro == 1) {
            var item        = pad(element.persona_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.persona_codigo;
            option.text     = item + ' - ' + element.persona_completo;                    
            selItem.add(option, null);
        }
    });
}

function selectPeso(AniRow, valPes, fecPes) {
    var ultPeso   = document.getElementById(valPes);
    var ultfech   = document.getElementById(fecPes);
    var codAni    = document.getElementById(AniRow).value;
    
    var xJSON   = getAnimalPeso2(codAni);

    if (xJSON != '' || xJSON != null){
        xJSON.forEach(element => {
            if (element.tipo_estado_codigo == 1 && element.animal_codigo == codAni) {
                ultPeso.value  = element.animal_peso_kilogramo;
                ultfech.value  = element.animal_peso_fecha_2;
            }
        });
    }
    
    if(xJSON == '' || xJSON == null ){
        ultPeso.value  = 0;
        ultfech.value  = '01-01-1900';
    }
}

function selectValidar(valIde, valPes, fecPes, codSel, codAcc) {
    var nomIde  = document.getElementById(valIde);
    var ultPeso   = document.getElementById(valPes);
    var ultfech   = document.getElementById(fecPes);
    var codSel  = document.getElementById(codSel).value;
    
    switch (codAcc) {
        case 1:
            nomIde.value = '';
            break;
    
        case 2:
            ultPeso.value  = 0;
            ultfech.value  = '01-01-1900';
            nomIde.value = '';
            break;
    }
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

        case 'viewAbigeo':
            selectEstablecimiento('var020');
            selectPotrero('var021', 'var020');
            selectDenunciante('var033', 'var020');
            selectVerificar('var034', 'var020');
            selectIdentificado('var024');
            selectPropietario('var026', 'var020');
            selectOrigen('var027');
            selectRaza('var028');
            selectCategoria('var029');
            selectCarimbo('var030');
            selectAbigeo('var031');

            viewInput('col012', 1);
            viewInput('col013', 0);
            viewInput('col014', 0);
            viewInput('col015', 0);
            viewInput('col016', 0);
            viewInput('col017', 0);
            break;

        case 'viewConsumo':
            selectEstablecimiento('var040');
            selectPotrero('var041', 'var040');
            selectDenunciante('var044', 'var040');
            selectIdentificado('var045');
            selectPropietario('var047', 'var040');
            selectOrigen('var048');
            selectRaza('var049');
            selectCategoria('var050');
            selectCarimbo('var051');
            selectConsumo('var042');

           viewInput('col018', 1);
           viewInput('col019', 0);
           viewInput('col020', 0);
           viewInput('col021', 0);
           viewInput('col022', 0);
           viewInput('col023', 0);
           break;

        case 'viewDonacion':
            selectEstablecimiento('var060');
            selectPotrero('var063', 'var060');
            selectIdentificado('var061');
            selectPropietario('var064', 'var060');
            selectOrigen('var065');
            selectRaza('var066');
            selectCategoria('var067');
            selectCarimbo('var068');
            selectDonacion('var069');
            selectEntregado('var071','var060');
            selectRecibido('var072','var060');

            viewInput('col024', 1);
            viewInput('col025', 0);
            viewInput('col026', 0);
            viewInput('col027', 0);
            viewInput('col028', 0);
            viewInput('col029', 0);
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

    if (banRow == 0 && codElem.id == 'col012'){
        $('#var025').prop('required',false);
    }

    if (banRow == 1 && codElem.id == 'col012'){
        $('#var025').prop('required',true);
    }

    if (banRow == 0 && codElem.id == 'col006'){
        $('#var006').prop('required',false);
    }

    if (banRow == 1 && codElem.id == 'col006'){
        $('#var006').prop('required',true);
    }

    if (banRow == 0 && codElem.id == 'col018'){
        $('#var046').prop('required',false);
    }

    if (banRow == 1 && codElem.id == 'col018'){
        $('#var046').prop('required',true);
    }

    if (banRow == 0 && codElem.id == 'col024'){
        $('#var062').prop('required',false);
    }

    if (banRow == 1 && codElem.id == 'col024'){
        $('#var062').prop('required',true);
    }
}

function changeIdentificacion(valRow){
    var codElem = document.getElementById(valRow);

    if (codElem.value != 0) {
        viewInput('col006', 1);
        viewInput('col007', 0);
        viewInput('col008', 0);
        viewInput('col009', 0);
        viewInput('col010', 0);
        viewInput('col011', 0);

        viewInput('col012', 1);
        viewInput('col013', 0);
        viewInput('col014', 0);
        viewInput('col015', 0);
        viewInput('col016', 0);
        viewInput('col017', 0);

        viewInput('col018', 1);
        viewInput('col019', 0);
        viewInput('col020', 0);
        viewInput('col021', 0);
        viewInput('col022', 0);
        viewInput('col023', 0);

        viewInput('col024', 1);
        viewInput('col025', 0);
        viewInput('col026', 0);
        viewInput('col027', 0);
        viewInput('col028', 0);
        viewInput('col029', 0);

    } else {
        viewInput('col006', 0);
        viewInput('col007', 1);
        viewInput('col008', 1);
        viewInput('col009', 1);
        viewInput('col010', 1);
        viewInput('col011', 1);
//Abigeo
        viewInput('col012', 0);
        viewInput('col013', 1);
        viewInput('col014', 1);
        viewInput('col015', 1);
        viewInput('col016', 1);
        viewInput('col017', 1);
// Consumo
        viewInput('col018', 0);
        viewInput('col019', 1);
        viewInput('col020', 1);
        viewInput('col021', 1);
        viewInput('col022', 1);
        viewInput('col023', 1);
// Donación
        viewInput('col024', 0);
        viewInput('col025', 1);
        viewInput('col026', 1);
        viewInput('col027', 1);
        viewInput('col028', 1);
        viewInput('col029', 1);
    }

}

function selectAnimalIden(valRow, codEst, codSel, nomAni) {
    var codEst  = document.getElementById(codEst).value;
    var codSel  = document.getElementById(codSel).value;
    var nomAni  = document.getElementById(nomAni).value;
    var codAni  = document.getElementById(valRow);
    var bandAni = false;
    var xJSON1   = getAnimalActivo(codEst);

    if (codSel != 0 && nomAni != 0 && nomAni != '' && nomAni != null){  
        xJSON1.forEach(element1 => {
            if(codSel == 1 && element1.animal_codigo_rp == nomAni){   
                codAni.value  = element1.animal_codigo;
                bandAni = true;
            }

            if(codSel == 2 && element1.animal_codigo_nombre == nomAni){
                codAni.value  = element1.animal_codigo;
                bandAni = true;
            }

            if(codSel == 3 && element1.animal_codigo_hbp == nomAni){
                codAni.value  = element1.animal_codigo;
                bandAni = true;
            }

            if(codSel == 4 && element1.animal_codigo_electronico == nomAni){
                codAni.value  = element1.animal_codigo;
                bandAni = true;
            }      
        });
    }
    
    if(codSel == 0){
        xJSON1.forEach(element1 => {
            if(element1.tipo_carimbo_codigo == nomAni){   
                codAni.value  = element1.animal_codigo;
                bandAni = true;
            }
        });
    }

    if (bandAni == false) {
        codAni.value  = 0;
        swal('ERROR, No coinciden los Datos');
    }
}