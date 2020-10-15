<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
    require '../../class/function/curl_api.php';


	$work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];
	$work04         = $_POST['workOT'];
	$work05         = $_POST['workAnimal'];
	$work06         = $_POST['workAccion'];
	$work07         = $_POST['workCorral'];
	$work08         = $_POST['workEst'];

if ($work06 == '1') {
	//Actualización de Veterinario
	$val01          = $_POST['var01'];
    $val02          = $_POST['var02'];
    $val03          = $_POST['var03'];
	$val04        	= $_POST['var04'];
	$val05          = $_POST['var05'];
	$val06          = strtoupper(strtolower(trim($_POST['var06'])));
	$val07          = strtoupper(strtolower(trim($_POST['var07'])));
	$val08          = strtoupper(strtolower(trim($_POST['var08'])));
	$val09          = strtoupper(strtolower(trim($_POST['var09'])));

	$val010         = '';
	$val011         = '';
	$val012         = '';
	$val013         = '';
	$val014         = '';
	$val015         = '';
}

if ($work06 == '2') {
	//Actualización de Laboratorio
	$val01          = '';
    $val02          = '';
    $val03          = '';
	$val04        	= '';
	$val05          = '';
	$val06          = '';
	$val07          = '';
	$val08          = '';
	$val09          = '';

	$val010         = $_POST['var010'];
	$val011         = strtoupper(strtolower(trim($_POST['var011'])));
	$val012         = $_POST['var012'];
	$val013         = $_POST['var013'];
	$val014         = 'var014';
	$val015         = strtoupper(strtolower(trim($_POST['var015'])));
}


	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($work01)) {
        $dataJSON = json_encode(
			array(
				'orden_trabajo_andrologia_codigo'						=> $work01,
				'tipo_estado_codigo'									=> $val01,
				'tipo_motivo_codigo'									=> $val02,
                'tipo_escroto_codigo'									=> $val03,
				'tipo_consistencia_codigo'								=> $val04,
				'tipo_resultado_corral_codigo'							=> $work07,
				'animal_codigo'											=> $work05,
				'establecimiento_codigo'								=> $work08,
				'tipo_resultado_laboratorio_codigo'						=> $val010,
				'orden_trabajo_andrologia_laborario_nombre'				=> $val011,
				'orden_trabajo_andrologia_laborario_fecha_envio'		=> $val012,
				'orden_trabajo_andrologia_laborario_fecha_retorno'		=> $val013,
				'orden_trabajo_andrologia_laborario_adjunto'			=> $val014,
				'orden_trabajo_andrologia_laborario_comentario'			=> $val015,
				'tipo_accion_codigo'									=> $work06,
				'orden_trabajo_codigo'									=> $work04,				
				'orden_trabajo_andrologia_peso'							=> $val05,
				'orden_trabajo_andrologia_circunferencia_escrotal'		=> $val06,
                'orden_trabajo_andrologia_cola'							=> $val07,
				'orden_trabajo_andrologia_vesicula'						=> $val08,
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

	header('Location: ../../public/'.$work03.'&code='.$result['code'].'&msg='.$msg);

	ob_end_flush();
?>