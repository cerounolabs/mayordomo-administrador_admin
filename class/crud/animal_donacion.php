<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
	require '../../class/function/curl_api.php';
	require '../../class/session/session_system.php';
	
	$var01	= $_POST['var031'];
	$var02  = $_POST['var032'];
    $var03	= $_POST['var033'];
	$var04	= $_POST['var034'];
    $var05  = $_POST['var036'];
	$var06	= $_POST['var037'];
    $var07	= $_POST['var038'];

	$work01 = $_POST['workCodigo'];
	$work02 = $_POST['workModo'];
	$work03 = $_POST['workPage'];
	$work04 = $_POST['workDonacion'];

	$usu_03	= $_SESSION['usu_03'];

	$log_04 = $_SESSION['log_04'];
	
	$seg_04	= $_SESSION['seg_04'];

	if (isset($var01) && isset($work01) && $var02 != 0 && $var03 != 0 && $var04 != 0) {
		$dataJSON = json_encode(
			array(
				'tipo_estado_parametro'	    				=> 1,
				'tipo_movimiento_parametro'					=> $var01,
				'tipo_donacion_parametro'   				=> $var02,
				'animal_codigo'			    				=> $work01,
				'persona_entrega_codigo'					=> $var03,
                'persona_recibido_codigo'					=> $var04,
				'animal_donacion_peso_faenado'				=> $var05,
				'animal_donacion_fecha'						=> $var06,
                'animal_donacion_observacion'				=> $var07,
				'auditoria_empresa'							=> $seg_04,
				'auditoria_usuario'							=> $usu_03,
				'auditoria_fecha_hora'						=> date('Y-m-d H:i:s'),
				'auditoria_ip'        						=> $log_04
			));

        $result         = post_curl('000/animaldonacion', $dataJSON);
		$result			= json_decode($result, true);
		$code		    = $result['code'];
		$msg			= str_replace("\n", ' ', $result['message']);
    }else {
        $code       = 400;
        $msg        = 'Verifique, algún campo esta vacio';
    }

	header('Location: ../../public/'.$work03.'&code='.$code.'&msg='.$msg);

	ob_end_flush();
?>