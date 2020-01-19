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

    $dominioJSON        = get_curl('default/000');
    $establecimientoJSON= get_curl('establecimiento/500/'.$codEstablecimiento);
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
                                                <li class="breadcrumb-item active" aria-current="page">PERSONA</li>
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
                <form id="form" data-parsley-validate method="post" action="../class/crud/establecimiento_persona.php">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title"></h4>

                                	<div class="form-group">
                                        <input type="hidden" class="form-control" id="workEstablecimiento" name="workEstablecimiento" value="<?php echo $codEstablecimiento; ?>" required readonly>
                                        <input type="hidden" class="form-control" id="workCodigo" name="workCodigo" value="0" required readonly>
                                        <input type="hidden" class="form-control" id="workModo" name="workModo" value="C" required readonly>
                                        <input type="hidden" class="form-control" id="workPage" name="workPage" value="establecimiento_persona" required readonly>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-12 col-md-4">
                                            <div class="form-group">
                                                <label for="var101">ESTADO</label>
                                                <select id="var101" name="var101" class="select2 form-control custom-select" style="width: 100%; height:40px;" required>
                                                    <optgroup label="Estado">
                                                        <option value="1">HABILITADO</option>
                                                        <option value="2">DESHABILITADO</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-4">
                                            <div class="form-group">
                                                <label for="var102">TIPO USUARIO</label>
                                                <select id="var102" name="var102" class="select2 form-control custom-select" style="width: 100%; height:40px;" required>
                                                    <optgroup label="Tipo Usuario">
<?php
    if ($dominioJSON['code'] === 200){
        foreach ($dominioJSON['data'] as $dominioKEY => $dominioVALUE) {
            if ($dominioVALUE['tipo_estado_codigo'] === 1 && $dominioVALUE['tipo_dominio'] === 'USUARIOROL'){
?>
                                                        <option value="<?php echo $dominioVALUE['tipo_codigo']; ?>"><?php echo $dominioVALUE['tipo_nombre']; ?></option>
<?php
            }
        }
    }
?>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-4">
                                            <div class="form-group">
                                                <label for="var103">TIPO PERSONA</label>
                                                <select id="var103" name="var103" class="select2 form-control custom-select" style="width: 100%; height:40px;" required>
                                                    <optgroup label="Tipo Persona">
<?php
    if ($dominioJSON['code'] === 200){
        foreach ($dominioJSON['data'] as $dominioKEY => $dominioVALUE) {
            if ($dominioVALUE['tipo_estado_codigo'] === 1 && $dominioVALUE['tipo_dominio'] === 'PERSONATIPO'){
?>
                                                        <option value="<?php echo $dominioVALUE['tipo_codigo']; ?>"><?php echo $dominioVALUE['tipo_nombre']; ?></option>
<?php
            }
        }
    }
?>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-8">
                                            <div class="form-group">
                                                <label for="var104">PERSONA / EMPRESA</label>
                                                <input id="var104" name="var104" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="PERSONA / EMPRESA" required>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-4">
                                            <div class="form-group">
                                                <label for="var105">TIPO DOCUMENTO</label>
                                                <select id="var105" name="var105" class="select2 form-control custom-select" style="width: 100%; height:40px;">
                                                    <optgroup label="Tipo Documento">
<?php
    if ($dominioJSON['code'] === 200){
        foreach ($dominioJSON['data'] as $dominioKEY => $dominioVALUE) {
            if ($dominioVALUE['tipo_estado_codigo'] === 1 && $dominioVALUE['tipo_dominio'] === 'PERSONADOCUMENTO'){
?>
                                                        <option value="<?php echo $dominioVALUE['tipo_codigo']; ?>"><?php echo $dominioVALUE['tipo_nombre']; ?></option>
<?php
            }
        }
    }
?>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-4">
                                            <div class="form-group">
                                                <label for="var106">DOCUMENTO</label>
                                                <input id="var106" name="var106" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="NRO DOCUMENTO" required>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-4">
                                            <div class="form-group">
                                                <label for="var107">SIGLAS SITRAP</label>
                                                <input id="var107" name="var107" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="SIGLAS SITRAP" required>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-4">
                                            <div class="form-group">
                                                <label for="var108">C&Oacute;DIGO SIGOR</label>
                                                <input id="var108" name="var108" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SIGOR" required>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-4">
                                            <div class="form-group">
                                                <label for="var109">TEL&Eacute;FONO</label>
                                                <input id="var109" name="var109" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="TEL&Eacute;FONO" required>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 col-md-4">
                                            <div class="form-group">
                                                <label for="var110">EMAIL</label>
                                                <input id="var110" name="var110" class="form-control" type="email" style="text-transform:lowercase; height:40px;" placeholder="EMAIL" required>
                                            </div>
                                        </div>

                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="var111">OBSERVACI&Oacute;N</label>
                                                <textarea id="var111" name="var111" class="form-control" rows="5" style="text-transform:uppercase;"></textarea>
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
    
    if ($codeRest == 204) {
?>
    <script>
        $(function() {
            toastr.error('<?php echo $msgRest; ?>', 'Error!');
        });
    </script>
<?php
    }
?>
</body>
</html>