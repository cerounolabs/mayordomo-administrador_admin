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
                                        <input type="hidden" class="form-control" id="workPage" name="workPage" value="establecimiento_detalle" required readonly>
                                        <input type="hidden" class="form-control" id="workCount" name="workCount" value="10" required readonly>
                                    </div>

                                    <div class="row">
                                        <h4 class="col-6 card-title">PERSONAS DETALLE</h4>
                                        <h4 class="col-6 card-title" style="text-align: right;">
                                            <button type="submit" id="addRow" class="btn btn-info"> <i class="ti-plus"></i> Agregar Item </button>
                                            <button type="button" id="addPersona" class="btn btn-info" data-toggle="modal" data-target="#modaldiv" onclick="setPersona();"> <i class="ti-plus"></i> Agregar Persona </button>
                                        </h4>
                                    </div>

                                    <div class="table-responsive">
                                        <table id="tableDetalle" class="table v-middle" style="width: 100%;">
                                            <thead id="tableCodigo" class="<?php echo $establecimientoJSON['data'][0]['establecimiento_codigo']; ?>">
                                                <tr class="bg-light">
                                                    <th class="border-top-0">ELIMINAR</th>
                                                    <th class="border-top-0">ESTADO</th>
                                                    <th class="border-top-0">TIPO ACCESO</th>
                                                    <th class="border-top-0">PERSONA | DOCUMENTO | C&Oacute;D SITRAP | C&Oacute;D SIGOR</th>
                                                    <th class="border-top-0">OBSERVACI&Oacute;N</th>
                                                </tr>
                                            </thead>
                                        </table>
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

                <!-- Modal Procesar -->
                <div id="modaldiv" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="vcenter" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" id="modalcontent">
                    </div>
                </div>
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

        function loadEstado(rowInd) {
            var xSELC   = document.getElementById('var101_'+rowInd);

            while (xSELC.length > 0) {
                xSELC.remove(0);
            }
            
            var option1     = document.createElement('option');
            option1.value   = 1;
            option1.text    = 'HABILITADO';
            xSELC.add(option1, null);

            var option2     = document.createElement('option');
            option2.value   = 2;
            option2.text    = 'DESHABILITADO';
            xSELC.add(option2, null);
        }

        function loadTipo(rowInd) {
            var xJSON   = JSON.parse(localStorage.getItem("dominioJSON"))['data'];
            var xSELC   = document.getElementById('var102_'+rowInd);

            while (xSELC.length > 0) {
                xSELC.remove(0);
            }
            
            xJSON.forEach(element => {
                if (element.tipo_estado_codigo == 1 && element.tipo_dominio == 'USUARIOROL') {
                    var option      = document.createElement('option');
                    option.value    = element.tipo_codigo;
                    option.text     = element.tipo_nombre;
                    xSELC.add(option, null);
                }
            });
        }

        function loadPersona(rowInd) {
            var xJSON   = JSON.parse(localStorage.getItem("personasJSON"))['data'];
            var xSELC   = document.getElementById('var103_'+rowInd);

            while (xSELC.length > 0) {
                xSELC.remove(0);
            }
            
            xJSON.forEach(element => {
                if (element.tipo_estado_codigo == 1) {
                    var option      = document.createElement('option');
                    option.value    = element.persona_codigo;
                    option.text     = element.persona_completo + ' | ' + element.persona_documento + ' | ' + element.persona_codigo_sitrap + ' | ' + element.persona_codigo_sigor;
                    xSELC.add(option, null);
                }
            });
        }

        function setPersona(){
            var xJSON       = JSON.parse(localStorage.getItem("dominioJSON"))['data'];
            var html        = '';
            var selTipo     = '';
            var selDocumento= '';

            xJSON.forEach(element => {
                if (element.tipo_estado_codigo == 1 && element.tipo_dominio == 'PERSONATIPO') {
                    selTipo = selTipo + '                               <option value="'+ element.tipo_codigo +'">'+ element.tipo_nombre +'</option>';
                }

                if (element.tipo_estado_codigo == 1 && element.tipo_dominio == 'PERSONADOCUMENTO') {
                    selDocumento = selDocumento + '                               <option value="'+ element.tipo_codigo +'">'+ element.tipo_nombre +'</option>';
                }
            });

            html = 
                '<div class="modal-content">'+
                '   <form id="form" data-parsley-validate method="post" action="../class/crud/persona.php">'+
                '       <div class="modal-header" style="color:#fff; background: #2585e4;">'+
                '		    <h4 class="modal-title" id="vcenter"> PERSONA</h4>'+
                '		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
                '	    </div>'+
                '       <div class="modal-body" >'+
                '           <div class="form-group">'+
                '               <input type="hidden" class="form-control" id="workCodigo" name="workCodigo" value="" required readonly>'+
                '               <input type="hidden" class="form-control" id="workModo" name="workModo" value="C" required readonly>'+
                '               <input type="hidden" class="form-control" id="workPage" name="workPage" value="establecimiento_persona_crud.php?establecimiento=<?php echo $codEstablecimiento; ?>&" required readonly>'+
                '           </div>'+
                '           <div class="row pt-3">'+
                '               <div class="col-sm-4">'+
                '                   <div class="form-group">'+
                '                       <label for="var102">TIPO PERSONA</label>'+
                '                       <select id="var102" name="var102" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
                '                           <optgroup label="Tipo Persona">'+ selTipo +
                '                           </optgroup>'+
                '                       </select>'+
                '                   </div>'+
                '               </div>'+
                '               <div class="col-sm-4">'+
                '                   <div class="form-group">'+
                '                       <label for="var103">TIPO DOCUMENTO</label>'+
                '                       <select id="var103" name="var103" class="select2 form-control custom-select" style="width:100%; height:40px;">'+
                '                           <optgroup label="Tipo Documento">'+ selDocumento +
                '                           </optgroup>'+
                '                       </select>'+
                '                   </div>'+
                '               </div>'+
                '               <div class="col-sm-4">'+
                '                   <div class="form-group">'+
                '                       <label for="var104">DOCUMENTO</label>'+
                '                       <input id="var104" name="var104" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="NRO DOCUMENTO" required>'+
                '                   </div>'+
                '               </div>'+
                '               <div class="col-sm-4">'+
                '                   <div class="form-group">'+
                '                       <label for="var105">PERSONA / EMPRESA</label>'+
                '                       <input id="var105" name="var105" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="PERSONA / EMPRESA" required>'+
                '                   </div>'+
                '               </div>'+
                '               <div class="col-sm-4">'+
                '                   <div class="form-group">'+
                '                       <label for="var106">SIGLAS SITRAP</label>'+
                '                       <input id="var106" name="var106" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="SIGLAS SITRAP" required>'+
                '                   </div>'+
                '               </div>'+
                '               <div class="col-sm-4">'+
                '                   <div class="form-group">'+
                '                       <label for="var107">C&Oacute;DIGO SIGOR</label>'+
                '                       <input id="var107" name="var107" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="C&Oacute;DIGO SIGOR" required>'+
                '                   </div>'+
                '               </div>'+
                '               <div class="col-sm-4">'+
                '                   <div class="form-group">'+
                '                       <label for="var108">TEL&Eacute;FONO</label>'+
                '                       <input id="var108" name="var108" class="form-control" type="text" style="text-transform:uppercase; height:40px;" placeholder="TEL&Eacute;FONO" required>'+
                '                   </div>'+
                '               </div>'+
                '               <div class="col-sm-4">'+
                '                   <div class="form-group">'+
                '                       <label for="var109">EMAIL</label>'+
                '                       <input id="var109" name="var109" class="form-control" type="email" style="text-transform:lowercase; height:40px;" placeholder="EMAIL" required>'+
                '                   </div>'+
                '               </div>'+
                '               <div class="col-12">'+
                '                   <div class="form-group">'+
                '                       <label for="var110">OBSERVACI&Oacute;N</label>'+
                '                       <textarea id="var110" name="var110" class="form-control" rows="5" style="text-transform:uppercase;"></textarea>'+
                '                   </div>'+
                '               </div>'+
                '           </div>'+
                '       </div>'+
                '	    <div class="modal-footer">'+
                '           <button type="submit" class="btn btn-info">Agregar</button>'+
                '		    <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
                '	    </div>'+
                '   </form>'+
                '</div>';

            $("#modalcontent").empty();
            $("#modalcontent").append(html);
        }

        getJSON('dominioJSON', 'default/000');
        getJSON('personasJSON', 'default/400');

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
                    "<td><select id='var101_"+ colCod +"' name='var101_"+ colCod +"' class='select2 form-control custom-select' style='width:100%; height:40px;' required></select></td>",
                    "<td><select id='var102_"+ colCod +"' name='var102_"+ colCod +"' class='select2 form-control custom-select' style='width:100%; height:40px;' required></select></td>",
                    "<td><select id='var103_"+ colCod +"' name='var103_"+ colCod +"' class='select2 form-control custom-select' style='width:100%; height:40px;' required></select></td>",
                    "<td><input  id='var104_"+ colCod +"' name='var104_"+ colCod +"' class='form-control' type='text' required></td>"
                ]).draw(true);

                loadEstado(colCod);
                loadTipo(colCod);
                loadPersona(colCod);
                colCod++;
            });

            $('#tableDetalle').on('click', '.btn-danger', function() {
                tabDat.row($(this).parents('tr')).remove().draw(false);
            });

            $('#addRow').click(); 
        });
    </script>
</body>
</html>