<?php
    require '../class/function/curl_api.php';
    require '../class/function/function.php';
    require '../class/session/session_system.php';

    if(isset($_GET['code'])){
        $codeRest       = $_GET['code'];
        $msgRest        = $_GET['msg'];
    } else {
        $codeRest       = 0;
        $msgRest        = '';
    }

    if(isset($_GET['establecimiento'])){
        $codEstablecimiento = $_GET['establecimiento'];
    } else {
        header('Location: ../../public/establecimiento.php');
    }

    $establecimientoJSON= get_curl('establecimiento/500/establecimiento/'.$codEstablecimiento);
?>

<!DOCTYPE html>
<html lang="es" dir="ltr">

<head>
<?php
    include '../include/header.php';
?>
</head>

<body>
    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div id="main-wrapper">
<?php
    	include '../include/menu.php';
?>
       
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <div class="page-breadcrumb">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card" style="margin-bottom: 0px;">
                            <div class="card-body">
                                <div class="col-4 align-self-center" style="float:right;">
                                    <div class="d-flex no-block justify-content-end align-items-center">
                                        <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item">
                                                    <a href="../public/home.php">HOME</a>
                                                </li>
                                                <li class="breadcrumb-item">
                                                    <a href="../public/establecimiento.php">ESTABLECIMIENTO</a>
                                                </li>
                                                <li class="breadcrumb-item">
                                                    <a href="../public/establecimiento_detalle.php?establecimiento=<?php echo $codEstablecimiento; ?>">DETALLE</a>
                                                </li>
                                                <li class="breadcrumb-item active" aria-current="page">POBLACI&Oacute;N</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                                <div class="col-8 align-self-center">
                                    <div class="d-flex align-items-center">
                                        <div class="d-flex align-items-center">
                                            <div class="m-r-10">
                                                <img src="../assets/images/logo_menu01.png" alt="user" width="60"/>
                                            </div>
                                            <div>
                                                <h3 class="m-b-0">ESTABLECIMIENTO: <?php echo $establecimientoJSON['data'][0]['establecimiento_nombre'].' '.$establecimientoJSON['data'][0]['establecimiento_codigo_sigor']; ?></h3>
                                                <span><?php echo strftime("%A, %d %B %G", strtotime(date('l d F Y'))); ?></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ============================================================== -->
            <!-- End Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid">
                <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <!-- row -->
                <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_poblacion.php">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title"></h4>

                                    <div class="form-group">
                                        <input type="hidden" class="form-control" id="workEstablecimiento" name="workEstablecimiento" value="<?php echo $codEstablecimiento; ?>" required readonly>
                                        <input type="hidden" class="form-control" id="workCodigo" name="workCodigo" value="0" required readonly>
                                        <input type="hidden" class="form-control" id="workModo" name="workModo" value="C" required readonly>
                                        <input type="hidden" class="form-control" id="workPage" name="workPage" value="establecimiento_detalle" required readonly>
                                        <input type="hidden" class="form-control" id="workCount" name="workCount" value="20" required readonly>
                                    </div>

                                    <div class="row">
                                        <h4 class="col-6 card-title">POBLACI&Oacute;N BOVINA DETALLE</h4>
                                        <h4 class="col-6 card-title" style="text-align: right;">
                                            <button type="submit" id="addRow" class="btn btn-info"> <i class="ti-plus"></i> Agregar Item </button>
                                        </h4>
                                    </div>

                                    <div class="table-responsive">
                                        <table id="tableDetalle" class="table v-middle" style="width: 100%;">
                                            <thead id="tableCodigo" class="<?php echo $establecimientoJSON['data'][0]['establecimiento_codigo']; ?>">
                                                <tr class="bg-light">
                                                    <th class="border-top-0">ELIMINAR</th>
                                                    <th class="border-top-0">PROPIETARIO</th>
                                                    <th class="border-top-0">ORIGEN</th>
                                                    <th class="border-top-0">RAZA</th>
                                                    <th class="border-top-0">CATEGOR&Iacute;A - SUBCATEGOR&Iacute;A</th>
                                                    <th class="border-top-0">PESO PROMEDIO</th>
                                                    <th class="border-top-0">CANTIDAD</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <h4 class="col-6 card-title">POBLACI&Oacute;N BOVINA TOTAL</h4>
                                            </div>

                                            <div class="table-responsive">
                                                <table id="tableTotal" class="table v-middle" style="width: 100%;">
                                                    <thead>
                                                        <tr class="bg-light">
                                                            <th class="border-top-0 text-left">CATEGORÍA</th>
                                                            <th class="border-top-0 text-center">TOTAL DESMAMANTE</th>
                                                            <th class="border-top-0 text-center">TOTAL VAQUILLA</th>
                                                            <th class="border-top-0 text-center">TOTAL VACA</th>
                                                            <th class="border-top-0 text-center">TOTAL NOVILLO</th>
                                                            <th class="border-top-0 text-center">TOTAL SE&Ntilde;UELO</th>
                                                            <th class="border-top-0 text-center">TOTAL BUEY</th>
                                                            <th class="border-top-0 text-center">TOTAL TORO</th>
                                                            <th class="border-top-0 text-center">TOTAL ADULTO</th>
                                                            <th class="border-top-0 text-center">TOTAL TERNERO</th>
                                                            <th class="border-top-0 text-center">TOTAL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="text-left">CANTIDAD</td>
                                                            <td id="tot01" class="text-center">0</td>
                                                            <td id="tot02" class="text-center">0</td>
                                                            <td id="tot03" class="text-center">0</td>
                                                            <td id="tot04" class="text-center">0</td>
                                                            <td id="tot05" class="text-center">0</td>
                                                            <td id="tot06" class="text-center">0</td>
                                                            <td id="tot07" class="text-center">0</td>
                                                            <td id="tot08" class="text-center">0</td>
                                                            <td id="tot09" class="text-center">0</td>
                                                            <td id="tot10" class="text-center">0</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <button type="submit" class="btn btn-info"> Guardar </button>
                                    <a role="button" class="btn btn-dark" href="../public/establecimiento_detalle.php?establecimiento=<?php echo $codEstablecimiento; ?>"> Volver </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- row -->
                <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Right sidebar -->
                <!-- ============================================================== -->
                <!-- .right-sidebar -->
                <!-- ============================================================== -->
                <!-- End Right sidebar -->
                <!-- ============================================================== -->
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
<?php
    include '../include/development.php';
?>
        </div>
        <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <div class="chat-windows"></div>
<?php
    include '../include/footer.php';
    if ($codeRest == 200) {
?>
    <script>
        $(function() {
            toastr.success('<?php echo $msgRest; ?>', 'Correcto!');
        });
    </script>
<?php
    }
    
    if (($codeRest == 204) || ($codeRest == 400) || ($codeRest == 401)) {
?>
    <script>
        $(function() {
            toastr.error('<?php echo $msgRest; ?>', 'Error!');
        });
    </script>
<?php
    }
?>

    <script>
        function getJSON(codJSON, codURL) {
            var urlJSON     = 'https://www.cerouno.me/mayordomo_api/public/v1/' + codURL;
            var dataJSON    = null;

            $.ajax({
                'async': false,
                'type': "GET",
                'global': false,
                'dataType': 'json',
                'url': urlJSON,
                'success': function (data) {
                    localStorage.setItem(codJSON, JSON.stringify(data));
                }
            });
        }

        function loadPropietario(rowInd) {
            var xJSON   = JSON.parse(localStorage.getItem("personaJSON"))['data'];
            var xSELC   = document.getElementById('var101_'+rowInd);

            while (xSELC.length > 0) {
                xSELC.remove(0);
            }
            
            xJSON.forEach(element => {
                if (element.tipo_estado_codigo == 1 && element.tipo_usuario_codigo == 49) {
                    var option      = document.createElement('option');
                    option.value    = element.persona_codigo;
                    option.text     = element.persona_completo;                    
                    xSELC.add(option, null);
                }
            });
        }

        function loadOrigen(rowInd) {
            var xJSON   = JSON.parse(localStorage.getItem("dominioJSON"))['data'];
            var xSELC   = document.getElementById('var102_'+rowInd);

            while (xSELC.length > 0) {
                xSELC.remove(0);
            }
            
            xJSON.forEach(element => {
                if (element.tipo_estado_codigo == 1 && element.tipo_dominio == 'ANIMALORIGEN') {
                    var option      = document.createElement('option');
                    option.value    = element.tipo_codigo;
                    option.text     = element.tipo_nombre;

                    if (element.tipo_codigo == 9){
                        option.selected = true;
                    } else {
                        option.selected = false;
                    }

                    xSELC.add(option, null);
                }
            });
        }

        function loadRaza(rowInd) {
            var xJSON   = JSON.parse(localStorage.getItem("dominioJSON"))['data'];
            var xSELC   = document.getElementById('var103_'+rowInd);

            while (xSELC.length > 0) {
                xSELC.remove(0);
            }
            
            xJSON.forEach(element => {
                if (element.tipo_estado_codigo == 1 && element.tipo_dominio == 'ANIMALRAZA') {
                    var option      = document.createElement('option');
                    option.value    = element.tipo_codigo;
                    option.text     = element.tipo_nombre;

                    if (element.tipo_codigo == 39){
                        option.selected = true;
                    } else {
                        option.selected = false;
                    }

                    xSELC.add(option, null);
                }
            });
        }

        function loadCategoria(rowInd) {
            var xJSON   = JSON.parse(localStorage.getItem("dominioJSON"))['data'];
            var xJSON1  = JSON.parse(localStorage.getItem("dominiotriJSON"))['data'];
            var xSELC   = document.getElementById('var104_'+rowInd);

            while (xSELC.length > 0) {
                xSELC.remove(0);
            }
            
            xJSON.forEach(element => {
                if (element.tipo_estado_codigo == 1 && element.tipo_dominio == 'ANIMALCATEGORIA') {
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

        function sumaTotal() {
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

        function isInPage(node) {
            return (node === document.body) ? false : document.body.contains(node);
        }

        getJSON('dominioJSON', 'default/000');
        getJSON('dominiotriJSON', 'default/040');
        getJSON('personaJSON', 'establecimiento/500/persona/<?php echo $codEstablecimiento; ?>');	

        $(document).ready(function() {
            var tabDat = $('#tableDetalle').DataTable({
                "paging":   false,
                "ordering": false,
                "searching": false,
                "info":     false
            });
            var colCod = 1;
            
            $('#addRow').on('click', function () {
                tabDat.row.add([
                    "<td><button id='var100_"+ colCod +"' type='button' class='btn btn-danger'><i class='ti-trash'></i></button></td>",
                    "<td><select id='var101_"+ colCod +"' name='var101_"+ colCod +"' onblur='sumaTotal();' class='select2 form-control custom-select' style='width:100%; height:40px;' required></select></td>",
                    "<td><select id='var102_"+ colCod +"' name='var102_"+ colCod +"' onblur='sumaTotal();' class='select2 form-control custom-select' style='width:100%; height:40px;' required></select></td>",
                    "<td><select id='var103_"+ colCod +"' name='var103_"+ colCod +"' onblur='sumaTotal();' class='select2 form-control custom-select' style='width:100%; height:40px;' required></select></td>",
                    "<td><select id='var104_"+ colCod +"' name='var104_"+ colCod +"' onblur='sumaTotal();' class='select2 form-control custom-select' style='width:100%; height:40px;' required></select></td>",
                    "<td><input  id='var105_"+ colCod +"' name='var105_"+ colCod +"' onblur='sumaTotal();' class='form-control' type='number' step='.01' value='0' style='width:100%; height:40px;'></td>",
                    "<td><input  id='var106_"+ colCod +"' name='var106_"+ colCod +"' onblur='sumaTotal();' class='form-control' type='number' min='1' required></td>"
                ]).draw(true);

                loadPropietario(colCod);
                loadOrigen(colCod);
                loadRaza(colCod);
                loadCategoria(colCod);
                colCod++;
            });

            $('#tableDetalle').on('click', '.btn-danger', function() {
                tabDat.row($(this).parents('tr')).remove().draw(false);
            });

            $('#addRow').click(); 
        } );
    </script>
</body>
</html>