<?php
    require '../class/function/curl_api.php';
    require '../class/function/function.php';
    require '../class/session/session_system.php';

    if(isset($_GET['establecimiento'])){
        $codEstablecimiento = $_GET['establecimiento'];
    } else {
        header('Location: ../../public/establecimiento.php');
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
                                        <input type="hidden" class="form-control" id="workPage" name="workPage" value="establecimiento_detalle.php?establecimiento=<?php echo $codEstablecimiento; ?>&" required readonly>
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
                                            <thead id="codestablecimiento" class="<?php echo $codEstablecimiento; ?>">
                                                <tr class="bg-table-title" style="text-align:center;">
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
?>

    <script src="../js/api.js"></script>
    <script src="../js/establecimiento.js"></script>
    <script src="../js/establecimiento_poblacion.js"></script>

    <script>
        getTitle(<?php echo $codEstablecimiento; ?>);
    </script>
</body>
</html>