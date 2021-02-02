<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
	require '../../class/function/curl_api.php';
	require '../../class/session/session_system.php';

    $var01          = $_POST['var01'];
    $var02          = $_POST['var02'];
    $var03          = $_POST['var03'];
	$var04          = strtoupper(strtolower(trim($_POST['var04'])));
	$var05          = strtoupper(strtolower(trim($_POST['var05'])));

    $work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($var01) && isset($var03) && isset($var04)) {
        $dataJSON = json_encode(
            array(
				'tipo_estado_codigo'			=> $var01,
				'departamento_orden'			=> $var02,
				'pais_codigo'					=> $var03,
				'departamento_nombre'			=> $var04,
				'departamento_observacion'		=> $var05,
				'auditoria_empresa'				=> $seg_04,
				'auditoria_usuario'				=> $usu_03,
                'auditoria_fecha_hora'			=> date('Y-m-d H:i:s'),
				'auditoria_ip'					=> $log_04
			));
		
		switch($work02){
			case 'C':
				$result	= post_curl('000/departamento', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('000/departamento/'.$work01, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('000/departamento/'.$work01, $dataJSON);
				break;
		}
	}

	$result		= json_decode($result, true);
	$msg		= str_replace("\n", ' ', $result['message']);

	header('Location: ../../public/'.$work03.'.php?code='.$result['code'].'&msg='.$msg);

	ob_end_flush();
?>