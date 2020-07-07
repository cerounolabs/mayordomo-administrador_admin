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
    var xDATA       = getAnimal(codEst.value, codCat.value, codSub.value, codOrg.value, codRaz.value, codPro.value, codPel.value, codGra.value, codHac.value);

    var tableData   = $('#tableLoad').DataTable(
        {
            processing	: true,
            destroy		: true,
            searching	: false,
            paging		: false,
            lengthChange: true,
            info		: false,
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
            data : xDATA,
            columnDefs	: [
                { targets			: [0],	visible : true, searchable : true,	orderData : [0, 0] },
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
                { targets			: [16],	visible : true,	searchable : true,	orderData : [16, 0] },
            ],
            columns		: [
                { data				: 'animal_codigo', name : 'animal_codigo'},
                { data				: 'tipo_estado_nombre', name : 'tipo_estado_nombre'},
                { data				: 'animal_codigo_electronico', name : 'animal_codigo_electronico'},
                { data				: 'animal_codigo_rp', name : 'animal_codigo_rp'},
                { data				: 'animal_codigo_hdp', name : 'animal_codigo_hdp'},
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
        var xDATA       = getAnimal(codEst.value, codCat.value, codSub.value, codOrg.value, codRaz.value, codPro.value, codPel.value, codGra.value, codHac.value);
        tableData.clear().rows.add(xDATA).draw();
    });
});