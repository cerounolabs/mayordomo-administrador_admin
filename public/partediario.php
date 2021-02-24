<?php
    require '../class/function/curl_api.php';
    require '../class/function/function.php';
    require '../class/session/session_system.php';
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

            <!-- ============================================================== -->
            <!-- End Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Start Page Content -->
            <!-- ============================================================== -->
            <!-- basic table -->
            <div class="email-app">
                <!-- ============================================================== -->
                <!-- Left Part -->
                <!-- ============================================================== -->
                <div class="left-part" style="background-color:#fff;">
                    <a class="ti-menu ti-close btn btn-success show-left-part d-block d-md-none" href="javascript:void(0)"></a>
                    <div class="scrollable" style="height:100%;">
                        <div class="divider"></div>
                        <ul class="list-group">
                            <div class="btn-group">
                                <button class="btn btn-success dropdown-toggle" style="width:100%; width:100%;" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Movimiento Entrada
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Nacimiendo</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Compra</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Sobrante Inventario</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Donacion Inventario</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Traslado</a>
                                </div>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>

                            <div class="btn-group">
                                <button class="btn btn-danger dropdown-toggle" style="width:100%" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Movimiento Salida
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('viewMortandad');">Mortandad</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('viewConsumo');">Consumo</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Venta</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('viewAbigeo');">Abigeo</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('viewDonacion');">Donacion</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Faltante de Inventario</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Traslado</a>
                                </div>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>

                            <div class="btn-group">
                                <button class="btn btn-info" type="button" style="width:100%" onclick="viewDetail('');"> Traslado de Potrero </button>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>

                            <div class="btn-group">
                                <button class="btn btn-info" type="button" style="width:100%" onclick="viewDetail('');"> Recategorizacion </button>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>

                            <div class="btn-group">
                                <button class="btn btn-info" type="button" style="width:100%" onclick="viewDetail('');"> Informe </button>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>

                            <div class="btn-group">
                                <button class="btn btn-info" type="button" style="width:100%" onclick="viewDetail('');"> Vacunacion </button>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>

                            <div class="btn-group">
                                <button class="btn btn-info" type="button" style="width:100%" onclick="viewDetail('');"> Sanitacion </button>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>

                            <div class="btn-group">
                                <button class="btn btn-primary dropdown-toggle" style="width:100%" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Actividad Reproduccion </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Servicio</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Andrologia</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">G.D.R.</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Diagnostico de preñez</a>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="viewDetail('');">Diagnostico de preñez</a>
                                </div>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>

                            <div class="btn-group">
                                <button class="btn btn-info" type="button" style="width:100%" onclick="viewDetail('');"> Pesaje </button>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>

                            <div class="btn-group">
                                <button class="btn btn-info" type="button" style="width:100%" onclick="viewDetail('');"> Suplementacion </button>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>

                            <div class="btn-group">
                                <button class="btn btn-info" type="button" style="width:100%" onclick="viewDetail('');"> Enfermedades y Tratamientos </button>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>

                            <div class="btn-group">
                                <button class="btn btn-info" type="button" style="width:100%" onclick="viewDetail('');"> Inventario </button>
                            </div>

                            <li class="list-group-item">
                                <hr>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- Right Part  Mail Compose -->
                <!-- ============================================================== -->
                <div class="right-part mail-compose" style="padding:20px 20px 0px 20px;">
<!-- DETALLE MORTANDAD -->
                    <div class="row" id="viewMortandad" style="display:none;">
                        <div class="col-12"> 
                            <div class="card" style="margin-bottom:10px;">
                                <form id="form" data-parsley-validate class="validation-wizard wizard-circle m-t-4" method="post" action="../class/crud/tarea_mortandad.php" enctype="multipart/form-data">
                                    <div class="modal-header" style="color:#fff; background:#163562;">
                                        <h4 class="modal-title" id="vcenter"> MORTANDAD </h4>
                                    </div>
                                    
                                    <div class="modal-body" >
                                        <div class="form-group">
                                            <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>
                                            <input id="workModo" name="workModo" value="C" class="form-control" type="hidden" required readonly>
                                            <input id="workPage" name="workPage" value="partediario.php?" class="form-control" type="hidden" required readonly>
                                            <input id="workEstado" name="workEstado" value="1" class="form-control" type="hidden" required readonly>
                                        </div>

                                        <div class="row pt-3">
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var001">ESTABLECIMIENTO</label>
                                                    <select id="var001" name="var001" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var002">SECTOR - POTRERO</label>
                                                    <select id="var002" name="var002" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var003">LATITUD</label>
                                                    <input id="var003" name="var003" class="form-control" type="text" style="text-transform:uppercase; height:50px;" placeholder="Latitud">
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var004"> LONGITUD </label>
                                                    <input id="var004" name="var004" class="form-control" type="text" style="text-transform:uppercase; height:50px;" placeholder="Longitud">
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var005">IDENTIFICACION INDIVIDUAL</label>
                                                    <select id="var005" name="var005" class="select2 form-control custom-select" onchange="changeIdentificacion(this.id); selectValidar('var006', '0', '0',this.id, 1);" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-9">
                                                <div class="form-group" id="col006">
                                                    <label for="var006">IDENTIFICACION ANIMAL</label> 
                                                    <input id="var006" name="var006" class="form-control" onchange="selectAnimalIden('var019', 'var001','var005', 'var006');" type="text" data-click="swal-animal_change" style="text-transform:uppercase; height:50px;" placeholder="ANIMAL">
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col007">
                                                <div class="form-group">
                                                    <label for="var007">PROPIETARIO</label>
                                                    <select id="var007" name="var007" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col008">
                                                <div class="form-group">
                                                    <label for="var008">ORIGEN</label>
                                                    <select id="var008" name="var008" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col009">
                                                <div class="form-group">
                                                    <label for="var009">RAZA</label>
                                                    <select id="var009" name="var009" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col010">
                                                <div class="form-group">
                                                    <label for="var010">CATEGORIA - SUBCATEGORIA</label>
                                                    <select id="var010" name="var010" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col011">
                                                <div class="form-group">
                                                    <label for="var017">CARIMBO</label>
                                                    <select id="var017" name="var017" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var011">MOTIVO</label>
                                                    <select id="var011" name="var011" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group"> 
                                                    <label for="var012">FECHA DENUNCIA</label>
                                                    <input id="var012" name="var012" class="form-control" type="date" style="text-transform:lowercase; height:50px;" placeholder="FECHA" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var013">DENUNCIADO POR</label>
                                                    <select id="var013" name="var013" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" style="display: none;">
                                                <div class="form-group">
                                                    <label for="var014">VERIFICADO POR</label>
                                                    <select id="var014" name="var014" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;"></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var015_1">IMAGEN 1</label>
                                                    <input id="var015_1" name="var015_1" class="form-control" type="file" style="text-transform:lowercase; height:50px;" placeholder="FECHA" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var015_2">IMAGEN 2</label>
                                                    <input id="var015_2" name="var015_2" class="form-control" type="file" style="text-transform:lowercase; height:50px;" placeholder="FECHA">
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var015_3">IMAGEN 3</label>
                                                    <input id="var015_3" name="var015_3" class="form-control" type="file" style="text-transform:lowercase; height:50px;" placeholder="FECHA">
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var015_4">IMAGEN 4</label>
                                                    <input id="var015_4" name="var015_4" class="form-control" type="file" style="text-transform:lowercase; height:50px;" placeholder="FECHA">
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="input-group mb-3">
                                                    <input type="hidden" id="var019" name="var019" class="form-control" value="" style="height:40px; text-transform:lowercase;">
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label for="var016">COMENTARIO</label>
                                                    <textarea id="var016" name="var016" class="form-control" rows="1" style="text-transform:uppercase;"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <button type="submit" name="submit" class="btn btn-info" style="float:right;">Agregar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                       
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <h4 class="col-10 card-title"></h4>
                                        <h4 class="col-2 card-title" style="text-align: right;">
                                            <!--<a href="javascript:void(0)" title="Nuevo" class="btn btn-info" style="background-color:#005ea6; border-color:#005ea6;" role="button" data-toggle="modal" data-target="#modal-dialog"><i class="ti-plus"></i></a>-->
                                        </h4>
                                    </div>

                                    <div class="table-responsive">
                                        <table id="tableMortandadCab" class="table v-middle" style="width: 100%;">
                                            <thead id="tableMortandadDet" class="">
                                                <tr class="bg-table-title" style="text-align:center;">
                                                    <th class="border-top-0">C&Oacute;DIGO</th>
                                                    <th class="border-top-0" style="width:80px;">ESTADO</th>
                                                    <th class="border-top-0">FECHA</th>
                                                    <th class="border-top-0">MOTIVO</th>
                                                    <th class="border-top-0">ESTABLECIMIENTO</th>
                                                    <th class="border-top-0">DENUNCIADO POR</th>
                                                    <th class="border-top-0">VERIFICADO POR</th>
                                                    <th class="border-top-0">COMENTARIO</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>                       
                    </div>

<!-- DETALLE CONSUMO -->
                    <div class="row" id="viewConsumo" style="display:none;">
                        <div class="col-12"> 
                            <div class="card">
                            <form id="form" method="post" action="../class/crud/tarea_consumo.php" enctype="multipart/form-data">
                                    <div class="modal-header" style="color:#fff; background:#163562;">
                                        <h4 class="modal-title" id="vcenter"> CONSUMO </h4>
                                    </div>
                                    
                                    <div class="modal-body" >
                                        <div class="form-group">
                                            <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>
                                            <input id="workModo" name="workModo" value="C" class="form-control" type="hidden" required readonly>
                                            <input id="workPage" name="workPage" value="partediario.php?" class="form-control" type="hidden" required readonly>
                                            <input id="workEstado" name="workEstado" value="1" class="form-control" type="hidden" required readonly>
                                        </div>

                                        <div class="row pt-3">
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var040">ESTABLECIMIENTO</label>
                                                    <select id="var040" name="var040" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var041">SECTOR - POTRERO</label>
                                                    <select id="var041" name="var041" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var042">FAENA PARA</label>
                                                    <select id="var042" name="var042" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var043">FECHA DE FAENA</label>
                                                    <input id="var043" name="var043" value="" class="form-control" type="date" style="text-transform:lowercase; height:40px;" placeholder="FECHA" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var044">FAENADO POR</label>
                                                    <select id="var044" name="var044" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var045">IDENTIFICACION INDIVIDUAL</label>
                                                    <select id="var045" name="var045" class="select2 form-control custom-select" onchange="changeIdentificacion(this.id); selectValidar('var046', 'var052', 'var053',this.id, 2)" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col018">
                                                <div class="form-group">
                                                    <label for="var046">IDENTIFICACION ANIMAL</label> 
                                                    <input id="var046" name="var046" class="form-control" onchange="selectAnimalIden('var057', 'var040','var045','var046'); selectPeso('var057', 'var052', 'var053');" type="text" data-click="swal-animal_change" style="text-transform:uppercase; height:50px;" placeholder="ANIMAL" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col019">
                                                <div class="form-group">
                                                    <label for="var047">PROPIETARIO</label>
                                                    <select id="var047" name="var047" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col020">
                                                <div class="form-group">
                                                    <label for="var048">ORIGEN</label>
                                                    <select id="var048" name="var048" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col021">
                                                <div class="form-group">
                                                    <label for="var049">RAZA</label>
                                                    <select id="var049" name="var049" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col022">
                                                <div class="form-group">
                                                    <label for="var050">CATEGORIA - SUBCATEGORIA</label>
                                                    <select id="var050" name="var050" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col023">
                                                <div class="form-group">
                                                    <label for="var051">CARIMBO</label>
                                                    <select id="var051" name="var051" class="select2 form-control custom-select" onchange="selectAnimalIden('var057', 'var040','var045','var051');  selectPeso('var057', 'var052', 'var053');" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var052"> ULTIMO PESAJE </label>
                                                    <input id="var052" name="var052" value="" class="form-control" type="number" style="text-transform:lowercase; height:40px;" placeholder="PESO VIVO" readonly>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var053"> FECHA DE ULTIMO PESAJE </label>
                                                    <input id="var053" name="var053" value="" class="form-control" type="text" style="text-transform:lowercase; height:40px;" placeholder="FECHA DE ULTIMO PESAJE" readonly>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var054">PESO VIVO</label>
                                                    <input id="var054" name="var054" value="" class="form-control" type="number" min="1" style="text-transform:lowercase; height:40px;" placeholder="PESO VIVO" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var055"> PESO FAENADO </label>
                                                    <input id="var055" name="var055" value="" class="form-control" type="number" min="1" style="text-transform:lowercase; height:40px;" placeholder="PESO FAENADO" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var056_1">IMAGEN 1</label>
                                                    <input id="var056_1" name="var056_1" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var056_2">IMAGEN 2</label>
                                                    <input id="var056_2" name="var056_2" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var056_3">IMAGEN 3</label>
                                                    <input id="var056_3" name="var056_3" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var056_4">IMAGEN 4</label>
                                                    <input id="var056_4" name="var056_4" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="input-group mb-3">
                                                    <input type="hidden" id="var057" name="var057" class="form-control" value="" style="height:40px; text-transform:lowercase;">
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label for="var058">COMENTARIO</label>
                                                    <textarea id="var058" name="var058" value="" class="form-control" rows="1" style="text-transform:uppercase;"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <button type="submit" name="submit" class="btn btn-info" style="float:right;">Agregar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                       
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <h4 class="col-10 card-title"></h4>
                                        <h4 class="col-2 card-title" style="text-align: right;">
                                            <!--<a href="javascript:void(0)" title="Nuevo" class="btn btn-info" style="background-color:#005ea6; border-color:#005ea6;" role="button" data-toggle="modal" data-target="#modal-dialog"><i class="ti-plus"></i></a>-->
                                        </h4>
                                    </div>

                                    <div class="table-responsive">
                                        <table id="tableConsumo" class="table v-middle" style="width: 100%;">
                                            <thead id="tableConsumoCodigo" class="">
                                                <tr class="bg-table-title" style="text-align:center;">
                                                    <th class="border-top-0">C&Oacute;DIGO</th>
                                                    <th class="border-top-0" style="width:80px;">ESTADO</th>
                                                    <th class="border-top-0">FECHA</th>
                                                    <th class="border-top-0">MOTIVO</th>
                                                    <th class="border-top-0">ESTABLECIMIENTO</th>
                                                    <th class="border-top-0">DENUNCIADO POR</th>
                                                    <th class="border-top-0">VERIFICADO POR</th>
                                                    <th class="border-top-0">COMENTARIO</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

<!-- DETALLE ABIGEO -->
                    <div class="row" id="viewAbigeo" style="display:none;">
                        <div class="col-12"> 
                            <div class="card">
                                <form id="form" method="post" action="../class/crud/tarea_abigeo.php" enctype="multipart/form-data">
                                    <div class="modal-header" style="color:#fff; background:#163562;">
                                        <h4 class="modal-title" id="vcenter"> ABIGEO </h4>
                                    </div>
                                    
                                    <div class="modal-body" >
                                        <div class="form-group">
                                            <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>
                                            <input id="workModo" name="workModo" value="C" class="form-control" type="hidden" required readonly>
                                            <input id="workPage" name="workPage" value="partediario.php?" class="form-control" type="hidden" required readonly>
                                            <input id="workEstado" name="workEstado" value="1" class="form-control" type="hidden" required readonly>

                                        </div>

                                        <div class="row pt-3">
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var020">ESTABLECIMIENTO</label>
                                                    <select id="var020" name="var020" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var021">SECTOR - POTRERO</label>
                                                    <select id="var021" name="var021" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var022">LATITUD</label>
                                                    <input id="var022" name="var022" value="" class="form-control" type="text" style="text-transform:lowercase; height:40px;" placeholder="Latitud">
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var023"> LONGITUD </label>
                                                    <input id="var023" name="var023" value="" class="form-control" type="text" style="text-transform:lowercase; height:40px;" placeholder="Longitud">
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var024">IDENTIFICACION INDIVIDUAL</label>
                                                    <select id="var024" name="var024" class="select2 form-control custom-select" onchange="changeIdentificacion(this.id); selectValidar('var025', '0', '0',this.id, 1);" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-9" id="col012" class="activar">
                                                <div class="form-group">
                                                    <label for="var025">IDENTIFICACION ANIMAL</label> 
                                                    <input id="var025" name="var025" class="form-control" onchange="selectAnimalIden('var036', 'var020','var024','var025');" type="text" data-click="swal-animal_change" style="text-transform:uppercase; height:50px;" placeholder="ANIMAL" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col013">
                                                <div class="form-group">
                                                    <label for="var026">PROPIETARIO</label>
                                                    <select id="var026" name="var026" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col014">
                                                <div class="form-group">
                                                    <label for="var027">ORIGEN</label>
                                                    <select id="var027" name="var027" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col015">
                                                <div class="form-group">
                                                    <label for="var028">RAZA</label>
                                                    <select id="var028" name="var028" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col016">
                                                <div class="form-group">
                                                    <label for="var029">CATEGORIA - SUBCATEGORIA</label>
                                                    <select id="var029" name="var029" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col017">
                                                <div class="form-group">
                                                    <label for="var030">CARIMBO</label>
                                                    <select id="var030" name="var030" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var031">MOTIVO</label>
                                                    <select id="var031" name="var031" class="select2 form-control custom-select" onchange="" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var032">FECHA DENUNCIA</label>
                                                    <input id="var032" name="var032" value="" class="form-control" type="date" style="text-transform:lowercase; height:40px;" placeholder="FECHA" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var033">DENUNCIADO POR</label>
                                                    <select id="var033" name="var033" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" style="display: none;">
                                                <div class="form-group">
                                                    <label for="var034">CERTIFICADO POR</label>
                                                    <select id="var034" name="var034" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" ></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var035_1">IMAGEN 1</label>
                                                    <input id="var035_1" name="var035_1" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var035_2">IMAGEN 2</label>
                                                    <input id="var035_2" name="var035_2" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var035_3">IMAGEN 3</label>
                                                    <input id="var035_3" name="var035_3" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var035_4">IMAGEN 4</label>
                                                    <input id="var035_4" name="var035_4" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="input-group mb-3">
                                                    <input type="hidden" id="var036" name="var036" class="form-control" value="" style="height:40px; text-transform:lowercase;">
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label for="var037">COMENTARIO</label>
                                                    <textarea id="var037" name="var037" value="" class="form-control" rows="1" style="text-transform:uppercase;"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <button type="submit" name="submit" class="btn btn-info" style="float:right">Agregar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                       
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <h4 class="col-10 card-title"></h4>
                                        <h4 class="col-2 card-title" style="text-align: right;">
                                            <!--<a href="javascript:void(0)" title="Nuevo" class="btn btn-info" style="background-color:#005ea6; border-color:#005ea6;" role="button" data-toggle="modal" data-target="#modal-dialog"><i class="ti-plus"></i></a>-->
                                        </h4>
                                    </div>

                                    <div class="table-responsive">
                                        <table id="tableAbigueo" class="table v-middle" style="width: 100%;">
                                            <thead id="tableAbigueoCodigo" class="">
                                                <tr class="bg-table-title" style="text-align:center;">
                                                    <th class="border-top-0">C&Oacute;DIGO</th>
                                                    <th class="border-top-0" style="width:80px;">ESTADO</th>
                                                    <th class="border-top-0">FECHA</th>
                                                    <th class="border-top-0">MOTIVO</th>
                                                    <th class="border-top-0">ESTABLECIMIENTO</th>
                                                    <th class="border-top-0">DENUNCIADO POR</th>
                                                    <th class="border-top-0">VERIFICADO POR</th>
                                                    <th class="border-top-0">COMENTARIO</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>

<!-- DETALLE DONACION -->
                    <div class="row" id="viewDonacion" style="display:none;">
                        <div class="col-12"> 
                            <div class="card">
                                <form id="form" method="post" action="../class/crud/tarea_donacion.php" enctype="multipart/form-data">
                                    <div class="modal-header" style="color:#fff; background:#163562;">
                                        <h4 class="modal-title" id="vcenter"> DONACION </h4>
                                    </div>
                                    
                                    <div class="modal-body" >
                                        <div class="form-group">
                                        <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>
                                            <input id="workModo" name="workModo" value="C" class="form-control" type="hidden" required readonly>
                                            <input id="workPage" name="workPage" value="partediario.php?" class="form-control" type="hidden" required readonly>
                                            <input id="workEstado" name="workEstado" value="1" class="form-control" type="hidden" required readonly>
                                        </div>

                                        <div class="row pt-3">
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var060">ESTABLECIMIENTO</label>
                                                    <select id="var060" name="var060" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var061">IDENTIFICACION INDIVIDUAL</label>
                                                    <select id="var061" name="var061" class="select2 form-control custom-select" onchange="changeIdentificacion(this.id); selectValidar('var062', 'var073', 'var074',this.id, 2);" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col024">
                                                <div class="form-group">
                                                    <label for="var062">IDENTIFICACION ANIMAL</label> 
                                                    <input id="var062" name="var062" class="form-control" onchange="selectAnimalIden('var078', 'var060','var061','var062'); selectPeso('var078', 'var073', 'var074');" type="text" data-click="swal-animal_change" style="text-transform:uppercase; height:50px;" placeholder="ANIMAL" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var063">SECTOR - POTRERO</label>
                                                    <select id="var063" name="var063" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div> 
                                            <div class="col-sm-12 col-md-3" id="col025">
                                                <div class="form-group">
                                                    <label for="var064">PROPIETARIO</label>
                                                    <select id="var064" name="var064" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col026">
                                                <div class="form-group">
                                                    <label for="var065">ORIGEN</label>
                                                    <select id="var065" name="var065" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col027">
                                                <div class="form-group">
                                                    <label for="var066">RAZA</label>
                                                    <select id="var066" name="var066" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col028">
                                                <div class="form-group">
                                                    <label for="var067">CATEGORIA - SUBCATEGORIA</label>
                                                    <select id="var067" name="var067" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3" id="col029">
                                                <div class="form-group">
                                                    <label for="var068">CARIMBO</label>
                                                    <select id="var068" name="var068" class="select2 form-control custom-select" onchange="selectAnimalIden('var078', 'var060','var061','var068');  selectPeso('var078', 'var073', 'var074');" style="width:100%; height:50px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var069">TIPO DONACI&Oacute;N</label>
                                                    <select id="var069" name="var069" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var070">FECHA ENTREGA</label>
                                                    <input id="var070" name="var070" value="" class="form-control" type="date" style="text-transform:lowercase; height:40px;" placeholder="FECHA" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var071">ENTREGADO POR</label>
                                                    <select id="var071" name="var071" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var072">RECIBIDO POR</label>
                                                    <select id="var072" name="var072" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var073"> ULTIMO PESAJE </label>
                                                    <input id="var073" name="var073" value="" class="form-control" type="number" style="text-transform:lowercase; height:40px;" placeholder="PESO VIVO" readonly>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var074"> FECHA DE ULTIMO PESAJE </label>
                                                    <input id="var074" name="var074" value="" class="form-control" type="text" style="text-transform:lowercase; height:40px;" placeholder="FECHA DE ULTIMO PESAJE" readonly>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var075">PESO VIVO</label>
                                                    <input id="var075" name="var075" value="" class="form-control" type="number" min="1" style="text-transform:lowercase; height:40px;" placeholder="PESO VIVO" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var076"> PESO FAENADO </label>
                                                    <input id="var076" name="var076" value="" class="form-control" type="number" min="1" style="text-transform:lowercase; height:40px;" placeholder="PESO FAENADO" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var077_1">IMAGEN 1</label>
                                                    <input id="var077_1" name="var077_1" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" required>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var077_2">IMAGEN 2</label>
                                                    <input id="var077_2" name="var077_2" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var077_3">IMAGEN 3</label>
                                                    <input id="var077_3" name="var077_3" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var077_4">IMAGEN 4</label>
                                                    <input id="var077_4" name="var077_4" value="" class="form-control" type="file" style="text-transform:lowercase; height:40px;" placeholder="FECHA" >
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-3">
                                                <div class="input-group mb-3">
                                                    <input type="hidden" id="var078" name="var078" class="form-control" value="" style="height:40px; text-transform:lowercase;">
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label for="var079">COMENTARIO</label>
                                                    <textarea id="var079" name="var079" value="" class="form-control" rows="1" style="text-transform:uppercase;"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <button type="submit" name="submit" class="btn btn-info" style="float:right;">Agregar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                       
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <h4 class="col-10 card-title"></h4>
                                        <h4 class="col-2 card-title" style="text-align: right;">
                                            <!--<a href="javascript:void(0)" title="Nuevo" class="btn btn-info" style="background-color:#005ea6; border-color:#005ea6;" role="button" data-toggle="modal" data-target="#modal-dialog"><i class="ti-plus"></i></a>-->
                                        </h4>
                                    </div>

                                    <div class="table-responsive">
                                        <table id="tableDonacion" class="table v-middle" style="width: 100%;">
                                            <thead id="tableDonacionCodigo" class="">
                                                <tr class="bg-table-title" style="text-align:center;">
                                                    <th class="border-top-0">C&Oacute;DIGO</th>
                                                    <th class="border-top-0" style="width:80px;">ESTADO</th>
                                                    <th class="border-top-0">FECHA</th>
                                                    <th class="border-top-0">MOTIVO</th>
                                                    <th class="border-top-0">ESTABLECIMIENTO</th>
                                                    <th class="border-top-0">DENUNCIADO POR</th>
                                                    <th class="border-top-0">VERIFICADO POR</th>
                                                    <th class="border-top-0">COMENTARIO</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Procesar -->
            <div id="modal-dialog" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="vcenter" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" id="modal-content">
                    <div class="modal-content">
                        <form id="form" method="post" action="../class/crud/tareamortandad.php">
                            <div class="modal-header" style="color:#fff; background:#163562;">
                        	    <h4 class="modal-title" id="vcenter"> MORTANDAD </h4>
                        		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        	</div>
                        	
                            <div class="modal-body" >
                                <div class="form-group">
                                    <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>
                                    <input id="workModo" name="workModo" value="C" class="form-control" type="hidden" required readonly>
                                    <input id="workPage" name="workPage" value="partediario.php#viewMortandad" class="form-control" type="hidden" required readonly>
                                </div>

                                <div class="row pt-3">
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var01">ESTABLECIMIENTO</label>
                                            <select id="var01" name="var01" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var02">SECTOR - POTRERO</label>
                                            <select id="var02" name="var02" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var14">COORDENADAS</label>
                                            <input id="var14" name="var14" value="" class="form-control" type="text" style="text-transform:lowercase; height:40px;" placeholder="Latitud">
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var14"> &nbsp; </label>
                                            <input id="var14" name="var14" value="" class="form-control" type="text" style="text-transform:lowercase; height:40px;" placeholder="Longitud">
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var03">MOTIVO</label>
                                            <select id="var03" name="var03" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var04">FECHA DEL EVENTO</label>
                                            <input id="var04" name="var04" value="" class="form-control" type="date" style="text-transform:lowercase; height:40px;" placeholder="FECHA" required>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var05">DENUNCIADO POR</label>
                                            <select id="var05" name="var05" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var06">CERTIFICADO POR</label>
                                            <select id="var06" name="var06" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var13">IDENTIFICACION INDIVIDUAL</label>
                                            <select id="var13" name="var13" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-9">
                                        <div class="form-group">
                                            <label for="var11">IDENTIFICACION ANIMAL</label>
                                            <select id="var11" name="var11" class="select2 form-control custom-select" style="width:100%; height:40px;" required></select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var07">PROPIETARIO</label>
                                            <select id="var07" name="var07" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var08">ORIGEN</label>
                                            <select id="var08" name="var08" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var09">RAZA</label>
                                            <select id="var09" name="var09" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-3">
                                        <div class="form-group">
                                            <label for="var10">CATEGORIA - SUBCATEGORIA</label>
                                            <select id="var10" name="var10" class="select2 form-control custom-select" onchange="" style="width:100%; height:40px;" required></select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label for="var12">COMENTARIO</label>
                                            <textarea id="var12" name="var12" value="" class="form-control" rows="5" style="text-transform:uppercase;"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-info">Agregar</button>
                                <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Modal Procesar -->
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
?>
    <script>
        const _parm01BASE = '<?php echo $usu_04; ?>';
    </script>
    
    <script src="../js/api.js"></script>
    <script src="../js/partediario.js"></script>

</body>
</html>