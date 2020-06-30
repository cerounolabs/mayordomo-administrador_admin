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
    var xJSON   = getPropietario(codEst);
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
        if (element.tipo_estado_codigo == 1 && element.tipo_rol_codigo == 49) {
            var item        = pad(element.persona_codigo, 3);
            var option      = document.createElement('option');
            option.value    = element.persona_codigo;
            option.text     = item + ' - ' + element.persona_completo;                    
            xSELC.add(option, null);
        }
    });
}

function selectMortandad(valRow) {
    var xJSON   = getDominio('MOVIMIENTOMORTANDAD');
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
    var xJSON   = getPropietario(codEst);
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

function selectCertificado(valRow, estRow) {
    var codEst  = document.getElementById(estRow).value;
    var xJSON   = getPropietario(codEst);
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
//            selectAnimal('var006', 'var009');
            selectPropietario('var007', 'var001');
            selectOrigen('var008');
            selectRaza('var009');
            selectCategoria('var010');
            selectMortandad('var011');
            selectDenunciante('var013', 'var001');
            selectCertificado('var014', 'var001');

            viewInput('col006', 1);
            viewInput('col007', 0);
            viewInput('col008', 0);
            viewInput('col009', 0);
            viewInput('col010', 0);

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
    console.log(valRow);
    var codElem = document.getElementById(valRow);

    if (codElem.value != 113) {
        viewInput('col006', 1);
        viewInput('col007', 0);
        viewInput('col008', 0);
        viewInput('col009', 0);
        viewInput('col010', 0);
    } else {
        viewInput('col006', 0);
        viewInput('col007', 1);
        viewInput('col008', 1);
        viewInput('col009', 1);
        viewInput('col010', 1);
    }

}