<?php
    require '../class/function/curl_api.php';
    require '../class/function/function.php';
    require '../class/session/session_system.php';

    $establecimientoJSON = get_curl('000/establecimiento');
    $peso = get_curl('000/animalpeso/animal/253');
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
                                                <li class="breadcrumb-item active" aria-current="page">HOME</li>
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
<?php
    if ($establecimientoJSON['code'] === 200) {
        foreach ($establecimientoJSON['data'] as $establecimientoKEY => $establecimientoVALUE) {
?>
                <h4 class="card-title m-t-40"> <?php echo $establecimientoVALUE['persona_completo'].' - '.$establecimientoVALUE['establecimiento_nombre']; ?> </h4>
                <div class="row">
                    <div class="col-sm-12 col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">POBLACI&Oacute;N POR PROPIETARIO</h4>
                                <div id="cantPoblacionxPropietario_<?php echo $establecimientoVALUE['establecimiento_codigo']; ?>"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">POBLACI&Oacute;N POR ORIGEN</h4>
                                <div id="cantPoblacionxOrigen_<?php echo $establecimientoVALUE['establecimiento_codigo']; ?>"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">POBLACI&Oacute;N POR RAZA</h4>
                                <div id="cantPoblacionxRaza_<?php echo $establecimientoVALUE['establecimiento_codigo']; ?>"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">POBLACI&Oacute;N POR CATEGOR&Iacute;A</h4>
                                <div id="cantPoblacionxCategoria_<?php echo $establecimientoVALUE['establecimiento_codigo']; ?>"></div>
                            </div>
                        </div>
                    </div>
                </div>
<?php
        }
    }
?>
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

<?php
    if ($establecimientoJSON['code'] === 200) {
        foreach ($establecimientoJSON['data'] as $establecimientoKEY => $establecimientoVALUE) { 
            $char01 = get_curl('000/establecimientopoblacionchar01/'.$establecimientoVALUE['establecimiento_codigo']);
            $char02 = get_curl('000/establecimientopoblacionchar02/'.$establecimientoVALUE['establecimiento_codigo']);
            $char03 = get_curl('000/establecimientopoblacionchar03/'.$establecimientoVALUE['establecimiento_codigo']);
            $char04 = get_curl('000/establecimientopoblacionchar04/'.$establecimientoVALUE['establecimiento_codigo']);
?>
    <script>
        $(function() {
            'use strict';

            var chart01 = c3.generate({
                bindto: "#cantPoblacionxPropietario_<?php echo $establecimientoVALUE['establecimiento_codigo']; ?>",
                data: {
                    columns: [
<?php
            if ($char01['code'] === 200){
                foreach ($char01['data'] as $char01KEY => $char01VALUE) {
    
?>
                        ["<?php echo $char01VALUE['persona_completo'].' '.$char01VALUE['establecimiento_poblacion_cantidad']; ?>", <?php echo $char01VALUE['establecimiento_poblacion_cantidad']; ?>],
<?php
                }
            }
?>
                    ],
                    type: "pie",
                    onclick: function(o, n) { 
                        console.log("onclick", o, n) 
                    },
                    onmouseover: function(o, n) { 
                        console.log("onmouseover", o, n) 
                    },
                    onmouseout: function(o, n) { 
                        console.log("onmouseout", o, n) 
                    }
                }
            });

            var chart02 = c3.generate({
                bindto: "#cantPoblacionxOrigen_<?php echo $establecimientoVALUE['establecimiento_codigo']; ?>",
                data: {
                    columns: [
<?php
            if ($char02['code'] === 200){
                foreach ($char02['data'] as $char02KEY => $char02VALUE) {
    
?>
                        ["<?php echo $char02VALUE['tipo_origen_nombre'].' '.$char02VALUE['establecimiento_poblacion_cantidad']; ?>", <?php echo $char02VALUE['establecimiento_poblacion_cantidad']; ?>],
<?php
                }
            }
?>
                    ],
                    type: "pie",
                    onclick: function(o, n) { 
                        console.log("onclick", o, n) 
                    },
                    onmouseover: function(o, n) { 
                        console.log("onmouseover", o, n) 
                    },
                    onmouseout: function(o, n) { 
                        console.log("onmouseout", o, n) 
                    }
                }
            });

            var chart03 = c3.generate({
                bindto: "#cantPoblacionxRaza_<?php echo $establecimientoVALUE['establecimiento_codigo']; ?>",
                data: {
                    columns: [
<?php
            if ($char03['code'] === 200){
                foreach ($char03['data'] as $char03KEY => $char03VALUE) {
    
?>
                        ["<?php echo $char03VALUE['tipo_raza_nombre'].' '.$char03VALUE['establecimiento_poblacion_cantidad']; ?>", <?php echo $char03VALUE['establecimiento_poblacion_cantidad']; ?>],
<?php
                }
            }
?>
                    ],
                    type: "pie",
                    onclick: function(o, n) { 
                        console.log("onclick", o, n) 
                    },
                    onmouseover: function(o, n) { 
                        console.log("onmouseover", o, n) 
                    },
                    onmouseout: function(o, n) { 
                        console.log("onmouseout", o, n) 
                    }
                }
            });

            var chart04 = c3.generate({
                bindto: "#cantPoblacionxCategoria_<?php echo $establecimientoVALUE['establecimiento_codigo']; ?>",
                data: {
                    columns: [
<?php
            if ($char04['code'] === 200){
                foreach ($char04['data'] as $char04KEY => $char04VALUE) {
    
?>
                        ["<?php echo $char04VALUE['tipo_categoria_nombre'].' '.$char04VALUE['establecimiento_poblacion_cantidad']; ?>", <?php echo $char04VALUE['establecimiento_poblacion_cantidad']; ?>],
<?php
                }
            }
?>
                    ],
                    type: "pie",
                    onclick: function(o, n) { 
                        console.log("onclick", o, n) 
                    },
                    onmouseover: function(o, n) { 
                        console.log("onmouseover", o, n) 
                    },
                    onmouseout: function(o, n) { 
                        console.log("onmouseout", o, n) 
                    }
                }
            });
        });
    </script>
<?php
        }
    }
?>

</body>
</html>