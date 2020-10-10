<?php
    require '../class/function/curl_api.php';
    require '../class/function/function.php';
    require '../class/session/session_system.php';

    if(isset($_GET['codigo'])){
        $valuePARM = $_GET['codigo'];

        foreach ($parm_01['data'] as $dominioKEY => $dominioVALUE) {
            if ($dominioVALUE['tipo_dominio'] == 'ORDENTRABAJOTIPO' && $dominioVALUE['tipo_estado_parametro'] == 1 && $dominioVALUE['tipo_parametro'] == $valuePARM) {
                $valueTITLE = $dominioVALUE['tipo_nombre'];
                $valueCODIGO= $dominioVALUE['tipo_codigo'];
            }
        }
    }

    if(isset($_GET['ot'])){
        $valueOT = $_GET['ot'];
    } else {
        $valueOT = 0;
    }

    $otJSON = get_curl('000/ordentrabajo/'.$valueOT);
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
                                                    <a href="../public/ordentrabajo.php?codigo=<?php echo $valuePARM; ?>"><?php echo $valueTITLE; ?></a>
                                                </li>

                                                <li class="breadcrumb-item active" aria-current="page">DETALLE O.T.</li>
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
                                                <h3 class="m-b-0"><?php echo $otJSON['data'][0]['establecimiento_nombre'].' - O.T. NRO.: '.$otJSON['data'][0]['orden_trabajo_numero']; ?> </h3>
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
                                    <h4 class="col-10 card-title"> DETALLE O.T.</h4>
								</div>

                                <form action="#">
                                    <div class="form-body">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-2">
                                                <div class="form-group">
                                                    <label>Estado</label>
                                                    <input value="<?php echo $otJSON['data'][0]['tipo_estado_nombre']; ?>" class="form-control" type="text" style="text-transform:uppercase; height:40px;" required readonly>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-2">
                                                <div class="form-group">
                                                    <label>Tipo</label>
                                                    <input value="<?php echo $otJSON['data'][0]['tipo_orden_trabajo_nombre']; ?>" class="form-control" type="text" style="text-transform:uppercase; height:40px;" required readonly>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-2">
                                                <div class="form-group">
                                                    <label>Inicio Actividad</label>
                                                    <input value="<?php echo $otJSON['data'][0]['orden_trabajo_fecha_inicio']; ?>" class="form-control" type="text" style="text-transform:uppercase; height:40px;" required readonly>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-2">
                                                <div class="form-group">
                                                    <label>Fin Actividad</label>
                                                    <input value="<?php echo $otJSON['data'][0]['orden_trabajo_fecha_fin']; ?>" class="form-control" type="text" style="text-transform:uppercase; height:40px;" required readonly>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-2">
                                                <div class="form-group">
                                                    <label>Administrador</label>
                                                    <input value="<?php echo $otJSON['data'][0]['persona_administrador_completo']; ?>" class="form-control" type="text" style="text-transform:uppercase; height:40px;" required readonly>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-2">
                                                <div class="form-group">
                                                    <label>Veterinario</label>
                                                    <input value="<?php echo $otJSON['data'][0]['persona_veterinario_completo']; ?>" class="form-control" type="text" style="text-transform:uppercase; height:40px;" required readonly>
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
                                    <h4 class="col-10 card-title"> FILTRO DE B&Uacute;SQUEDA</h4>
								</div>

                                <form action="#">
                                    <div class="form-body">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-3" style="display:none;">
                                                <div class="form-group">
                                                    <label for="var01">Establecimiento</label>
                                                    <select id="var01" name="var01" onchange="selectEstablecimientoPersona('var06', 'var01', 2, 1);" class="select2 form-control custom-select" style="width:100%; height:40px;" required>
                                                        <optgroup label="Establecimiento">
                                                            <option value="<?php echo $otJSON['data'][0]['establecimiento_codigo']; ?>"><?php echo $otJSON['data'][0]['establecimiento_nombre']; ?></option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-3">
                                                <div class="form-group">
                                                    <label for="var02">Categoria</label>
                                                    <select id="var02" name="var02" onchange="selectAnimalCategoria(26, 'var02', 'var03', 1);" class="select2 form-control custom-select" style="width:100%; height:40px;" required>
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
                                    <h4 class="col-10 card-title">ANIMALES</h4>
                                    <h4 class="col-2 card-title" style="text-align: right;"></h4>
								</div>

                                <div class="table-responsive">
                                    <table id="tableLoad" class="table v-middle" style="width: 100%;">
                                        <thead id="tableCodigo" class="<?php echo $valuePARM; ?>">
                                            <tr class="bg-table-title" style="text-align:center;">
                                                <th class="border-top-0" style="width:80px;">C&Oacute;DIGO</th>
                                                <th class="border-top-0" style="width:80px;">ESTADO</th>
                                                <th class="border-top-0">ESTABLECIMIENTO</th>
                                                <th class="border-top-0">TIPO</th>
                                                <th class="border-top-0">O.T. NRO.</th>
                                                <th class="border-top-0">FECHA INICIO</th>
                                                <th class="border-top-0">FECHA FIN</th>
                                                <th class="border-top-0">ADMINISTRADOR</th>
                                                <th class="border-top-0">VETERINARIO</th>
                                                <th class="border-top-0">OBSERVACI&Oacute;N</th>
                                                <th class="border-top-0" style="width:210px;">ACCI&Oacute;N</th>
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
    <script>
        selectDominio('var02', 'ANIMALCATEGORIA', 1);
        selectAnimalCategoria(26, 'var02', 'var03', 1);
        selectDominio('var04', 'ANIMALORIGEN', 1);
        selectDominio('var05', 'ANIMALRAZA', 1);
        selectEstablecimientoPersona('var06', 'var01', 2, 1);
        selectDominio('var07', 'ANIMALPELAJE', 1);
        selectDominio('var08', 'ANIMALGRADOSANGRE', 1);
        selectDominio('var09', 'ANIMALHACIENDA', 1);
    </script>
</body>
</html>