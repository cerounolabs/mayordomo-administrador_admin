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
    $val17          = $_POST['var017'];
    $val18          = $_POST['var018'];
    $val19          = $_POST['var019'];

	$work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
    $work03         = $_POST['workPage'];
    $work04         = $_POST['workEspecie'];
    $work05         = $_POST['workAnimalPeso'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if ( $val01 != 0 && $val02 != 0 && $val03 != 0 && $val04 != 0 && $val05 != 0 && $val06 != 0 && $val07 != 0 && $val08 != 0 && $val09 != 0 ) {
        $dataJSON = json_encode(
			array(
				'tipo_estado_codigo'            => 2,
				'tipo_origen_codigo'            => intval($val04),
                'tipo_raza_codigo'              => intval($val05),
				'tipo_categoria_codigo'         => intval($val02),
				'tipo_subcategoria_codigo'      => intval($val03),
				'tipo_pelaje_codigo'            => intval($val07),
                'tipo_grado_sangre_codigo'      => intval($val08),
                'tipo_hacienda_codigo'          => intval($val09),
                'tipo_carimbo_parametro'        => intval($val18),
                'establecimiento_codigo'        => intval($val01),
                'persona_codigo'                => intval($val06),
                'animal_codigo_electronico'     => $val10,
                'animal_fecha_nacimiento'       => $val17.'-15',
                'animal_codigo_rp'              => $val11,
                'animal_codigo_hbp'             => $val12,
                'animal_codigo_sitrap'          => $val13,
                'animal_codigo_interno'         => $val14,
                'animal_codigo_nombre'          => $val15,
                'animal_observacion'            => $val16,
                'auditoria_usuario'             => $usu_03,
                'auditoria_fecha_hora'	        => date('Y-m-d H:i:s'),
				'auditoria_ip'        	        => $log_04,
				'auditoria_empresa'       	    => $seg_04
			));
		
		switch($work02){
			case 'C':
                $result = post_curl('000/animal', $dataJSON);
                $result = json_decode($result, true);
                $code   = $result['code'];
                $msg    = str_replace("\n", ' ', $result['message']);
				break;
			case 'U':
                $result = put_curl('000/animal/'.$work01, $dataJSON);
                $result	= json_decode($result, true);
                $code   = $result['code'];
                $msg    = str_replace("\n", ' ', $result['message']);
				break;
        }

	} else {
        $code       = 400;
        $msg        = 'Verifique, algún campo esta vacio';
    }

    if($work01 == 0){
        $work01 = $result['codigo'];
    }

    if (isset($val01) && isset($work01)){
        $dataJSON1 = json_encode(
			array(
				'tipo_estado_codigo'            => 1,
				'tipo_peso_codigo'              => 1,
                'establecimiento_codigo'        => $val01,
				'animal_codigo'                 => $work01,
				'animal_peso_fecha'             => $val17.'-15',
				'animal_peso_kilogramos'        => $val19,
                'auditoria_usuario'             => $usu_03,
                'auditoria_fecha_hora'	        => date('Y-m-d H:i:s'),
				'auditoria_ip'        	        => $log_04,
				'auditoria_empresa'       	    => $seg_04
			));
		
        switch($work02){
			case 'C':
				$result1	= post_curl('000/animalpeso', $dataJSON1);
				break;
            case 'U':
                $result1	= put_curl('000/animalpeso/'.$work05, $dataJSON1);
				break;
			case 'D':
                $result1    = delete_curl('000/animalpeso/'.$work05, $dataJSON1);
                $result     = delete_curl('000/animal/'.$work01, $dataJSON);
                $result     = json_decode($result, true);
                $code       = $result['code'];
                $msg        = str_replace("\n", ' ', $result['message']);
				break;
        }
    }

     header('Location: ../../public/'.$work03.'&code='.$code.'&msg='.$msg);

	ob_end_flush();
?>