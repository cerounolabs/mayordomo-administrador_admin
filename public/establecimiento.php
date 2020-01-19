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

    $establecimientoJSON = get_curl('establecimiento/500');
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
                                                <li class="breadcrumb-item active" aria-current="page">ESTABLECIMIENTO</li>
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
                                                <h3 class="m-b-0">LISTADO DE ESTABLECIMIENTOS</h3>
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
                        <div class="row">
<?php
    if ($establecimientoJSON['code'] === 200) {
        foreach ($establecimientoJSON['data'] as $establecimientoKEY => $establecimientoVALUE) {        
?>
                            <!-- Card -->
                            <div class="col-lg-3 col-md-4">
                                <div class="card" onclick="getEstablecimiento(<?php echo $establecimientoVALUE['establecimiento_codigo']; ?>);">
                                    <img class="card-img-top img-responsive" src="../assets/images/establecimiento/default02.jpg" alt="Card image cap">
                                    <div class="card-body">
                                        <h4 class="font-normal"><?php echo $establecimientoVALUE['establecimiento_nombre']; ?></h4>
                                    </div>
                                </div>
                            </div>
                            <!-- Card -->
<?php
        }
    }
?>
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

            <button type="button" class="btn btn-info float" onclick="setEstablecimiento(0, 1);" data-toggle="modal" data-target="#modaldiv">
                <i class="ti-plus"></i>
            </button>
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

        function getEstablecimiento(codEst){
            window.location.replace('../public/establecimiento_detalle.php?establecimiento='+codEst); 
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
                    bodyBot = 
                    '		      <button type="button" class="btn btn-info mr-auto" onclick="setPersona();" data-toggle="modal" data-target="#modaldiv2"><i class="ti-plus"></i> Agregar Persona</button>'+
                    '           <button type="submit" class="btn btn-info">Agregar</button>';
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
                    '               <input id="workEstablecimiento" name="workEstablecimiento" value="0" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workCodigo" name="workCodigo" value="0" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workModo" name="workModo" value="'+ bodyMod +'" class="form-control" type="hidden" required readonly>'+
                    '               <input id="workPage" name="workPage" value="establecimiento" class="form-control" type="hidden" required readonly>'+
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
                    '	    <div class="modal-footer justify-content-between">'+ bodyBot +
                    '           <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>'+
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

        function setPersona(){
            var xJSON1      = JSON.parse(localStorage.getItem("dominioJSON"))['data'];
            var html        = '';
            var selTipo     = '';
            var selDocumento= '';

            xJSON1.forEach(element1 => {
                if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'PERSONATIPO') {
                    selTipo = selTipo + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
                }

                if (element1.tipo_estado_codigo == 1 && element1.tipo_dominio == 'PERSONADOCUMENTO') {
                    selDocumento = selDocumento + '                               <option value="'+ element1.tipo_codigo +'">'+ element1.tipo_nombre +'</option>';
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
                '               <input type="hidden" class="form-control" id="workPage" name="workPage" value="establecimiento.php?" required readonly>'+
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

            $("#modalcontent2").empty();
            $("#modalcontent2").append(html);
        }

        getJSON('dominioJSON', 'default/000');
        getJSON('distritoJSON', 'default/300');
        getJSON('personasJSON', 'default/400');
    </script>
</body>
</html>