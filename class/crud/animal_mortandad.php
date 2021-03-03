<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
    require '../../class/function/curl_api.php';
    require '../../class/function/function.php';
    require '../../class/session/session_system.php';

	$val01          = $_POST['var020']; 
    $val02          = $_POST['var021']; 
    $val03          = $_POST['var022']; 
    $val04          = $_POST['var023']; 
    $val05          = $_POST['var024']; 
    $val06          = $_POST['var025']; 
    $val07          = $_POST['var026'];
    $val08          = $_POST['var027'];
    $val09          = $_POST['var028']; 
    $val10          = trim($_POST['var030']);

	$work01         = $_POST['workCodigo']; 
	$work02         = $_POST['workModo'];
    $work03         = $_POST['workPage'];
	$work04         = $_POST['workAnimalMort'];
	$work05         = $_POST['workEstado'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];
	
	if ($val08 == 0) {
		$val011 = 5;
	} else {
		$val011 = 1;
	}


	if (isset($val01) && isset($work01) && $val02 != 0 && $val05 != 0 && $val06 != 0){
			$dataJSON = json_encode(
				array(
					'tipo_accion_codigo'	                  => 2,
					'tipo_origen_parametro'	                  => 1,
					'tipo_estado_codigo'	                  => $val011,
					'tipo_estado_parametro'                   => $work05,
					'tipo_mortandad_parametro'                => $val05,
					'persona_denunciante_codigo'              => $val06,
					'establecimiento_codigo'                  => $val01,
					'animal_codigo'                           => $work01,
					'animal_mortandad_fecha_denuncia'         => $val07,
					'persona_verificacion_codigo'             => $val08,
					'animal_mortandad_fecha_verificacion'     => $val09,
					'animal_mortandad_sector_potrero'         => $val02,
					'animal_mortandad_latitud'         		  => $val03,
					'animal_mortandad_longitud'               => $val04,
					'animal_mortandad_usuario_carga'  	      => $usu_03,
					'animal_mortandad_fecha_carga'			  => date('Y-m-d H:i:s'),
					'animal_mortandad_observacion'			  => $val10,
					'auditoria_usuario'                       => $usu_03,
					'auditoria_fecha_hora'                    => date('Y-m-d H:i:s'),
					'auditoria_ip'                            => $log_04,
					'auditoria_empresa'                       => $seg_04
				));
	
		switch($work02){
			case 'C':
				$result		= post_curl('000/animalmortandad', $dataJSON);
				$result2	= put_curl('000/animal/'.$work01, $dataJSON);
				break;
			case 'U':
				$result		= put_curl('000/animalmortandad/'.$work04, $dataJSON);
				$result2	= put_curl('000/animal/'.$work01, $dataJSON);
				break;
			case 'D':
				$result 	= delete_curl('000/animalmortandad/'.$work04, $dataJSON);
				break;
		}
		$result	= json_decode($result, true);
		$code   = $result['code'];
		$msg    = str_replace("\n", ' ', $result['message']);

	}  else {
        $code       = 400;
        $msg        = 'Verifique, algún campo esta vacio';
    }
	
    if($work04 == 0){
		$work04 = $result['codigo'];
    }

    for ($i=1; $i < 5; $i++) {
		$val11_			= '';
		$target_ban     = false;
        $target_msn		= '';	
        
		if (!empty($_FILES['var029_'.$i]['tmp_name'])) {
			$target_ban     = true;
			$target_msn     = '';
			$target_nam     = getFechaHora(1).'_'. rand(100, 999).'_'.$work04;
			$target_dir     = '../../upload/animal/';
			$target_file    = $target_dir.basename($_FILES['var029_'.$i]['name']);
			$imageFileType  = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
			$target_file	= $target_nam.'.'.$imageFileType;
			$code			= 400;
			$msg			= $target_msn;

			if(isset($_POST['submit'])) {
				$check = $_FILES['var029_'.$i]['size'];
				if($check !== false) {
					$target_ban = true;
				} else {
					$target_ban = false;
					$target_msn = 'ERROR: El adjunto no es correcto. Verifique!';
				}
			}
			
			if (file_exists($target_file) && $target_ban == true) {
				$target_msn = 'ERROR: Ya existe una adjunto con el mismo nombre. Verifique!';
				$target_ban = false;
			}
			
			if ($_FILES['var029_'.$i]['size'] > 20000001 && $target_ban == true) {
				$target_msn = 'ERROR: El adjunto es muy pesado, sobrepasa lo permitido de 20MB. Verifique!';
				$target_ban = false;
			}

			if(($imageFileType != 'pdf') && ($imageFileType != 'png') && ($imageFileType != 'jpg') && $target_ban == true) {
				$target_msn = 'ERROR: El formato del adjunto no corresponde, solo permitido pdf, Verifique!';
				$target_ban = false;
			}
			
			if ($target_ban == true) {
				if (move_uploaded_file($_FILES['var029_'.$i]['tmp_name'], $target_dir.''.$target_file)) {
					$val11	   	= $target_file;
					$target_msn	= $target_file;
					$target_ban = true;
				} else {
					$target_msn = 'ERROR: El adjunto tuvo inconveniente en subir, favor intente devuelta. Verifique!';
					$target_ban = false;
				}
			}
			$code			= 400;
			$msg			= $target_msn;
		}

		if ($target_ban == true) {
			if (isset($work04)) {
				$dataJSON1 = json_encode(
					array(
						'animal_mortandad_codigo'                   => $work04,
						'tipo_estado_parametro'     	            => 1,
						'animal_adjunto_nombre'						=> $val11,
						'animal_adjunto_fecha'						=> date('Y-m-d H:i:s'),
						'auditoria_usuario'         				=> $usu_03,
						'auditoria_fecha_hora'	    				=> date('Y-m-d H:i:s'),
						'auditoria_ip'        	    				=> $log_04,
						'auditoria_empresa'                       	=> $seg_04
					));

				$result1		= post_curl('000/animaladjunto', $dataJSON1);
				$result1		= json_decode($result1, true);
				$code		    = $result1['code'];
				$msg		    = str_replace("\n", ' ', $result1['message']);
			}
		}
	}

   	header('Location: ../../public/'.$work03.'&code='.$code.'&msg='.$msg);

	ob_end_flush();
?>