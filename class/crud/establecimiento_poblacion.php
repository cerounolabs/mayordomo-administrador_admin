<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
	require '../../class/function/curl_api.php';
	
	$work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];
	$work04         = $_POST['workCount'] + 1;

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

	for ($i=1; $i < $work04; $i++) { 
		$var101 = $_POST['var101_'.$i];
		$var102 = $_POST['var102_'.$i];
		$var103	= $_POST['var103_'.$i];

		if (isset($_POST['var104_'.$i])) {
			$pos		= strpos($_POST['var104_'.$i], '_');
			$var104_1	= substr($_POST['var104_'.$i], 0, $pos);
			$var104_2	= substr($_POST['var104_'.$i], ($pos+1));
		}
		
		$var105	= $_POST['var105_'.$i];
		$var106 = $_POST['var106_'.$i];
		$var107 = '';//$_POST['var107_'.$i];

		if (isset($var101) && isset($var102) && isset($var103) && isset($var104_1) && isset($var104_2) && isset($var106) && $var106 > 0) {
			$dataJSON = json_encode(
				array(
					'tipo_origen_codigo'						=> $var102,
					'tipo_raza_codigo'							=> $var103,
					'tipo_categoria_codigo'						=> $var104_1,
					'tipo_subcategoria_codigo'					=> $var104_2,
					'establecimiento_codigo'                    => $work01,
					'persona_codigo'							=> $var101,
					'establecimiento_poblacion_peso'			=> $var105,
					'establecimiento_poblacion_cantidad'		=> $var106,
					'establecimiento_poblacion_observacion'		=> $var107,
					'auditoria_empresa'                  		=> $seg_04,
					'auditoria_usuario'                         => $usu_03,
					'auditoria_fecha_hora'                      => date('Y-m-d H:i:s'),
					'auditoria_ip'                              => $log_04
				));

			switch($work02){
				case 'C':
					$result	= post_curl('000/establecimientopoblacion', $dataJSON);
					break;
				case 'U':
					$result	= post_curl('000/establecimientopoblacion', $dataJSON);
					break;
				case 'D':
					$result	= delete_curl('000/establecimientopoblacion', $dataJSON);
					break;
			}

			$result		= json_decode($result, true);
			$msg		= str_replace("\n", ' ', $result['message']);
		}
	}

	header('Location: ../../public/'.$work03.'code='.$result['code'].'&msg='.$msg);

	ob_end_flush();
?>