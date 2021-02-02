<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
	require '../../class/function/curl_api.php';
	require '../../class/session/session_system.php';

    $var01          = 1;
    $var02          = $_POST['var02'];
    $var03          = $_POST['var03'];
	$var04          = strtoupper(strtolower(trim($_POST['var04'])));
	$var05          = strtoupper(strtolower(trim($_POST['var05'])));
	$var06          = strtoupper(strtolower(trim($_POST['var06'])));
	$var07          = strtoupper(strtolower(trim($_POST['var07'])));
	$var08          = strtoupper(strtolower(trim($_POST['var08'])));
	$var09          = strtolower(trim($_POST['var09']));
	$var10          = strtoupper(strtolower(trim($_POST['var10'])));

    $work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($var01) && isset($var02) && isset($var03) && isset($var04) && isset($var05)) {
        $dataJSON = json_encode(
            array(
                'tipo_estado_codigo'			=> $var01,
				'tipo_persona_codigo'			=> $var02,
				'tipo_documento_codigo'			=> $var03,
				'persona_documento'				=> $var04,
				'persona_completo'				=> $var05,
				'persona_codigo_sitrap'			=> $var06,
				'persona_codigo_sigor'			=> $var07,
				'persona_telefono'				=> $var08,
				'persona_email'					=> $var09,
				'persona_observacion'			=> $var10,
				'auditoria_empresa'				=> $seg_04,
				'auditoria_usuario'				=> $usu_03,
                'auditoria_fecha_hora'			=> date('Y-m-d H:i:s'),
				'auditoria_ip'					=> $log_04
			));
		
		switch($work02){
			case 'C':
				$result	= post_curl('000/persona', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('000/persona/'.$work01, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('000/persona/'.$work01, $dataJSON);
				break;
		}
	}
	
	$result		= json_decode($result, true);
	$msg		= str_replace("\n", ' ', $result['message']);

	header('Location: ../../public/'.$work03.'code='.$result['code'].'&msg='.$msg);

	ob_end_flush();
?>