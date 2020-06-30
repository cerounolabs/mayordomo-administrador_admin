function selectDominio(rowInput, rowDominio) {
    var selItem = document.getElementById(rowInput);
    var xJSON   = getDominio(rowDominio);
            
    while (selItem.length > 0) {
        selItem.remove(0);
    }

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
    var xJSON   = getPropietario(rowEsta);
    var selItem = document.getElementById(rowInput);

    while (selItem.length > 0) {
        selItem.remove(0);
    }
   
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