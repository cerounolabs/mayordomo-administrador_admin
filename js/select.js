function selectDominio(rowInput, rowDominio, rowBand) {
    var selItem = document.getElementById(rowInput);
    var xJSON   = getDominio(rowDominio);
            
    while (selItem.length > 0) {
        selItem.remove(0);
    }

    switch (rowBand) {
        case 1:
            var option      = document.createElement('option');
            option.value    = 0;
            option.text     = 'TODOS'; 
            option.selected = true;                    
            selItem.add(option, null);
            break;
    
        case 2:
            var option      = document.createElement('option');
            option.text     = 'SELECCIONAR...';
            option.disabled = true;
            option.selected = true;                    
            selItem.add(option, null);
            break;
    }

    xJSON.forEach(element => {
        if (element.tipo_estado_parametro == 1) {
            var item        = pad(element.tipo_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_parametro;
            option.text     = item + ' - ' + element.tipo_nombre;
            selItem.add(option, null);
        }
    });
}

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

function selectEstablecimientoPersona(rowInput, rowEsta, codTipo, rowBand) {
    var selEsta = document.getElementById(rowEsta);
    var xJSON   = getEstablecimientoPersona(selEsta.value);
    var selItem = document.getElementById(rowInput);

    while (selItem.length > 0) {
        selItem.remove(0);
    }

    switch (rowBand) {
        case 1:
            var option      = document.createElement('option');
            option.value    = 0;
            option.text     = 'TODOS'; 
            option.selected = true;                    
            selItem.add(option, null);
            break;
    
        case 2:
            var option      = document.createElement('option');
            option.text     = 'SELECCIONAR...';
            option.disabled = true;
            option.selected = true;                    
            selItem.add(option, null);
            break;
    }
    
    xJSON.forEach(element => {
        if (element.establecimiento_codigo == selEsta.value && element.tipo_estado_codigo == 1 && element.tipo_rol_parametro == codTipo) {
            var item        = pad(element.persona_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.persona_codigo;
            option.text     = item + ' - ' + element.persona_completo;                    
            selItem.add(option, null);
        }
    });
}

function selectAnimalCategoria(rowEspecie, rowCategoria, rowInput, rowBand) {
    var selItem = document.getElementById(rowInput);
    var selCate = document.getElementById(rowCategoria);
    var xJSON   = getDominioTri('ANIMALESPECIECATEGORIASUBCATEGORIA');

    while (selItem.length > 0) {
        selItem.remove(0);
    }

    switch (rowBand) {
        case 1:
            var option      = document.createElement('option');
            option.value    = 0;
            option.text     = 'TODOS'; 
            option.selected = true;                    
            selItem.add(option, null);
            break;
    
        case 2:
            var option      = document.createElement('option');
            option.text     = 'SELECCIONAR...';
            option.disabled = true;
            option.selected = true;                    
            selItem.add(option, null);
            break;
    }

    console.log('rowEspecie => ' + rowEspecie);
    console.log('selCate.value => ' + selCate.value);
    xJSON.forEach(element => {
        if (element.tipo_dominio1_codigo == rowEspecie && element.tipo_dominio2_parametro == selCate.value) {
            var item        = pad(element.tipo_dominio3_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.tipo_dominio3_parametro;
            option.text     = item + ' - ' + element.tipo_dominio3_nombre;
            selItem.add(option, null);
        }
    });
}