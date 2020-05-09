<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
    require '../../class/function/curl_api.php';

    $var01          = $_POST['var01'];
    $var02          = $_POST['var02'];
    $var03          = $_POST['var03'];
	$var04          = strtoupper(strtolower(trim($_POST['var04'])));
	$var05          = $_POST['var05'];
	$var06          = $_POST['var06'];
	$var07          = strtoupper(strtolower(trim($_POST['var07'])));
	$var08          = strtoupper(strtolower(trim($_POST['var08'])));
	$var09          = strtoupper(strtolower(trim($_POST['var09'])));
	$var10          = strtoupper(strtolower(trim($_POST['var10'])));
	$var11          = strtoupper(strtolower(trim($_POST['var11'])));
	$var12          = strtoupper(strtolower(trim($_POST['var12'])));
	$var13          = strtoupper(strtolower(trim($_POST['var13'])));
	$var14          = strtoupper(strtolower(trim($_POST['var14'])));
	$var15          = $_POST['var15'];

    $work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($var01) && isset($var02) && isset($var03) && isset($var04) && isset($var05) && isset($var06)) {
        $dataJSON = json_encode(
            array(
                'tipo_estado_codigo'					=> $var01,
				'tipo_establecimiento_codigo'			=> $var02,
				'tipo_finalidad_codigo'					=> $var03,
				'establecimiento_orden'					=> $var15,
				'establecimiento_nombre'				=> $var04,
				'persona_codigo'						=> $var05,
				'distrito_codigo'						=> $var06,
				'establecimiento_total_hectarea'		=> $var07,
				'establecimiento_total_potrero'			=> $var08,
				'establecimiento_codigo_senacsa'		=> $var09,
				'establecimiento_codigo_sigor'			=> $var10,
				'establecimiento_codigo_sitrap'			=> $var11,
				'establecimiento_latitud'				=> $var12,
				'establecimiento_longitud'				=> $var13,
				'establecimiento_observacion'			=> $var14,
				'auditoria_empresa'						=> $seg_04,
				'auditoria_usuario'                     => $usu_03,
                'auditoria_fecha_hora'                  => date('Y-m-d H:i:s'),
				'auditoria_ip'                          => $log_04
			));
		
		switch($work02){
			case 'C':
				$result	= post_curl('000/establecimiento', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('000/establecimiento/'.$work04, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('000/establecimiento/'.$work04, $dataJSON);
				break;
		}
	}

	$result		= json_decode($result, true);
	$msg		= str_replace("\n", ' ', $result['message']);

	header('Location: ../../public/'.$work03.'.php?code='.$result['code'].'&msg='.$msg);

	ob_end_flush();
?>