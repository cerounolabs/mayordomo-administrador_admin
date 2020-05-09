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

    $work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($var01) && isset($var03) && isset($var04) && isset($var05) && isset($var06)) {
        $dataJSON = json_encode(
            array(
				'tipo_estado_codigo'		=> $var01,
				'distrito_orden'			=> $var02,
				'tipo_riesgo_codigo'		=> $var05,
				'tipo_zona_codigo'			=> $var06,
				'departamento_codigo'		=> $var03,
				'distrito_nombre'			=> $var04,
				'distrito_observacion'		=> $var07,
				'auditoria_empresa'			=> $seg_04,
				'auditoria_usuario'			=> $usu_03,
                'auditoria_fecha_hora'		=> date('Y-m-d H:i:s'),
				'auditoria_ip'				=> $log_04
			));
		
		switch($work02){
			case 'C':
				$result	= post_curl('000/distrito', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('000/distrito/'.$work01, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('000/distrito/'.$work01, $dataJSON);
				break;
		}
	}

	$result		= json_decode($result, true);
	$msg		= str_replace("\n", ' ', $result['message']);

	header('Location: ../../public/'.$work03.'.php?code='.$result['code'].'&msg='.$msg);

	ob_end_flush();
?>