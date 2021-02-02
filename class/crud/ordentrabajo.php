<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
	require '../../class/function/curl_api.php';
	require '../../class/session/session_system.php';

	$val01          = $_POST['var001'];
    $val02          = $_POST['var002'];
    $val03          = $_POST['var003'];
	$val04          = strtoupper(strtolower(trim($_POST['var004'])));
	$val05          = $_POST['var005'];
	$val06          = $_POST['var006'];
	$val07          = $_POST['var007'];
	$val08          = $_POST['var008'];
	$val09          = strtoupper(strtolower(trim($_POST['var009'])));

	$work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];
	$work04         = $_POST['workTipo'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($val01) && isset($val02) && isset($val03) && isset($val04) && isset($val05) && isset($val06) && isset($val07)) {
        $dataJSON	= json_encode(
			array(
				'tipo_estado_codigo'			=> $val02,
				'tipo_orden_trabajo_codigo'		=> $val03,
                'establecimiento_codigo'		=> $val01,
				'persona_administrador_codigo'	=> $val05,
				'persona_veterinario_codigo'	=> $val06,
				'orden_trabajo_numero'			=> $val04,
				'orden_trabajo_fecha_inicio'	=> $val07,
				'orden_trabajo_fecha_fin'		=> $val08,
				'orden_trabajo_observacion'		=> $val09,
				'auditoria_usuario'         	=> $usu_03,
                'auditoria_fecha_hora'	    	=> date('Y-m-d H:i:s'),
				'auditoria_ip'        	    	=> $log_04,
				'auditoria_empresa'       		=> $seg_04
			));

		switch($work02){
			case 'C':
				$result	= post_curl('000/ordentrabajo', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('000/ordentrabajo/'.$work01, $dataJSON);
				break;
			case 'P':
				$result	= put_curl('000/ordentrabajo/'.$work01, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('000/ordentrabajo/'.$work01, $dataJSON);
				break;
		}
	}

	if ($work02 == 'P'){
		$dataJSON	= json_encode(
			array(
				'tipo_estado_codigo'					=> 1,
				'tipo_motivo_codigo'					=> 999,
				'tipo_escroto_codigo'					=> 999,
				'tipo_consistencia_codigo'				=> 999,
				'establecimiento_codigo'				=> $val01,
				'animal_codigo'							=> 0,
				'orden_trabajo_codigo'					=> $work01,
				'orden_trabajo_andrologia_fecha_carga'	=> date('Y-m-d'),
				'auditoria_usuario'						=> $usu_03,
				'auditoria_fecha_hora'					=> date('Y-m-d H:i:s'),
				'auditoria_ip'							=> $log_04,
				'auditoria_empresa'						=> $seg_04
			));

		$result1	= post_curl('000/ordentrabajoandrologia', $dataJSON);
	}
echo json_encode($result1);
	$result		= json_decode($result, true);
	$msg		= str_replace("\n", ' ', $result['message']);
	
//	header('Location: ../../public/'.$work03.'code='.$result['code'].'&msg='.$msg);

	ob_end_flush();
?>