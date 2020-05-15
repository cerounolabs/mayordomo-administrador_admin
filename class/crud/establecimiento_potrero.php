<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
    require '../../class/function/curl_api.php';

    $var01          = $_POST['var01'];
	$var02          = $_POST['var02'];
	$var03          = $_POST['var03'];
	$var04          = $_POST['var04'];
	$var05          = $_POST['var05'];
	$var06          = strtoupper(strtolower(trim($_POST['var06'])));
	$var07          = $_POST['var07'];
	$var08          = $_POST['var08'];
	$var09          = strtoupper(strtolower(trim($_POST['var09'])));

    $work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];
	$work04         = $_POST['workEstablecimiento'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($var01) && isset($var05)) {
        $dataJSON = json_encode(
            array(
				'tipo_estado_codigo'                        	=> $var01,
				'tipo_pastura1_codigo'                       	=> $var03,
				'tipo_pastura2_codigo'                       	=> $var04,
				'establecimiento_codigo'                    	=> $work04,
				'establecimiento_seccion_codigo'            	=> $var05,
				'establecimiento_potrero_orden'            		=> $var02,
				'establecimiento_potrero_nombre'            	=> $var06,
				'establecimiento_potrero_hectarea'				=> $var07,
				'establecimiento_potrero_capacidad'				=> $var08,
				'establecimiento_potrero_observacion'			=> $var09,
				'auditoria_empresa'                  			=> $seg_04,
				'auditoria_usuario'                         	=> $usu_03,
                'auditoria_fecha_hora'                      	=> date('Y-m-d H:i:s'),
				'auditoria_ip'                              	=> $log_04
			));
		
		switch($work02){
			case 'C':
				$result	= post_curl('000/establecimientopotrero', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('000/establecimientopotrero/'.$work01, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('000/establecimientopotrero/'.$work01, $dataJSON);
				break;
		}
	}

	$result		= json_decode($result, true);
	$msg		= str_replace("\n", ' ', $result['message']);

	header('Location: ../../public/'.$work03.'.php?establecimiento='.$work04.'&code='.$result['code'].'&msg='.$msg);
	
	ob_end_flush();
?>