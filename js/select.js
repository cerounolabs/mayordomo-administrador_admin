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

function selectCantDia(parm01, parm02, parm03){
    console.log('entra=> '+ parm01.value + '    parm02=>'+ parm02.value + ' parm03=>'+ parm03.value);
   // var dia = '15-'+parm02.value;
    //parm02 = dia;
   // parm01='29-01-2021';
    //console.log('queda=> '+parm02);
    //console.log('fqueda=> '+parm01);
	var rowInp01 	= parm01.value;
	var rowInp02 	= parm02.value;
    var rowInp03 	= parm03;

    console.log('entra=> '+ rowInp01 + '    rowInp02=>'+ rowInp02 + ' rowInp03=>'+ rowInp03);

	var date1 		= new Date(rowInp01);
    var date2 		= new Date(rowInp02);

    console.log('date1=> '+date1);
    console.log('date2=> '+date2);

    var diffTime 	= Math.abs(date2 - date1);

    console.log('diffTime=> '+diffTime.value);

    var diffDays 	= Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    rowInp03.value	= diffDays;
  
    console.log('diffDays=> '+diffDays.value);
    console.log('queda=> '+rowInp03.value);

}

function selectDifPeso(parm01, parm02, parm03){
    console.log('entra=> '+ parm01.value + '    parm02=>'+ parm02.value + ' parm03=>'+ parm03.value);
   // var dia = '15-'+parm02.value;
   // parm02 = dia;
   // parm01='29-01-2021';
    //console.log('queda=> '+parm02);
    //console.log('fqueda=> '+parm01);
	var rowInp01 	= parm01.value;
	var rowInp02 	= parm02.value;
   // var rowInp03 	= parm03.value;
  //  console.log('entra=> '+ rowInp01 + '    rowInp02=>'+ rowInp02 + ' rowInp03=>'+ rowInp03);
    parm03.value	= (rowInp01 - rowInp02);
    //console.log('faaaaqueda=> '+rowInp03);
    console.log('faaqueda=> '+parm03);

}