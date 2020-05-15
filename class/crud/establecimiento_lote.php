<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
    require '../../class/function/curl_api.php';

    $var01          = $_POST['var01'];
	$var02          = $_POST['var02'];
	$var03          = strtoupper(strtolower(trim($_POST['var03'])));
	$var04          = strtoupper(strtolower(trim($_POST['var04'])));

	$work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];
	$work04         = $_POST['workEstablecimiento'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($var01) && isset($var02)) {
        $dataJSON = json_encode(
            array(
                'tipo_estado_codigo'                        => $var01,
				'establecimiento_codigo'                    => $work04,
				'establecimiento_lote_orden'            	=> $var02,
				'establecimiento_lote_nombre'            	=> $var03,
				'establecimiento_lote_observacion'			=> $var04,
				'auditoria_empresa'                  		=> $seg_04,
				'auditoria_usuario'                         => $usu_03,
                'auditoria_fecha_hora'                      => date('Y-m-d H:i:s'),
				'auditoria_ip'                              => $log_04
			));
		
		switch($work02){
			case 'C':
				$result	= post_curl('000/establecimientolote', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('000/establecimientolote/'.$work01, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('000/establecimientolote/'.$work01, $dataJSON);
				break;
		}
	}

	$result		= json_decode($result, true);
	$msg		= str_replace("\n", ' ', $result['message']);

	header('Location: ../../public/'.$work03.'.php?establecimiento='.$work04.'&code='.$result['code'].'&msg='.$msg);
	
	ob_end_flush();
?>