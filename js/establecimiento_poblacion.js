$(document).ready(function() {
    var codEst  = document.getElementById('codestablecimiento').className;	
    var colCod  = 1;
    var tabDat  = $('#tableDetalle').DataTable({
        "paging":   false,
        "ordering": false,
        "searching": false,
        "info":     false
    });
    
    $('#addRow').on('click', function () {
        tabDat.row.add([
            "<td><button id='var100_"+ colCod +"' type='button' class='btn btn-danger'><i class='ti-trash'></i></button></td>",
            "<td><select id='var101_"+ colCod +"' name='var101_"+ colCod +"' onblur='sumaTotalPoblacion();' class='select2 form-control custom-select' style='width:100%; height:40px;' required></select></td>",
            "<td><select id='var102_"+ colCod +"' name='var102_"+ colCod +"' onblur='sumaTotalPoblacion();' class='select2 form-control custom-select' style='width:100%; height:40px;' required></select></td>",
            "<td><select id='var103_"+ colCod +"' name='var103_"+ colCod +"' onblur='sumaTotalPoblacion();' class='select2 form-control custom-select' style='width:100%; height:40px;' required></select></td>",
            "<td><select id='var104_"+ colCod +"' name='var104_"+ colCod +"' onblur='sumaTotalPoblacion();' class='select2 form-control custom-select' style='width:100%; height:40px;' required></select></td>",
            "<td><input  id='var105_"+ colCod +"' name='var105_"+ colCod +"' onblur='sumaTotalPoblacion();' class='form-control' type='number' step='.01' value='0' style='width:100%; height:40px;'></td>",
            "<td><input  id='var106_"+ colCod +"' name='var106_"+ colCod +"' onblur='sumaTotalPoblacion();' class='form-control' type='number' min='1' required></td>"
        ]).draw(true);

        selectPropietario(codEst, 'var101', colCod);
        selectOrigen('var102', colCod);
        selectRaza('var103', colCod);
        selectCategoria('var104', colCod);
        colCod++;
    });

    $('#tableDetalle').on('click', '.btn-danger', function() {
        tabDat.row($(this).parents('tr')).remove().draw(false);
    });

    $('#addRow').click(); 
});