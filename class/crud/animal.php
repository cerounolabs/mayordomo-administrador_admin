<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
    require '../../class/function/curl_api.php';

	$val01          = $_POST['var001'];
    $val02          = $_POST['var002'];
    $val03          = $_POST['var003'];
    $val04          = $_POST['var004'];
    $val05          = $_POST['var005'];
    $val06          = $_POST['var006'];
    $val07          = $_POST['var007'];
    $val08          = $_POST['var008'];
    $val09          = $_POST['var009'];
    $val10          = strtoupper(strtolower(trim($_POST['var010'])));
	$val11          = strtoupper(strtolower(trim($_POST['var011'])));
    $val12          = strtoupper(strtolower(trim($_POST['var012'])));
    $val13          = strtoupper(strtolower(trim($_POST['var013'])));
	$val14          = strtoupper(strtolower(trim($_POST['var014'])));
    $val15          = strtoupper(strtolower(trim($_POST['var015'])));
    $val16          = strtoupper(strtolower(trim($_POST['var016'])));

	$work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
    $work03         = $_POST['workPage'];
    $work04         = $_POST['workEspecie'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($val01) && isset($val02) && isset($val03) && isset($val04) && isset($val05) && isset($val06) && isset($val07) && isset($val08) && isset($val09)) {
        $dataJSON = json_encode(
			array(
				'tipo_estado_codigo'            => 75,
				'tipo_origen_codigo'            => $val04,
                'tipo_raza_codigo'              => $val05,
				'tipo_categoria_codigo'         => $val02,
				'tipo_subcategoria_codigo'      => $val03,
				'tipo_pelaje_codigo'            => $val07,
                'tipo_grado_sangre_codigo'      => $val08,
                'tipo_hacienda_codigo'          => $val09,
                'establecimiento_codigo'        => $val01,
                'persona_codigo'                => $val06,
                'animal_codigo_electronico'     => $val10,
                'animal_codigo_rp'              => $val11,
                'animal_codigo_hbp'             => $val12,
                'animal_codigo_sitrap'          => $val13,
                'animal_codigo_interno'         => $val14,
                'animal_codigo_nombre'          => $val15,
                'auditoria_usuario'             => $usu_03,
                'auditoria_fecha_hora'	        => date('Y-m-d H:i:s'),
				'auditoria_ip'        	        => $log_04,
				'auditoria_empresa'       	    => $seg_04
			));
		
		switch($work02){
			case 'C':
				$result	= post_curl('000/animal', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('000/animal/'.$work01, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('000/animal/'.$work01, $dataJSON);
				break;
		}
	}

	$result		= json_decode($result, true);
	$msg		= str_replace("\n", ' ', $result['message']);

    header('Location: ../../public/'.$work03.'.php?especie='.$work04.'&code='.$result['code'].'&msg='.$msg);

	ob_end_flush();
?>