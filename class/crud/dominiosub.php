<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
	require '../../class/function/curl_api.php';
	require '../../class/session/session_system.php';

    $val01          = $_POST['var01'];
    $val02          = $_POST['var02'];
    $val03          = $_POST['var03'];
	$val04          = $_POST['var04'];
	$val05          = strtoupper(strtolower(trim($_POST['var05'])));

	$work01_1		= $_POST['workCodigo1'];
	$work01_2		= $_POST['workCodigo2'];
    $work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];
	$work04         = $_POST['workDominio'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

	if (!isset($val01)){
		$val01 = 1;
	}

	if (!isset($val03)){
		$val03 = $work01_1;
	}

	if (!isset($val04)){
		$val04 = $work01_2;
	}

    if (isset($val01) && isset($val03) && isset($val04) && isset($work04)) {
        $dataJSON = json_encode(
            array(
				'tipo_estado_codigo'    => $val01,
				'tipo_orden'			=> $val02,
				'tipo_dominio1_codigo'	=> $val03,
				'tipo_dominio2_codigo'	=> $val04,
				'tipo_dominio'          => $work04,
				'tipo_observacion'      => $val05,
				'auditoria_empresa'		=> $seg_04,
				'auditoria_usuario'		=> $usu_03,
                'auditoria_fecha_hora'	=> date('Y-m-d H:i:s'),
                'auditoria_ip'			=> $log_04
			));

		switch($work02){
			case 'C':
				$result	= post_curl('000/dominiosub', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('000/dominiosub', $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('000/dominiosub', $dataJSON);
				break;
		}
	}

	$result		= json_decode($result, true);
	$msg		= str_replace("\n", ' ', $result['message']);

	header('Location: ../../public/'.$work03.'&code='.$result['code'].'&msg='.$msg);

	ob_end_flush();
?>