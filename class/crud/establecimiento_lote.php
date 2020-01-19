<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
    require '../../class/function/curl_api.php';

    $var01          = $_POST['var01'];
	$var02          = strtoupper($_POST['var02']);
	$var03          = strtoupper($_POST['var03']);

    $work01         = $_POST['workEstablecimiento'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];
	$work04         = $_POST['workCodigo'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($var01) && isset($var02)) {
        $dataJSON = json_encode(
            array(
                'tipo_estado_codigo'                        => $var01,
                'establecimiento_codigo'                    => $work01,
				'establecimiento_lote_nombre'            	=> $var02,
				'establecimiento_lote_observacion'			=> $var03,
				'auditoria_empresa_codigo'                  => $seg_04,
				'auditoria_usuario'                         => $usu_03,
                'auditoria_fecha_hora'                      => date('Y-m-d H:i:s'),
				'auditoria_ip'                              => $log_04
			));
		
		switch($work02){
			case 'C':
				$result	= post_curl('establecimiento/500/lote', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('establecimiento/500/lote/'.$work04, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('establecimiento/500/lote/'.$work04, $dataJSON);
				break;
		}
	}

	$result		= json_decode($result, true);

	header('Location: ../../public/'.$work03.'.php?establecimiento='.$work01.'&code='.$result['code'].'&msg='.$result['message']);

	ob_end_flush();
?>