<?php
    require '../class/function/curl_api.php';
    require '../class/function/function.php';
    require '../class/session/session_system.php';

    if(isset($_GET['especie'])){
        $valueDominio   = $_GET['especie'];
        foreach ($parm_01['data'] as $dominioKEY => $dominioVALUE) {
            if ($dominioVALUE['tipo_codigo'] == $valueDominio) {
                $titleDominio   = $dominioVALUE['tipo_nombre'];
            }
        }
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
                                                <li class="breadcrumb-item active" aria-current="page"><?php echo $titleDominio; ?></li>
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
                                                <h3 class="m-b-0">BIENVENIDO: <?php echo strtoupper($usu_01); ?> </h3>
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
                                    <h4 class="col-10 card-title"> FILTRO DE B&Uacute;SQUEDA</h4>
								</div>

                                <form action="#">
                                    <div class="form-body">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var01">Establecimiento</label>
                                                    <select id="var01" name="var01" onchange="selectAnimalCategoria(<?php echo $valueDominio; ?>, 'var02', 'var03', 1); selectEstablecimientoPersona('var06', 'var01', 2, 1);" class="select2 form-control custom-select" style="width:100%; height:40px;" required>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var02">Categoria</label>
                                                    <select id="var02" name="var02" onchange="selectAnimalCategoria(<?php echo $valueDominio; ?>, 'var02', 'var03', 1);" class="select2 form-control custom-select" style="width:100%; height:40px;" required>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var03">SubCategoria</label>
                                                    <select id="var03" name="var03" onchange="" class="select2 form-control custom-select" style="width:100%; height:40px;" required>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var04">Origen</label>
                                                    <select id="var04" name="var04" onchange="" class="select2 form-control custom-select" style="width:100%; height:40px;" required>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var05">Raza</label>
                                                    <select id="var05" name="var05" onchange="" class="select2 form-control custom-select" style="width:100%; height:40px;" required>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var06">Propietario</label>
                                                    <select id="var06" name="var06" onchange="" class="select2 form-control custom-select" style="width:100%; height:40px;" required>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var07">Pelaje</label>
                                                    <select id="var07" name="var07" onchange="" class="select2 form-control custom-select" style="width:100%; height:40px;" required>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var08">Grado Sangre</label>
                                                    <select id="var08" name="var08" onchange="" class="select2 form-control custom-select" style="width:100%; height:40px;" required>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var09">Hacienda</label>
                                                    <select id="var09" name="var09" onchange="" class="select2 form-control custom-select" style="width:100%; height:40px;" required>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <h4 class="col-10 card-title"><?php echo $titleDominio; ?></h4>
                                    <h4 class="col-2 card-title" style="text-align: right;">
                                        <a href="javascript:void(0)" onclick="setAnimal(<?php echo $valueDominio; ?>, 'var01', 0, 1);" title="Nuevo" class="btn btn-info" style="background-color:#005ea6; border-color:#005ea6;" role="button" data-toggle="modal" data-target="#modal-dialog"><i class="ti-plus"></i></a>
                                	</h4>
								</div>
                                
                                <div class="table-responsive">
                                    <table id="tableLoad" class="table v-middle" style="width: 100%;">
                                        <thead id="tableCodigo" class="<?php echo $valueDominio; ?>">
                                            <tr class="bg-table-title" style="text-align:center;">
                                                <th class="border-top-0" style="width:80px;">C&Oacute;DIGO</th>
                                                <th class="border-top-0" style="width:80px;">ESTADO</th>
                                                <th class="border-top-0">C&Oacute;D. ELECTRONICO</th>
                                                <th class="border-top-0">C&Oacute;D. RP</th>
                                                <th class="border-top-0">C&Oacute;D. HBP</th>
                                                <th class="border-top-0">C&Oacute;D. SITRAP</th>
                                                <th class="border-top-0">C&Oacute;D. INTERNO</th>
                                                <th class="border-top-0">C&Oacute;D. NOMBRE</th>
                                                <th class="border-top-0">CATEGORIA</th>
                                                <th class="border-top-0">SUBCATEGORIA</th>
                                                <th class="border-top-0">ORIGEN</th>
                                                <th class="border-top-0">RAZA</th>
                                                <th class="border-top-0">PROPIETARIO</th>
                                                <th class="border-top-0">PELAJE</th>
                                                <th class="border-top-0">GRADO SANGRE</th>
                                                <th class="border-top-0">HACIENDA</th>
                                                <th class="border-top-0" style="width:160px;">ACCI&Oacute;N</th>
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
    <script src="../js/select.js"></script>
    <script src="../js/animal.js"></script>
    <script>
        selectEstablecimiento('var01'),
        selectDominio('var02', 'ANIMALCATEGORIA', 1);
        selectAnimalCategoria(<?php echo $valueDominio; ?>, 'var02', 'var03', 1);
        selectDominio('var04', 'ANIMALORIGEN', 1);
        selectDominio('var05', 'ANIMALRAZA', 1);
        selectEstablecimientoPersona('var06', 'var01', 2, 1);
        selectDominio('var07', 'ANIMALPELAJE', 1);
        selectDominio('var08', 'ANIMALGRADOSANGRE', 1);
        selectDominio('var09', 'ANIMALHACIENDA', 1);
    </script>
</body>
</html>