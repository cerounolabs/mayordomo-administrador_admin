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
        $dataJSON = json_encode(
			array(
				'tipo_accion_codigo'									=> $val09,
				'tipo_estado_codigo'									=> $val09,
				'tipo_motivo_codigo'									=> $val09,
                'tipo_escroto_codigo'									=> $val09,
				'tipo_consistencia_codigo'								=> $val09,
				'establecimiento_codigo'								=> $val09,
				'animal_codigo'											=> $val09,
				'orden_trabajo_codigo'									=> $val09,
				'orden_trabajo_andrologia_fecha_carga'					=> $val09,
				'orden_trabajo_andrologia_circunferencia_escrotal'		=> $val09,
				'orden_trabajo_andrologia_cola'							=> $val09,
				'orden_trabajo_andrologia_vesicula'						=> $val09,
				'orden_trabajo_andrologia_veterinario_comentario'		=> $val09,
				'orden_trabajo_andrologia_laborario_analisis'			=> $val09,
				'orden_trabajo_andrologia_laborario_nombre'				=> $val09,
				'orden_trabajo_andrologia_laborario_comentario'			=> $val09,
				'orden_trabajo_andrologia_laborario_fecha_envio'		=> $val09,
				'orden_trabajo_andrologia_laborario_fecha_retorno'		=> $val09,
				'orden_trabajo_andrologia_laborario_adjunto'			=> $val09,
				'orden_trabajo_andrologia_observacion'					=> $val09,
				'auditoria_usuario'										=> $usu_03,
                'auditoria_fecha_hora'									=> date('Y-m-d H:i:s'),
				'auditoria_ip'											=> $log_04,
				'auditoria_empresa'										=> $seg_04
			));
		
		switch($work02){
			case 'C':
				$result	= post_curl('000/ordentrabajoandrologia', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('000/ordentrabajoandrologia/'.$work01, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('000/ordentrabajoandrologia/'.$work01, $dataJSON);
				break;
		}
	}

	$result		= json_decode($result, true);
	$msg		= str_replace("\n", ' ', $result['message']);
	
	header('Location: ../../public/'.$work03.'code='.$result['code'].'&msg='.$msg);

	ob_end_flush();
?>