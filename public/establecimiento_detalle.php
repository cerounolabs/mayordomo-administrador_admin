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
    $poblacionJSON      = get_curl('establecimiento/500/poblacion/'.$codEstablecimiento);

    $totDes = 0;
    $totVaq = 0;
    $totVac = 0;
    $totNov = 0;
    $totSen = 0;
    $totBue = 0;
    $totTor = 0;
    $totAdu = 0;
    $totTer = 0;
    $totTot = 0;

    if ($poblacionJSON['code'] === 200) {
        foreach ($poblacionJSON['data'] as $dataKEY => $dataVALUE) {
            switch ($dataVALUE['tipo_categoria_codigo']) {
                case 41:
                    $totBue = $totBue + $dataVALUE['establecimiento_poblacion_cantidad'];
                    break;

                case 42:
                    $totDes = $totDes + $dataVALUE['establecimiento_poblacion_cantidad'];
                    break;

                case 43:
                    $totNov = $totNov + $dataVALUE['establecimiento_poblacion_cantidad'];
                    break;

                case 44:
                    $totSen = $totSen + $dataVALUE['establecimiento_poblacion_cantidad'];
                    break;

                case 45:
                    $totTer = $totTer + $dataVALUE['establecimiento_poblacion_cantidad'];
                    break;

                case 46:
                    $totTor = $totTor + $dataVALUE['establecimiento_poblacion_cantidad'];
                    break;

                case 47:
                    $totVac = $totVac + $dataVALUE['establecimiento_poblacion_cantidad'];
                    break;

                case 48:
                    $totVaq = $totVaq + $dataVALUE['establecimiento_poblacion_cantidad'];
                    break;
            }
        }

        $totAdu = $totDes + $totVaq + $totVac + $totNov + $totSen + $totBue + $totTor;
        $totTot = $totDes + $totVaq + $totVac + $totNov + $totSen + $totBue + $totTor + $totTer;
    }
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
                                                <li class="breadcrumb-item active" aria-current="page">DETALLE</li>
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
                <!-- basic table -->               
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                	<h4 class="col-10 card-title">ESTABLECIMIENTO</h4>
                                    <h4 class="col-2 card-title" style="text-align: right;"></h4>
								</div>
                                <div class="table-responsive">
                                    <table id="tableLoadEstablecimientoC" class="table v-middle" style="width: 100%;">
                                        <thead id="tableLoadEstablecimientoD" class="<?php echo $establecimientoJSON['data'][0]['establecimiento_codigo']; ?>">
                                            <tr class="bg-light">
                                                <th class="border-top-0">&nbsp;</th>
                                                <th class="border-top-0">ESTABLECIMIENTO</th>
                                                <th class="border-top-0">FINALIDAD</th>
                                                <th class="border-top-0">DISTRITO</th>
                                                <th class="border-top-0">C&Oacute;DIGO SENACSA</th>
                                                <th class="border-top-0">C&Oacute;DIGO SIGOR</th>
                                                <th class="border-top-0">C&Oacute;DIGO SITRAP</th>
                                                <th class="border-top-0">DIMENSI&Oacute;N</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <h4 class="col-10 card-title">POBLACI&Oacute;N BOVINA</h4>
                                            <h4 class="col-2 card-title" style="text-align: right;">
                                                <a class="btn btn-info" href="../public/establecimiento_poblacion_crud.php?establecimiento=<?php echo $codEstablecimiento; ?>" role="button" title="Agregar"><i class="ti-plus"></i></a>
                                            </h4>
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
                                                        <td id="totDes" class="text-center"><?php echo $totDes; ?></td>
                                                        <td id="totVaq" class="text-center"><?php echo $totVaq; ?></td>
                                                        <td id="totVac" class="text-center"><?php echo $totVac; ?></td>
                                                        <td id="totNov" class="text-center"><?php echo $totNov; ?></td>
                                                        <td id="totSen" class="text-center"><?php echo $totSen; ?></td>
                                                        <td id="totBue" class="text-center"><?php echo $totBue; ?></td>
                                                        <td id="totTor" class="text-center"><?php echo $totTor; ?></td>
                                                        <td id="totAdu" class="text-center"><?php echo $totAdu; ?></td>
                                                        <td id="totTer" class="text-center"><?php echo $totTer; ?></td>
                                                        <td id="totTot" class="text-center"><?php echo $totTot; ?></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left">DETALLE</td>
                                                        <td id="totDes" class="text-center"><button type="button" class="btn btn-primary" onclick="getPoblacionDetalle(42);" data-toggle="modal" data-target="#modaldiv"><i class="ti-eye"></i></button></td>
                                                        <td id="totVaq" class="text-center"><button type="button" class="btn btn-primary" onclick="getPoblacionDetalle(48);" data-toggle="modal" data-target="#modaldiv"><i class="ti-eye"></i></button></td>
                                                        <td id="totVac" class="text-center"><button type="button" class="btn btn-primary" onclick="getPoblacionDetalle(47);" data-toggle="modal" data-target="#modaldiv"><i class="ti-eye"></i></button></td>
                                                        <td id="totNov" class="text-center"><button type="button" class="btn btn-primary" onclick="getPoblacionDetalle(43);" data-toggle="modal" data-target="#modaldiv"><i class="ti-eye"></i></button></td>
                                                        <td id="totSen" class="text-center"><button type="button" class="btn btn-primary" onclick="getPoblacionDetalle(44);" data-toggle="modal" data-target="#modaldiv"><i class="ti-eye"></i></button></td>
                                                        <td id="totBue" class="text-center"><button type="button" class="btn btn-primary" onclick="getPoblacionDetalle(41);" data-toggle="modal" data-target="#modaldiv"><i class="ti-eye"></i></button></td>
                                                        <td id="totTor" class="text-center"><button type="button" class="btn btn-primary" onclick="getPoblacionDetalle(46);" data-toggle="modal" data-target="#modaldiv"><i class="ti-eye"></i></button></td>
                                                        <td id="totAdu" class="text-center">&nbsp;</td>
                                                        <td id="totTer" class="text-center"><button type="button" class="btn btn-primary" onclick="getPoblacionDetalle(45);" data-toggle="modal" data-target="#modaldiv"><i class="ti-eye"></i></button></td>
                                                        <td id="totTot" class="text-center">&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-4">
                        <div class="card" style="height:450px;">
                            <div class="card-body">
                                <div class="row">
                                	<h4 class="col-10 card-title">SECCIONES</h4>
                                    <h4 class="col-2 card-title" style="text-align: right;">
                                        <button type="button" class="btn btn-info" onclick="setSeccion(0, 1);" data-toggle="modal" data-target="#modaldiv" title="Agregar"><i class="ti-plus"></i></button>
                                	</h4>
								</div>
                                <div class="table-responsive">
                                    <table id="tableLoadSeccionC" class="table v-middle" style="width:100%;">
                                        <thead id="tableLoadSeccionD" class="">
                                            <tr class="bg-light">
                                                <th class="border-top-0">&nbsp;</th>
                                                <th class="border-top-0">SECCI&Oacute;N</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-8">
                        <div class="card" style="height:450px;">
                            <div class="card-body">
                                <div class="row">
                                	<h4 class="col-10 card-title">POTREROS</h4>
                                    <h4 class="col-2 card-title" style="text-align: right;">
                                        <button type="button" class="btn btn-info" onclick="setPotrero(0, 1);" data-toggle="modal" data-target="#modaldiv" title="Agregar"><i class="ti-plus"></i></button>
                                	</h4>
								</div>
                                <div class="table-responsive">
                                    <table id="tableLoadPotreroC" class="table v-middle" style="width: 100%;">
                                        <thead id="tableLoadPotreroD" class="">
                                            <tr class="bg-light">
                                                <th class="border-top-0">&nbsp;</th>
                                                <th class="border-top-0">SECCI&Oacute;N</th>
                                                <th class="border-top-0">POTRERO</th>
                                                <th class="border-top-0">PASTURA 1</th>
                                                <th class="border-top-0">PASTURA 2</th>
                                                <th class="border-top-0">HECTAREA</th>
                                                <th class="border-top-0">CAPACIDAD</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="card" style="height:450px;">
                            <div class="card-body">
                                <div class="row">
                                	<h4 class="col-10 card-title">LOTES</h4>
                                    <h4 class="col-2 card-title" style="text-align: right;">
                                        <button type="button" class="btn btn-info" onclick="setLote(0, 1);" data-toggle="modal" data-target="#modaldiv" title="Agregar"><i class="ti-plus"></i></button>
                                	</h4>
								</div>
                                <div class="table-responsive">
                                    <table id="tableLoadLoteC" class="table v-middle" style="width: 100%;">
                                        <thead id="tableLoadLoteD" class="">
                                            <tr class="bg-light">
                                                <th class="border-top-0">&nbsp;</th>
                                                <th class="border-top-0">LOTE</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-8">
                        <div class="card" style="height:450px;">
                            <div class="card-body">
                                <div class="row">
                                	<h4 class="col-10 card-title">PERSONAS</h4>
                                    <h4 class="col-2 card-title" style="text-align: right;">
                                        <a class="btn btn-info" href="../public/establecimiento_persona_crud.php?establecimiento=<?php echo $codEstablecimiento; ?>" role="button" title="Agregar"><i class="ti-plus"></i></a>
                                	</h4>
								</div>
                                <div class="table-responsive">
                                    <table id="tableLoadPersonaC" class="table v-middle" style="width: 100%;">
                                        <thead id="tableLoadPersonaD" class="">
                                            <tr class="bg-light">
                                                <th class="border-top-0">&nbsp;</th>
                                                <th class="border-top-0">TIPO</th>
                                                <th class="border-top-0">PERSONA / EMPRESA</th>
                                                <th class="border-top-0">C&Oacute;D. SITRAP</th>
                                                <th class="border-top-0">C&Oacute;D. SIGOR</th>
                                                <th class="border-top-0">TELF</th>
                                                <th class="border-top-0">EMAIL</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Procesar -->
                <div id="modaldiv" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="vcenter" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" id="modalcontent">
                    </div>
                </div>

                <div id="modaldiv2" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="vcenter" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" id="modalcontent2">
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

        function setEstablecimiento(codElem, codAcc){
            var xDATA       = <?php echo json_encode($establecimientoJSON['data']); ?>;
            var xJSON       = xDATA;
            var xJSON1      = JSON.parse(localStorage.getItem("dominioJSON"))['data'];
            var xJSON2      = JSON.parse(localStorage.getItem("personasJSON"))['data'];
            var xJSON3      = JSON.parse(localStorage.getItem("distritoJSON"))['data'];
            var html        = '';
            var bodyCol     = '';
            var bodyTit     = '';
            var bodyMod     = '';
            var bodyOnl     = '';
            var bodyBot     = '';
            var selEstado   = '';
            var selTipo     = '';
            var selFinalidad= '';
            var selPersona  = '';
            var selDistrito = '';

            switch (codAcc) {
                case 1:
                    bodyTit = 'ESTABLECIMIENTO NUEVO';
                    bodyCol = '#4798e8;';
                    bodyMod = 'C';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
                    break;

                case 2:
                    bodyTit = 'ESTABLECIMIENTO VER';
                    bodyCol = '#563dea;';
                    bodyMod = 'R';
                    bodyOnl = 'readonly';
                    bodyBot = '';
                    break;

                case 3:
                    bodyTit = 'ESTABLECIMIENTO EDITAR';
                    bodyCol = '#1ca58f;';
                    bodyMod = 'U';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
                    break;

                case 4:
                    bodyTit = 'ESTABLECIMIENTO ELIMINAR';
                    bodyCol = '#eb4c4c;';
                    bodyMod = 'D';
                    bodyOnl = 'readonly';
                    bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
                    break;
            
                default:
                    break;
            }

            if (codAcc == 1) {
                xJSON1.forEach(element1 => {
                    if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'ESTABLECIMIENTOTIPO') {
                        selTipo = selTipo + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                    }

                    if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'ESTABLECIMIENTOFINALIDAD') {
                        selFinalidad = selFinalidad + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                    }
                });

                xJSON2.forEach(element2 => {
                    if (element2.tipo_estado_codigo == 1) {
                        selPersona = selPersona + '                               <option value="'+ element2.persona_codigo +'">'+ element2.persona_completo + ' | ' + element2.persona_documento + ' | ' + element2.persona_codigo_sitrap + ' | ' + element2.persona_codigo_sigor + '</option>';
                    }
                });

                xJSON3.forEach(element3 => {
                    if (element3.tipo_estado_codigo == 1) {
                        selDistrito = selDistrito + '                               <option value="'+ element3.distrito_codigo +'">'+ element3.pais_nombre + ' | ' + element3.departamento_nombre + ' | ' + element3.distrito_nombre + '</option>';
                    }
                });

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="<?php echo $codEstablecimiento; ?>" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                    '           </div>'+
                    '           <div class="row pt-3">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var01">ESTADO</label>'+
                    '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Estado">'+
                    '                               <option value="1">HABILITADO</option>'+
                    '                               <option value="2">DESHABILITADO</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var02">TIPO ESTABLECIMIENTO</label>'+
                    '                       <select id="var02" name="var02" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
                    '                           <optgroup label="Tipo Establecimiento">'+ selTipo +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03">TIPO FINALIDAD</label>'+
                    '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
                    '                           <optgroup label="Tipo Finalidad">'+ selFinalidad +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var04">ESTABLECIMIENTO</label>'+
                    '                       <input id="var04" name="var04" value="" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="ESTABLECIMIENTO" required '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-8">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var05">PROPIETARIO</label>'+
                    '                       <select id="var05" name="var05" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
                    '                           <optgroup label="Propietario">'+ selPersona + 
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var06">DISTRITO</label>'+
                    '                       <select id="var06" name="var06" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
                    '                           <optgroup label="Distrito">'+ selDistrito + 
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var07">TOTAL HECT&Aacute;REA</label>'+
                    '                       <input id="var07" name="var07" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="TOTAL HECT&Aacute;REA">'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var08">CANTIDAD POTRERO</label>'+
                    '                       <input id="var08" name="var08" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="CANTIDAD POTRERO">'+
                    '                   </div>'+
                    '               </div>'+
                    '                <div class="col-sm-12 col-md-4">'+
                    '                    <div class="form-group">'+
                    '                        <label for="var09">C&Oacute;DIGO SENACSA</label>'+
                    '                        <input id="var09" name="var09" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SENACSA">'+
                    '                    </div>'+
                    '                </div>'+
                    '                <div class="col-sm-12 col-md-4">'+
                    '                    <div class="form-group">'+
                    '                        <label for="var10">C&Oacute;DIGO SIGOR</label>'+
                    '                        <input id="var10" name="var10" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SIGOR">'+
                    '                    </div>'+
                    '                </div>'+
                    '                <div class="col-sm-12 col-md-4">'+
                    '                    <div class="form-group">'+
                    '                        <label for="var11">C&Oacute;DIGO SITRAP</label>'+
                    '                        <input id="var11" name="var11" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SITRAP">'+
                    '                    </div>'+
                    '                </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var12">OBSERVACIÓN</label>'+
                    '                       <textarea id="var12" name="var12" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
                    '                   </div>'+
                    '               </div>'+
                    '           </div>'+
                    '	    </div>'+
                    '	    <div class="modal-footer">'+ bodyBot +
                    '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                    '	    </div>'+
                    '   </form>'+
                    '</div>';
            } else {
                xJSON.forEach(element => {
                    if (element.establecimiento_codigo == codElem) {
                        if (element.tipo_estado_codigo == 1){
                            selEstado = 
                            '                               <option value="1" selected>HABILITADO</option>'+
                            '                               <option value="2">DESHABILITADO</option>';
                        } else {
                            selEstado = 
                            '                               <option value="1">HABILITADO</option>'+
                            '                               <option value="2" selected>DESHABILITADO</option>';
                        }

                        xJSON1.forEach(element1 => {
                            if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'ESTABLECIMIENTOTIPO') {
                                if (element1.tipo_codigo == element.tipo_establecimiento_codigo) {
                                    selTipo = selTipo + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                                } else {
                                    selTipo = selTipo + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                                }
                            }

                            if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'ESTABLECIMIENTOFINALIDAD') {
                                if (element1.tipo_codigo == element.tipo_finalidad_codigo) {
                                    selFinalidad = selFinalidad + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                                } else {
                                    selFinalidad = selFinalidad + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                                }
                            }
                        });

                        xJSON2.forEach(element2 => {
                            if (element2.tipo_estado_codigo == 1) {
                                if (element2.persona_codigo == element.persona_codigo) {
                                    selPersona = selPersona + '                               <option value="'+ element2.persona_codigo +'" selected>'+ element2.persona_completo + ' | ' + element2.persona_documento + ' | ' + element2.persona_codigo_sitrap + ' | ' + element2.persona_codigo_sigor + '</option>';
                                } else {
                                    selPersona = selPersona + '                               <option value="'+ element2.persona_codigo +'">'+ element2.persona_completo + ' | ' + element2.persona_documento + ' | ' + element2.persona_codigo_sitrap + ' | ' + element2.persona_codigo_sigor + '</option>';
                                }
                            }
                        });

                        xJSON3.forEach(element3 => {
                            if (element3.tipo_estado_codigo == 1) {
                                if (element3.distrito_codigo == element.distrito_codigo) {
                                    selDistrito = selDistrito + '                               <option value="'+ element3.distrito_codigo +'" selected>'+ element3.pais_nombre + ' | ' + element3.departamento_nombre + ' | ' + element3.distrito_nombre + '</option>';
                                } else {
                                    selDistrito = selDistrito + '                               <option value="'+ element3.distrito_codigo +'">'+ element3.pais_nombre + ' | ' + element3.departamento_nombre + ' | ' + element3.distrito_nombre + '</option>';
                                }
                            }
                        });

                        html = 
                            '<div class="modal-content">'+
                            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento.php">'+
                            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                            '	    </div>'+
                            '	    <div class="modal-body" >'+
                            '           <div class="form-group">'+
                            '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                            '           </div>'+
                            '           <div class="row pt-3">'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var01">ESTADO</label>'+
                            '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Estado">'+ selEstado +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var02">TIPO ESTABLECIMIENTO</label>'+
                            '                       <select id="var02" name="var02" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Tipo Establecimiento">'+ selTipo +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var03">TIPO FINALIDAD</label>'+
                            '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Tipo Finalidad">'+ selFinalidad +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var04">ESTABLECIMIENTO</label>'+
                            '                       <input id="var04" name="var04" value="'+ element.establecimiento_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="ESTABLECIMIENTO" required '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-8">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var05">PROPIETARIO</label>'+
                            '                       <select id="var05" name="var05" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Propietario">'+ selPersona + 
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var06">DISTRITO</label>'+
                            '                       <select id="var06" name="var06" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Distrito">'+ selDistrito + 
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var07">TOTAL HECT&Aacute;REA</label>'+
                            '                       <input id="var07" name="var07" value="'+ element.establecimiento_total_hectarea +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="TOTAL HECT&Aacute;REA" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var08">CANTIDAD POTRERO</label>'+
                            '                       <input id="var08" name="var08" value="'+ element.establecimiento_total_potrero +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="CANTIDAD POTRERO" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            '                <div class="col-sm-12 col-md-4">'+
                            '                    <div class="form-group">'+
                            '                        <label for="var09">C&Oacute;DIGO SENACSA</label>'+
                            '                        <input id="var09" name="var09" value="'+ element.establecimiento_codigo_senacsa +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SENACSA" '+ bodyOnl +'>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="col-sm-12 col-md-4">'+
                            '                    <div class="form-group">'+
                            '                        <label for="var10">C&Oacute;DIGO SIGOR</label>'+
                            '                        <input id="var10" name="var10" value="'+ element.establecimiento_codigo_sigor +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SIGOR" '+ bodyOnl +'>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="col-sm-12 col-md-4">'+
                            '                    <div class="form-group">'+
                            '                        <label for="var11">C&Oacute;DIGO SITRAP</label>'+
                            '                        <input id="var11" name="var11" value="'+ element.establecimiento_codigo_sitrap +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SITRAP" '+ bodyOnl +'>'+
                            '                    </div>'+
                            '                </div>'+
                            '               <div class="col-sm-12">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var12">OBSERVACIÓN</label>'+
                            '                       <textarea id="var12" name="var12" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_observacion +'</textarea>'+
                            '                   </div>'+
                            '               </div>'+
                            '           </div>'+
                            '	    </div>'+
                            '	    <div class="modal-footer">'+ bodyBot +
                            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                            '	    </div>'+
                            '   </form>'+
                            '</div>';
                    }
                });
            }

            $("#modalcontent").empty();
            $("#modalcontent").append(html);
        }

        function setSeccion(codElem, codAcc){
            var xJSON       = JSON.parse(localStorage.getItem("seccionJSON"))['data'];
            var html        = '';
            var bodyCol     = '';
            var bodyTit     = '';
            var bodyMod     = '';
            var bodyOnl     = '';
            var bodyBot     = '';
            var selEstado   = '';

            switch (codAcc) {
                case 1:
                    bodyTit = 'SECCIÓN NUEVO';
                    bodyCol = '#4798e8;';
                    bodyMod = 'C';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
                    break;

                case 2:
                    bodyTit = 'SECCIÓN VER';
                    bodyCol = '#563dea;';
                    bodyMod = 'R';
                    bodyOnl = 'readonly';
                    bodyBot = '';
                    break;

                case 3:
                    bodyTit = 'SECCIÓN EDITAR';
                    bodyCol = '#1ca58f;';
                    bodyMod = 'U';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
                    break;

                case 4:
                    bodyTit = 'SECCIÓN ELIMINAR';
                    bodyCol = '#eb4c4c;';
                    bodyMod = 'D';
                    bodyOnl = 'readonly';
                    bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
                    break;
            
                default:
                    break;
            }

            if (codAcc == 1) {
                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_seccion.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="<?php echo $codEstablecimiento; ?>" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                    '           </div>'+
                    '           <div class="row pt-3">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var01">ESTADO</label>'+
                    '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Estado">'+
                    '                               <option value="1">HABILITADO</option>'+
                    '                               <option value="2">DESHABILITADO</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-8">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var02">SECCIÓN</label>'+
                    '                       <input id="var02" name="var02" value="" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="SECCIÓN" required '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03">OBSERVACIÓN</label>'+
                    '                       <textarea id="var03" name="var03" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
                    '                   </div>'+
                    '               </div>'+
                    '           </div>'+
                    '	    </div>'+
                    '	    <div class="modal-footer">'+ bodyBot +
                    '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                    '	    </div>'+
                    '   </form>'+
                    '</div>';
            } else {
                xJSON.forEach(element => {
                    if (element.establecimiento_seccion_codigo == codElem) {
                        if (element.tipo_estado_codigo == 1){
                            selEstado = 
                            '                               <option value="1" selected>HABILITADO</option>'+
                            '                               <option value="2">DESHABILITADO</option>';
                        } else {
                            selEstado = 
                            '                               <option value="1">HABILITADO</option>'+
                            '                               <option value="2" selected>DESHABILITADO</option>';
                        }

                        html = 
                            '<div class="modal-content">'+
                            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_seccion.php">'+
                            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                            '	    </div>'+
                            '	    <div class="modal-body" >'+
                            '           <div class="form-group">'+
                            '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_seccion_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                            '           </div>'+
                            '           <div class="row pt-3">'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var01">ESTADO</label>'+
                            '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Estado">'+ selEstado +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-8">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var02">SECCIÓN</label>'+
                            '                       <input id="var02" name="var02" value="'+ element.establecimiento_seccion_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="SECCIÓN" required '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var03">OBSERVACIÓN</label>'+
                            '                       <textarea id="var03" name="var03" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_seccion_observacion +'</textarea>'+
                            '                   </div>'+
                            '               </div>'+
                            '           </div>'+
                            '	    </div>'+
                            '	    <div class="modal-footer">'+ bodyBot +
                            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                            '	    </div>'+
                            '   </form>'+
                            '</div>';
                    }
                });
            }

            $("#modalcontent").empty();
            $("#modalcontent").append(html);
        }

        function setPotrero(codElem, codAcc){
            var xJSON       = JSON.parse(localStorage.getItem("potreroJSON"))['data'];
            var xJSON1      = JSON.parse(localStorage.getItem("dominioJSON"))['data'];
            var xJSON2      = JSON.parse(localStorage.getItem("seccionJSON"))['data'];
            var html        = '';
            var bodyCol     = '';
            var bodyTit     = '';
            var bodyMod     = '';
            var bodyOnl     = '';
            var bodyBot     = '';
            var selEstado   = '';
            var selPastura1 = '';
            var selPastura2 = '';
            var selSeccion  = '';

            switch (codAcc) {
                case 1:
                    bodyTit = 'POTRERO NUEVO';
                    bodyCol = '#4798e8;';
                    bodyMod = 'C';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
                    break;

                case 2:
                    bodyTit = 'POTRERO VER';
                    bodyCol = '#563dea;';
                    bodyMod = 'R';
                    bodyOnl = 'readonly';
                    bodyBot = '';
                    break;

                case 3:
                    bodyTit = 'POTRERO EDITAR';
                    bodyCol = '#1ca58f;';
                    bodyMod = 'U';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
                    break;

                case 4:
                    bodyTit = 'POTRERO ELIMINAR';
                    bodyCol = '#eb4c4c;';
                    bodyMod = 'D';
                    bodyOnl = 'readonly';
                    bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
                    break;
            
                default:
                    break;
            }

            if (codAcc == 1) {
                xJSON1.forEach(element1 => {
                    if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'ESTABLECIMIENTOPASTURA') {
                        selPastura1 = selPastura1 + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                        selPastura2 = selPastura2 + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                    }
                });

                xJSON2.forEach(element1 => {
                    if (element1.tipo_estado_codigo == 1) {
                        selSeccion = selSeccion + '                               <option value="'+ element1.establecimiento_seccion_codigo +'">'+ element1.establecimiento_seccion_nombre +'</option>';
                    }
                });

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_potrero.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="<?php echo $codEstablecimiento; ?>" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                    '           </div>'+
                    '           <div class="row pt-3">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var01">ESTADO</label>'+
                    '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Estado">'+
                    '                               <option value="1">HABILITADO</option>'+
                    '                               <option value="2">DESHABILITADO</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var02">TIPO PASTURA 1</label>'+
                    '                       <select id="var02" name="var02" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
                    '                           <optgroup label="Tipo Pastura 1">'+ selPastura1 +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03">TIPO PASTURA 2</label>'+
                    '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
                    '                           <optgroup label="Tipo Pastura 2">'+ selPastura2 +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var04">SECCIÓN</label>'+
                    '                       <select id="var04" name="var04" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
                    '                           <optgroup label="Sección">'+ selSeccion + 
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-8">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var05">POTRERO</label>'+
                    '                       <input id="var05" name="var05" value="" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="POTRERO" required '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var06">DIMENSIÓN</label>'+
                    '                       <input id="var06" name="var06" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="DIMENSIÓN">'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var07">CAPACIDAD RECEPTIVDAD</label>'+
                    '                       <input id="var07" name="var07" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="CAPACIDAD RECEPTIVDAD">'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var08">OBSERVACIÓN</label>'+
                    '                       <textarea id="var08" name="var08" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
                    '                   </div>'+
                    '               </div>'+
                    '           </div>'+
                    '	    </div>'+
                    '	    <div class="modal-footer">'+ bodyBot +
                    '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                    '	    </div>'+
                    '   </form>'+
                    '</div>';
            } else {
                xJSON.forEach(element => {
                    if (element.establecimiento_potrero_codigo == codElem) {
                        if (element.tipo_estado_codigo == 1){
                            selEstado = 
                            '                               <option value="1" selected>HABILITADO</option>'+
                            '                               <option value="2">DESHABILITADO</option>';
                        } else {
                            selEstado = 
                            '                               <option value="1">HABILITADO</option>'+
                            '                               <option value="2" selected>DESHABILITADO</option>';
                        }

                        xJSON1.forEach(element1 => {
                            if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'ESTABLECIMIENTOPASTURA') {
                                if (element1.tipo_codigo == element.tipo_pastura1_codigo) {
                                    selPastura1 = selPastura1 + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                                } else {
                                    selPastura1 = selPastura1 + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                                }

                                if (element1.tipo_codigo == element.tipo_pastura2_codigo) {
                                    selPastura2 = selPastura2 + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                                } else {
                                    selPastura2 = selPastura2 + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                                }
                            }
                        });

                        xJSON2.forEach(element1 => {
                            if (element1.tipo_estado_codigo == 1) {
                                if (element1.establecimiento_seccion_codigo == element.establecimiento_seccion_codigo) {
                                    selSeccion = selSeccion + '                               <option value="'+ element1.establecimiento_seccion_codigo +'" selected>'+ element1.establecimiento_seccion_nombre +'</option>';
                                } else {
                                    selSeccion = selSeccion + '                               <option value="'+ element1.establecimiento_seccion_codigo +'">'+ element1.establecimiento_seccion_nombre +'</option>';
                                }
                            }
                        });

                        html = 
                            '<div class="modal-content">'+
                            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_potrero.php">'+
                            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                            '	    </div>'+
                            '	    <div class="modal-body" >'+
                            '           <div class="form-group">'+
                            '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_potrero_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                            '           </div>'+
                            '           <div class="row pt-3">'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var01">ESTADO</label>'+
                            '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Estado">'+ selEstado +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var02">TIPO PASTURA 1</label>'+
                            '                       <select id="var02" name="var02" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Tipo Pastura 1">'+ selPastura1 +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var03">TIPO PASTURA 2</label>'+
                            '                       <select id="var03" name="var03" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Tipo Pastura 2">'+ selPastura2 +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var04">SECCIÓN</label>'+
                            '                       <select id="var04" name="var04" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Sección">'+ selSeccion +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-8">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var05">POTRERO</label>'+
                            '                       <input id="var05" name="var05" value="'+ element.establecimiento_potrero_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="POTRERO" required '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var06">DIMENSIÓN</label>'+
                            '                       <input id="var06" name="var06" value="'+ element.establecimiento_potrero_hectarea +'" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="DIMENSIÓN"  '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var07">CAPACIDAD RECEPTIVDAD</label>'+
                            '                       <input id="var07" name="var07" value="'+ element.establecimiento_potrero_capacidad +'" class="form-control" type="number" step=".01" style="text-transform:uppercase; height:40px;" placeholder="CAPACIDAD RECEPTIVDAD"  '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var08">OBSERVACIÓN</label>'+
                            '                       <textarea id="var08" name="var08" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_potrero_observacion +'</textarea>'+
                            '                   </div>'+
                            '               </div>'+
                            '           </div>'+
                            '	    </div>'+
                            '	    <div class="modal-footer">'+ bodyBot +
                            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                            '	    </div>'+
                            '   </form>'+
                            '</div>';
                    }
                });
            }

            $("#modalcontent").empty();
            $("#modalcontent").append(html);
        }

        function setLote(codElem, codAcc){
            var xJSON       = JSON.parse(localStorage.getItem("loteJSON"))['data'];
            var html        = '';
            var bodyCol     = '';
            var bodyTit     = '';
            var bodyMod     = '';
            var bodyOnl     = '';
            var bodyBot     = '';
            var selEstado   = '';

            switch (codAcc) {
                case 1:
                    bodyTit = 'LOTE NUEVO';
                    bodyCol = '#4798e8;';
                    bodyMod = 'C';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
                    break;

                case 2:
                    bodyTit = 'LOTE VER';
                    bodyCol = '#563dea;';
                    bodyMod = 'R';
                    bodyOnl = 'readonly';
                    bodyBot = '';
                    break;

                case 3:
                    bodyTit = 'LOTE EDITAR';
                    bodyCol = '#1ca58f;';
                    bodyMod = 'U';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
                    break;

                case 4:
                    bodyTit = 'LOTE ELIMINAR';
                    bodyCol = '#eb4c4c;';
                    bodyMod = 'D';
                    bodyOnl = 'readonly';
                    bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
                    break;
            
                default:
                    break;
            }

            if (codAcc == 1) {
                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_lote.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="<?php echo $codEstablecimiento; ?>" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                    '           </div>'+
                    '           <div class="row pt-3">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var01">ESTADO</label>'+
                    '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Estado">'+
                    '                               <option value="1">HABILITADO</option>'+
                    '                               <option value="2">DESHABILITADO</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-8">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var02">LOTE</label>'+
                    '                       <input id="var02" name="var02" value="" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="LOTE" required '+ bodyOnl +'>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03">OBSERVACIÓN</label>'+
                    '                       <textarea id="var03" name="var03" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
                    '                   </div>'+
                    '               </div>'+
                    '           </div>'+
                    '	    </div>'+
                    '	    <div class="modal-footer">'+ bodyBot +
                    '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                    '	    </div>'+
                    '   </form>'+
                    '</div>';
            } else {
                xJSON.forEach(element => {
                    if (element.establecimiento_lote_codigo == codElem) {
                        if (element.tipo_estado_codigo == 1){
                            selEstado = 
                            '                               <option value="1" selected>HABILITADO</option>'+
                            '                               <option value="2">DESHABILITADO</option>';
                        } else {
                            selEstado = 
                            '                               <option value="1">HABILITADO</option>'+
                            '                               <option value="2" selected>DESHABILITADO</option>';
                        }

                        html = 
                            '<div class="modal-content">'+
                            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_lote.php">'+
                            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                            '	    </div>'+
                            '	    <div class="modal-body" >'+
                            '           <div class="form-group">'+
                            '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_lote_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                            '           </div>'+
                            '           <div class="row pt-3">'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var01">ESTADO</label>'+
                            '                       <select id="var01" name="var01" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Estado">'+ selEstado +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-8">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var02">LOTE</label>'+
                            '                       <input id="var02" name="var02" value="'+ element.establecimiento_lote_nombre +'" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="LOTE" required '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var03">OBSERVACIÓN</label>'+
                            '                       <textarea id="var03" name="var03" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_lote_observacion +'</textarea>'+
                            '                   </div>'+
                            '               </div>'+
                            '           </div>'+
                            '	    </div>'+
                            '	    <div class="modal-footer">'+ bodyBot +
                            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                            '	    </div>'+
                            '   </form>'+
                            '</div>';
                    }
                });
            }

            $("#modalcontent").empty();
            $("#modalcontent").append(html);
        }

        function setPersona(codElem, codAcc){
            var xJSON       = JSON.parse(localStorage.getItem("personaJSON"))['data'];
            var xJSON1      = JSON.parse(localStorage.getItem("dominioJSON"))['data'];
            var xJSON2      = JSON.parse(localStorage.getItem("personasJSON"))['data'];
            var html        = '';
            var bodyCol     = '';
            var bodyTit     = '';
            var bodyMod     = '';
            var bodyOnl     = '';
            var bodyBot     = '';
            var selEstado   = '';
            var selUsuario  = '';
            var selPersona  = '';

            switch (codAcc) {
                case 1:
                    bodyTit = 'PERSONA NUEVA';
                    bodyCol = '#4798e8;';
                    bodyMod = 'C';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
                    break;

                case 2:
                    bodyTit = 'PERSONA VER';
                    bodyCol = '#563dea;';
                    bodyMod = 'R';
                    bodyOnl = 'readonly';
                    bodyBot = '';
                    break;

                case 3:
                    bodyTit = 'PERSONA EDITAR';
                    bodyCol = '#1ca58f;';
                    bodyMod = 'U';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
                    break;

                case 4:
                    bodyTit = 'PERSONA ELIMINAR';
                    bodyCol = '#eb4c4c;';
                    bodyMod = 'D';
                    bodyOnl = 'readonly';
                    bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
                    break;
            
                default:
                    break;
            }

            if (codAcc == 1) {
                xJSON1.forEach(element1 => {
                    if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'USUARIOROL') {
                        selUsuario = selUsuario + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                    }
                });

                xJSON2.forEach(element2 => {
                    if (element2.tipo_estado_codigo == 1) {
                        selPersona = selPersona + '                               <option value="'+ element2.persona_codigo +'">'+ element2.persona_completo + ' | ' + element2.persona_documento + ' | ' + element2.persona_codigo_sitrap + ' | ' + element2.persona_codigo_sigor + '</option>';
                    }
                });

                html = 
                    '<div class="modal-content">'+
                    '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_persona.php">'+
                    '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                    '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                    '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                    '	    </div>'+
                    '	    <div class="modal-body" >'+
                    '           <div class="form-group">'+
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="<?php echo $codEstablecimiento; ?>" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCount" name="workCount" value="1" class="form-control" type="hidden" required readonly>'+
                    '           </div>'+
                    '           <div class="row pt-3">'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var01_1">ESTADO</label>'+
                    '                       <select id="var01_1" name="var01_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                    '                           <optgroup label="Estado">'+
                    '                               <option value="1">HABILITADO</option>'+
                    '                               <option value="2">DESHABILITADO</option>'+
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var02_1">TIPO USUARIO</label>'+
                    '                       <select id="var02_1" name="var02_1" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
                    '                           <optgroup label="Tipo Usuario">'+ selUsuario +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12 col-md-4">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var03_1">PERSONA</label>'+
                    '                       <select id="var03_1" name="var03_1" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
                    '                           <optgroup label="Persona">'+ selPersona +
                    '                           </optgroup>'+
                    '                       </select>'+
                    '                   </div>'+
                    '               </div>'+
                    '               <div class="col-sm-12">'+
                    '                   <div class="form-group">'+
                    '                       <label for="var04_1">OBSERVACIÓN</label>'+
                    '                       <textarea id="var04_1" name="var04_1" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'></textarea>'+
                    '                   </div>'+
                    '               </div>'+
                    '           </div>'+
                    '	    </div>'+
                    '	    <div class="modal-footer">'+ bodyBot +
                    '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                    '	    </div>'+
                    '   </form>'+
                    '</div>';
            } else {
                xJSON.forEach(element => {
                    if (element.establecimiento_persona_codigo == codElem) {
                        if (element.tipo_estado_codigo == 1){
                            selEstado = 
                            '                               <option value="1" selected>HABILITADO</option>'+
                            '                               <option value="2">DESHABILITADO</option>';
                        } else {
                            selEstado = 
                            '                               <option value="1">HABILITADO</option>'+
                            '                               <option value="2" selected>DESHABILITADO</option>';
                        }

                        xJSON1.forEach(element1 => {
                            if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'USUARIOROL') {
                                if (element1.tipo_codigo == element.tipo_usuario_codigo) {
                                    selUsuario = selUsuario + '                               <option value="'+ element1.tipo_codigo +'" selected>'+ element1.tipo_nombre +'</option>';
                                } else {
                                    selUsuario = selUsuario + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                                }
                            }
                        });

                        xJSON2.forEach(element2 => {
                            if (element2.tipo_estado_codigo == 1) {
                                if (element2.persona_codigo == element.persona_codigo) {
                                    selPersona = selPersona + '                               <option value="'+ element2.persona_codigo +'" selected>'+ element2.persona_completo + ' | ' + element2.persona_documento + ' | ' + element2.persona_codigo_sitrap + ' | ' + element2.persona_codigo_sigor + '</option>';
                                } else {
                                    selPersona = selPersona + '                               <option value="'+ element2.persona_codigo +'">'+ element2.persona_completo + ' | ' + element2.persona_documento + ' | ' + element2.persona_codigo_sitrap + ' | ' + element2.persona_codigo_sigor + '</option>';
                                }                                
                            }
                        });

                        html = 
                            '<div class="modal-content">'+
                            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_persona.php">'+
                            '	    <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                            '	    </div>'+
                            '	    <div class="modal-body" >'+
                            '           <div class="form-group">'+
                            '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_persona_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workCount" name="workCount" value="1" class="form-control" type="hidden" required readonly>'+
                            '           </div>'+
                            '           <div class="row pt-3">'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var101_1">ESTADO</label>'+
                            '                       <select id="var101_1" name="var101_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Estado">'+ selEstado +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var102_1">TIPO USUARIO</label>'+
                            '                       <select id="var102_1" name="var102_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Tipo Usuario">'+ selUsuario +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12 col-md-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var103_1">PERSONA</label>'+
                            '                       <select id="var103_1" name="var103_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Persona">'+ selPersona +
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var104_1">OBSERVACIÓN</label>'+
                            '                       <textarea id="var104_1" name="var104_1" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>' + element.establecimiento_persona_observacion +'</textarea>'+
                            '                   </div>'+
                            '               </div>'+
                            '           </div>'+
                            '	    </div>'+
                            '	    <div class="modal-footer">'+ bodyBot +
                            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                            '	    </div>'+
                            '   </form>'+
                            '</div>';
                    }
                });
            }

            $("#modalcontent").empty();
            $("#modalcontent").append(html);
        }

        function setPoblacion(codElem, codAcc){
            var xDATA       = '<?php echo json_encode($poblacionJSON['data']); ?>';
            var xJSON       = JSON.parse(xDATA);
            var html        = '';
            var bodyCol     = '';
            var bodyTit     = '';
            var bodyMod     = '';
            var bodyOnl     = '';
            var bodyBot     = '';
            var selEstado   = '';

            switch (codAcc) {
                case 1:
                    bodyTit = 'POBLACIÓN NUEVO';
                    bodyCol = '#4798e8;';
                    bodyMod = 'C';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-info">Agregar</button>';
                    break;

                case 2:
                    bodyTit = 'POBLACIÓN VER';
                    bodyCol = '#563dea;';
                    bodyMod = 'R';
                    bodyOnl = 'readonly';
                    bodyBot = '';
                    break;

                case 3:
                    bodyTit = 'POBLACIÓN EDITAR';
                    bodyCol = '#1ca58f;';
                    bodyMod = 'U';
                    bodyOnl = '';
                    bodyBot = '           <button type="submit" class="btn btn-success">Actualizar</button>';
                    break;

                case 4:
                    bodyTit = 'POBLACIÓN ELIMINAR';
                    bodyCol = '#eb4c4c;';
                    bodyMod = 'D';
                    bodyOnl = 'readonly';
                    bodyBot = '           <button type="submit" class="btn btn-danger">Eliminar</button>';
                    break;
            
                default:
                    break;
            }

            if (codAcc != 1) {
                xJSON.forEach(element => {
                    if (element.establecimiento_poblacion_codigo == codElem) {
                        html =
                            '<div class="modal-content">'+
                            '   <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_poblacion.php">'+
                            '       <div class="modal-header" style="color:#fff; background:'+ bodyCol +'">'+
                            '		    <h4 class="modal-title" id="vcenter"> '+ bodyTit +' </h4>'+
                            '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                            '	    </div>'+
                            '       <div class="modal-body" >'+
                            '           <div class="form-group">'+
                            '               <input id="workEstablecimiento" name="workEstablecimiento" value="'+ element.establecimiento_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workCodigo" name="workCodigo" value="'+ element.establecimiento_poblacion_codigo +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workPage" name="workPage" value="establecimiento_detalle" class="form-control" type="hidden" required readonly>'+
                            '               <input id="workCount" name="workCount" value="1" class="form-control" type="hidden" required readonly>'+
                            '           </div>'+
                            '           <div class="row pt-3">'+
                            '               <div class="col-sm-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var101_1">PROPIETARIO</label>'+
                            '                       <select id="var101_1" name="var101_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Propietario">'+
                            '                               <option value="' + element.persona_codigo + '">' + element.persona_completo + '</option>'+
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var102_1">ORIGEN</label>'+
                            '                       <select id="var102_1" name="var102_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Origen">'+
                            '                               <option value="' + element.tipo_origen_codigo + '">' + element.tipo_origen_nombre + '</option>'+
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var103_1">RAZA</label>'+
                            '                       <select id="var103_1" name="var103_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Raza">'+
                            '                               <option value="' + element.tipo_raza_codigo + '">' + element.tipo_raza_nombre + '</option>'+
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var104_1">CATEGOR&Iacute;A - SUBCATEGOR&Iacute;A</label>'+
                            '                       <select id="var104_1" name="var104_1" class="select2 form-control custom-select" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                           <optgroup label="Categoría - SubCategoría">'+
                            '                               <option value="' + element.tipo_categoria_codigo + '_' + element.tipo_subcategoria_codigo + '">' + element.tipo_categoria_nombre + ' - ' + element.tipo_subcategoria_nombre + '</option>'+
                            '                           </optgroup>'+
                            '                       </select>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var105_1">PESO PROMEDIO</label>'+
                            '                       <input type="number" class="form-control" id="var105_1" name="var105_1" value="' + element.establecimiento_poblacion_peso_promedio + '" step=".01" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-4">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var106_1">CANTIDAD</label>'+
                            '                       <input type="number" class="form-control" id="var106_1" name="var106_1" value="' + element.establecimiento_poblacion_cantidad + '" min="1" style="width:100%; height:40px;" '+ bodyOnl +'>'+
                            '                   </div>'+
                            '               </div>'+
                            '               <div class="col-sm-12">'+
                            '                   <div class="form-group">'+
                            '                       <label for="var107_1">OBSERVACIÓN</label>'+
                            '                       <textarea id="var107_1" name="var107_1" value="" class="form-control" rows="5" style="text-transform:uppercase;" '+ bodyOnl +'>'+ element.establecimiento_poblacion_observacion +'</textarea>'+
                            '                   </div>'+
                            '               </div>'+
                            '           </div>'+
                            '       </div>'+
                            '	    <div class="modal-footer">'+ bodyBot +
                            '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                            '	    </div>'+
                            '   </form>'+
                            '</div>';
                    }
                });
            }

            $("#modalcontent2").empty();
            $("#modalcontent2").append(html);
        }

        function getPoblacionDetalle(codElem){
            var xDATA   = '<?php echo json_encode($poblacionJSON['data']); ?>';
            var xJSON   = JSON.parse(xDATA);
            var html    = '';
            var htmlBody= '';

            xJSON.forEach(element => {
                if (element.tipo_categoria_codigo == codElem) {
                    var tableTR = 
                    '                       <tr>'+
                    '                           <td class="text-center"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modaldiv2" onclick="setPoblacion('+element.establecimiento_poblacion_codigo+', 2);" title="Ver"><i class="ti-eye"></i></button>&nbsp;<button type="button" class="btn btn-success" data-toggle="modal" data-target="#modaldiv2" onclick="setPoblacion('+element.establecimiento_poblacion_codigo+', 3);" title="Editar"><i class="ti-pencil"></i></button>&nbsp;<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modaldiv2" onclick="setPoblacion('+element.establecimiento_poblacion_codigo+', 4);" title="Eliminar"><i class="ti-trash"></i></button></th>'+
                    '                           <td class="text-center">' + element.persona_completo + '</th>'+
                    '                           <td class="text-center">' + element.tipo_origen_nombre + '</th>'+
                    '                           <td class="text-center">' + element.tipo_raza_nombre + '</th>'+
                    '                           <td class="text-center">' + element.tipo_categoria_nombre + '</th>'+
                    '                           <td class="text-center">' + element.tipo_subcategoria_nombre + '</th>'+
                    '                           <td class="text-center">' + element.establecimiento_poblacion_peso_promedio + '</th>'+
                    '                           <td class="text-center">' + element.establecimiento_poblacion_cantidad + '</th>'+
                    '                       </tr>';

                    htmlBody    = htmlBody + tableTR;
                }
            });

            html =
                '<div class="modal-content">'+
                '   <div class="modal-header" style="color:#fff; background-color: #563dea;">'+
                '		<h4 class="modal-title" id="vcenter"> POBLACIÓN BOVINA </h4>'+
                '		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '	</div>'+
                '   <div class="modal-body" >'+
                '       <div class="row pt-3">'+
                '           <div class="table-responsive">'+
                '               <table id="tableDetalle" class="table v-middle" style="width: 100%;">'+
                '                   <thead>'+
                '                       <tr class="bg-light">'+
                '                           <th class="border-top-0 text-center">ACCIÓN</th>'+
                '                           <th class="border-top-0 text-center">PROPIETARIO</th>'+
                '                           <th class="border-top-0 text-center">ORIGEN</th>'+
                '                           <th class="border-top-0 text-center">RAZA</th>'+
                '                           <th class="border-top-0 text-center">CATEGORÍA</th>'+
                '                           <th class="border-top-0 text-center">SUBCATEGORÍA</th>'+
                '                           <th class="border-top-0 text-center">PESO PROMEDIO</th>'+
                '                           <th class="border-top-0 text-center">CANTIDAD</th>'+
                '                       </tr>'+
                '                   </thead>'+
                '                   <tbody>'+ htmlBody +
                '                   </tbody>'+
                '               </table>'+
                '           </div>'+
                '	    </div>'+
                '	</div>'+
                '</div>';

            $("#modalcontent").empty();
            $("#modalcontent").append(html);
        }

        getJSON('dominioJSON', 'default/000');
        getJSON('distritoJSON', 'default/300');
        getJSON('personasJSON', 'default/400');

        getJSON('seccionJSON', 'establecimiento/500/seccion/<?php echo $codEstablecimiento; ?>');
        getJSON('potreroJSON', 'establecimiento/500/potrero/<?php echo $codEstablecimiento; ?>');
        getJSON('loteJSON', 'establecimiento/500/lote/<?php echo $codEstablecimiento; ?>');
        getJSON('personaJSON', 'establecimiento/500/persona/<?php echo $codEstablecimiento; ?>');

        $('#tableLoadEstablecimientoC').DataTable({
            scrollY			: "300px",
            scrollCollapse	: true,
            processing		: true,
            destroy			: true,
            searching		: false,
            paging			: false,
            lengthChange	: true,
            info			: false,
            language		: {
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
            data            : <?php echo json_encode($establecimientoJSON['data']); ?>,
            columnDefs		: [
                { targets			: [0],	visible : true,	searchable : true,	orderData : [0, 0] },
                { targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] },
                { targets			: [2],	visible : true,	searchable : true,	orderData : [2, 0] },
                { targets			: [3],	visible : true,	searchable : true,	orderData : [3, 0] },
                { targets			: [4],	visible : true,	searchable : true,	orderData : [4, 0] },
                { targets			: [5],	visible : true,	searchable : true,	orderData : [5, 0] },
                { targets			: [6],	visible : true,	searchable : true,	orderData : [6, 0] },
                { targets			: [7],	visible : true,	searchable : true,	orderData : [7, 0] }
            ],
            columns			: [
                { render			: function (data, type, full, meta) {return '<button type="button" class="btn btn-primary" onclick="setEstablecimiento('+ full.establecimiento_codigo +', 2);" data-toggle="modal" data-target="#modaldiv" title="Ver"><i class="ti-eye"></i></button>&nbsp;<button type="button" class="btn btn-success" onclick="setEstablecimiento('+ full.establecimiento_codigo +', 3);" data-toggle="modal" data-target="#modaldiv" title="Editar"><i class="ti-pencil"></i></button>&nbsp;<button type="button" class="btn btn-danger" onclick="setEstablecimiento('+ full.establecimiento_codigo +', 4);" data-toggle="modal" data-target="#modaldiv" title="Eliminar"><i class="ti-trash"></i></button>';}},
                { data				: 'tipo_establecimiento_nombre', name : 'tipo_establecimiento_nombre'},
                { data				: 'tipo_finalidad_nombre', name : 'tipo_finalidad_nombre'},
                { data				: 'distrito_nombre', name : 'distrito_nombre'},
                { data				: 'establecimiento_codigo_senacsa', name : 'establecimiento_codigo_senacsa'},
                { data				: 'establecimiento_codigo_sigor', name : 'establecimiento_codigo_sigor'},
                { data				: 'establecimiento_codigo_sitrap', name : 'establecimiento_codigo_sitrap'},
                { data				: 'establecimiento_total_hectarea', name : 'establecimiento_total_hectarea'},
            ]
        });

        $('#tableLoadSeccionC').DataTable({
            scrollY			: "300px",
            scrollCollapse	: true,
            processing		: true,
            destroy			: true,
            searching		: false,
            paging			: false,
            lengthChange	: true,
            info			: false,
            language		: {
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
            data            : JSON.parse(localStorage.getItem("seccionJSON"))['data'],
            columnDefs		: [
                { targets			: [0],	visible : true,	searchable : true,	orderData : [0, 0] },
                { targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] }
            ],
            columns			: [
                { render			: function (data, type, full, meta) {return '<button type="button" class="btn btn-primary" onclick="setSeccion('+ full.establecimiento_seccion_codigo +', 2);" data-toggle="modal" data-target="#modaldiv" title="Ver"><i class="ti-eye"></i></button>&nbsp;<button type="button" class="btn btn-success" onclick="setSeccion('+ full.establecimiento_seccion_codigo +', 3);" data-toggle="modal" data-target="#modaldiv" title="Editar"><i class="ti-pencil"></i></button>&nbsp;<button type="button" class="btn btn-danger" onclick="setSeccion('+ full.establecimiento_seccion_codigo +', 4);" data-toggle="modal" data-target="#modaldiv" title="Eliminar"><i class="ti-trash"></i></button>';}},
                { data				: 'establecimiento_seccion_nombre', name : 'establecimiento_seccion_nombre'},
            ]
        });

        $('#tableLoadPotreroC').DataTable({
            scrollY			: "300px",
            scrollCollapse	: true,
            processing		: true,
            destroy			: true,
            searching		: false,
            paging			: false,
            lengthChange	: true,
            info			: false,
            language		: {
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
            data            : JSON.parse(localStorage.getItem("potreroJSON"))['data'],
            columnDefs		: [
                { targets			: [0],	visible : true,	searchable : true,	orderData : [0, 0] },
                { targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] },
                { targets			: [2],	visible : true,	searchable : true,	orderData : [2, 0] },
                { targets			: [3],	visible : true,	searchable : true,	orderData : [3, 0] },
                { targets			: [4],	visible : true,	searchable : true,	orderData : [4, 0] },
                { targets			: [5],	visible : false,searchable : false,	orderData : [5, 0] },
                { targets			: [6],	visible : false,searchable : false,	orderData : [6, 0] }
            ],
            columns			: [
                { render			: function (data, type, full, meta) {return '<button type="button" class="btn btn-primary" onclick="setPotrero('+ full.establecimiento_potrero_codigo +', 2);" data-toggle="modal" data-target="#modaldiv" title="Ver"><i class="ti-eye"></i></button>&nbsp;<button type="button" class="btn btn-success" onclick="setPotrero('+ full.establecimiento_potrero_codigo +', 3);" data-toggle="modal" data-target="#modaldiv" title="Editar"><i class="ti-pencil"></i></button>&nbsp;<button type="button" class="btn btn-danger" onclick="setPotrero('+ full.establecimiento_potrero_codigo +', 4);" data-toggle="modal" data-target="#modaldiv" title="Eliminar"><i class="ti-trash"></i></button>';}},
                { data				: 'establecimiento_seccion_nombre', name : 'establecimiento_seccion_nombre'},
                { data				: 'establecimiento_potrero_nombre', name : 'establecimiento_potrero_nombre'},
                { data				: 'tipo_pastura1_nombre', name : 'tipo_pastura1_nombre'},
                { data				: 'tipo_pastura2_nombre', name : 'tipo_pastura2_nombre'},
                { data				: 'establecimiento_potrero_hectarea', name : 'establecimiento_potrero_hectarea'},
                { data				: 'establecimiento_potrero_capacidad', name : 'establecimiento_potrero_capacidad'},
            ]
        });

        $('#tableLoadLoteC').DataTable({
            scrollY			: "300px",
            scrollCollapse	: true,
            processing		: true,
            destroy			: true,
            searching		: false,
            paging			: false,
            lengthChange	: true,
            info			: false,
            language		: {
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
            data            : JSON.parse(localStorage.getItem("loteJSON"))['data'],
            columnDefs		: [
                { targets			: [0],	visible : true,	searchable : true,	orderData : [0, 0] },
                { targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] }
            ],
            columns			: [
                { render			: function (data, type, full, meta) {return '<button type="button" class="btn btn-primary" onclick="setLote('+ full.establecimiento_lote_codigo +', 2);" data-toggle="modal" data-target="#modaldiv" title="Ver"><i class="ti-eye"></i></button>&nbsp;<button type="button" class="btn btn-success" onclick="setLote('+ full.establecimiento_lote_codigo +', 3);" data-toggle="modal" data-target="#modaldiv" title="Editar"><i class="ti-pencil"></i></button>&nbsp;<button type="button" class="btn btn-danger" onclick="setLote('+ full.establecimiento_lote_codigo +', 4);" data-toggle="modal" data-target="#modaldiv" title="Eliminar"><i class="ti-trash"></i></button>';}},
                { data				: 'establecimiento_lote_nombre', name : 'establecimiento_lote_nombre'},
            ]
        });

        $('#tableLoadPersonaC').DataTable({
            scrollY			: "300px",
            scrollCollapse	: true,
            processing		: true,
            destroy			: true,
            searching		: false,
            paging			: false,
            lengthChange	: true,
            info			: false,
            language		: {
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
            data            : JSON.parse(localStorage.getItem("personaJSON"))['data'],
            columnDefs		: [
                { targets			: [0],	visible : true,	searchable : true,	orderData : [0, 0] },
                { targets			: [1],	visible : true,	searchable : true,	orderData : [1, 0] },
                { targets			: [2],	visible : true,	searchable : true,	orderData : [2, 0] },
                { targets			: [3],	visible : true, searchable : true,	orderData : [3, 0] },
                { targets			: [4],	visible : true, searchable : true,	orderData : [4, 0] },
                { targets			: [5],	visible : false,searchable : false,	orderData : [5, 0] },
                { targets			: [6],	visible : false,searchable : false,	orderData : [6, 0] }
            ],
            columns			: [
                { render			: function (data, type, full, meta) {return '<button type="button" class="btn btn-primary" onclick="setPersona('+ full.establecimiento_persona_codigo +', 2);" data-toggle="modal" data-target="#modaldiv" title="Ver"><i class="ti-eye"></i></button>&nbsp;<button type="button" class="btn btn-success" onclick="setPersona('+ full.establecimiento_persona_codigo +', 3);" data-toggle="modal" data-target="#modaldiv" title="Editar"><i class="ti-pencil"></i></button>&nbsp;<button type="button" class="btn btn-danger" onclick="setPersona('+ full.establecimiento_persona_codigo +', 4);" data-toggle="modal" data-target="#modaldiv" title="Eliminar"><i class="ti-trash"></i></button>';}},
                { data				: 'tipo_usuario_nombre', name : 'tipo_usuario_nombre'},
                { data				: 'persona_completo', name : 'persona_completo'},
                { data				: 'persona_codigo_sitrap', name : 'persona_codigo_sitrap'},
                { data				: 'persona_codigo_sigor', name : 'persona_codigo_sigor'},
                { data				: 'persona_telefono', name : 'persona_telefono'},
                { data				: 'persona_email', name : 'persona_email'},
            ]
        });
    </script>
</body>
</html>