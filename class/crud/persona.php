<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
    require '../../class/function/curl_api.php';

    $var01          = 1;
    $var02          = $_POST['var102'];
    $var03          = $_POST['var103'];
	$var04          = strtoupper($_POST['var104']);
	$var05          = strtoupper($_POST['var105']);
	$var06          = strtoupper($_POST['var106']);
	$var07          = strtoupper($_POST['var107']);
	$var08          = strtoupper($_POST['var108']);
	$var09          = strtolower($_POST['var109']);
	$var10          = strtoupper($_POST['var110']);

    $work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($var01) && isset($var02) && isset($var03) && isset($var04) && isset($var05)) {
        $dataJSON = json_encode(
            array(
                'tipo_estado_codigo'			=> $var01,
				'tipo_persona_codigo'			=> $var02,
				'tipo_documento_codigo'			=> $var03,
				'persona_documento'				=> $var04,
				'persona_completo'				=> $var05,
				'persona_codigo_sitrap'			=> $var06,
				'persona_codigo_sigor'			=> $var07,
				'persona_telefono'				=> $var08,
				'persona_email'					=> $var09,
				'persona_observacion'			=> $var10,
				'persona_empresa_codigo'		=> $seg_04,
				'persona_usuario'				=> $usu_03,
                'persona_fecha_hora'			=> date('Y-m-d H:i:s'),
				'persona_ip'					=> $log_04
			));
		
		switch($work02){
			case 'C':
				$result	= post_curl('default/400', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('default/400/'.$work01, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('default/400/'.$work01, $dataJSON);
				break;
		}
	}
	
	$result		= json_decode($result, true);

	header('Location: ../../public/'.$work03.'code='.$result['code'].'&msg='.$result['message']);

	ob_end_flush();
?>