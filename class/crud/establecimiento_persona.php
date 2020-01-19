<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
	require '../../class/function/curl_api.php';
	
	$work01         = $_POST['workEstablecimiento'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];
	$work04         = $_POST['workCodigo'];
	$work05         = $_POST['workCount'] + 1;

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

	for ($i=1; $i < $work05; $i++) { 
		$var101 = $_POST['var101_'.$i];
		$var102 = $_POST['var102_'.$i];
		$var103	= $_POST['var103_'.$i];
		$var104	= strtoupper($_POST['var104_'.$i]);

		if (isset($var101) && $var101 > 0 && isset($var102) && isset($var103) && isset($var104)) {
			$dataJSON = json_encode(
				array(
					'tipo_estado_codigo'							=> $var101,
					'tipo_usuario_codigo'							=> $var102,
					'establecimiento_codigo'        				=> $work01,
					'persona_codigo'								=> $var103,
					'establecimiento_persona_observacion'			=> $var104,
					'auditoria_empresa_codigo'						=> $seg_04,
					'auditoria_usuario'								=> $usu_03,
					'auditoria_fecha_hora'							=> date('Y-m-d H:i:s'),
					'auditoria_ip'									=> $log_04
				));
			
			switch($work02){
				case 'C':
					$result	= post_curl('establecimiento/500/persona', $dataJSON);
					break;
				case 'U':
					$result	= put_curl('establecimiento/500/persona/'.$work04, $dataJSON);
					break;
				case 'D':
					$result	= delete_curl('establecimiento/500/persona/'.$work04, $dataJSON);
					break;
			}

			$result		= json_decode($result, true);
		}
	}

	header('Location: ../../public/'.$work03.'.php?establecimiento='.$work01.'&code='.$result['code'].'&msg='.$result['message']);

	ob_end_flush();
?>