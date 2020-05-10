<?php
    require '../class/function/curl_api.php';
    require '../class/function/function.php';
    require '../class/session/session_system.php';

    if(isset($_GET['establecimiento'])){
        $codEstablecimiento = $_GET['establecimiento'];
    } else {
        header('Location: ../../public/establecimiento.php');
    }
    
    $poblacionJSON  = get_curl('000/establecimientopoblacion/'.$codEstablecimiento);
    $totDes         = 0;
    $totVaq         = 0;
    $totVac         = 0;
    $totNov         = 0;
    $totSen         = 0;
    $totBue         = 0;
    $totTor         = 0;
    $totAdu         = 0;
    $totTer         = 0;
    $totTot         = 0;

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
                                                <h3 id="titleEstablecimiento" class="m-b-0"></h3>
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
                                    <table id="tableEstablecimiento" class="table v-middle" style="width: 100%;">
                                        <thead id="codestablecimiento" class="<?php echo $codEstablecimiento; ?>">
                                            <tr class="bg-table-title" style="text-align:center;">
                                                <th class="border-top-0" style="width:80px;">ORDEN</th>
                                                <th class="border-top-0" style="width:80px;">ESTADO</th>
                                                <th class="border-top-0">TIPO</th>
                                                <th class="border-top-0">FINALIDAD</th>
                                                <th class="border-top-0">DISTRITO</th>
                                                <th class="border-top-0">C&Oacute;DIGO SENACSA</th>
                                                <th class="border-top-0">C&Oacute;DIGO SIGOR</th>
                                                <th class="border-top-0">C&Oacute;DIGO SITRAP</th>
                                                <th class="border-top-0">DIMENSI&Oacute;N</th>
                                                <th class="border-top-0" style="width:160px;">ACCI&Oacute;N</th>
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
                                                <a class="btn btn-info" href="../public/establecimiento_poblacion.php?establecimiento=<?php echo $codEstablecimiento; ?>" role="button" title="Agregar"><i class="ti-plus"></i></a>
                                            </h4>
                                        </div>

                                        <div class="table-responsive">
                                            <table id="tableTotal" class="table v-middle" style="width: 100%;">
                                                <thead>
                                                    <tr class="bg-table-title" style="text-align:center;">
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
                                        <a class="btn btn-info" href="../public/establecimiento_persona.php?establecimiento=<?php echo $codEstablecimiento; ?>" role="button" title="Agregar"><i class="ti-plus"></i></a>
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
                <div id="modal-dialog" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="vcenter" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" id="modal-content">
                    </div>
                </div>

                <div id="modal-dialog2" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="vcenter" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" id="modal-content2">
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
?>

    <script src="../js/api.js"></script>
    <script src="../js/establecimiento.js"></script>
    <script src="../js/establecimiento_detalle.js"></script>
</body>
</html>