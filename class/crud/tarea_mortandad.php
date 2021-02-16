<?php
    if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
	require '../../class/function/curl_api.php';
    require '../../class/function/function.php';
    require '../../class/session/session_system.php';


    $var01          = $_POST['var001'];	//establecimiento
	$var02          = $_POST['var002'];	// sector potrero
	$var03          = trim(strtoupper(strtolower($_POST['var003']))); //latitud
    $var04          = trim(strtoupper(strtolower($_POST['var004']))); //longitud
    $var05          = $_POST['var005']; //identificacion individual
    $var06          = $_POST['var006']; // IDENTIFICACION ANIMAL
    $var07          = $_POST['var007']; // PROPIETARIO
    $var08          = $_POST['var008']; // ORIGEN1
    $var09          = $_POST['var009']; // RAZA1
  //  $var10          = $_POST['var010']; // CATEGORIA - SUBCATEGORIA1
    $var11          = $_POST['var011']; // MOTIVO	TIPO MORTANDAD
    $var12          = $_POST['var012']; // FECHA DEL EVENTO
    $var13          = $_POST['var013']; // DENUNCIADO POR
    $var14          = $_POST['var014']; // VERIFICADO POR
    //$var15          = $_POST['var015_']; // IMAGEN 1
    $var16          = $_POST['var016']; trim(strtoupper(strtolower($_POST['var016'])));
    $var17          = $_POST['var017']; // CARIMBO
	
	$work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];
	//$work01         = $_POST['workEstablecimiento'];
	$work05         = $_POST['workEstado'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];

	$seg_04         = $_SESSION['seg_04'];

	if (isset($_POST['var010'])) {
		$pos		= strpos($_POST['var010'], '_');
		$var10_1	= substr($_POST['var010'], 0, $pos);
		$var10_2	= substr($_POST['var010'], ($pos+1));
	}

	

	if ($var05 == 0){	
		$xJSON = get_curl('000/animal/datos/'.$var08. '/'. $var09. '/'. $var10_1. '/'. $var10_2. '/'. $var01 . '/'. $var07 . '/'. $var17);
		$var18 = $xJSON['data'][0]['animal_codigo'];
	}

    if (isset($var01) && !empty($var18) && !empty($var13) && !empty($var11)) {
        $dataJSON = json_encode(
            array(
				'tipo_estado_parametro'                   => $work05,
				'tipo_mortandad_parametro'                => $var11,
				'persona_denunciante_codigo'              => $var13,
				'establecimiento_codigo'                  => $var01,
				'animal_codigo'                           => $var18,
				'animal_mortandad_fecha_denuncia'         => $var12,
				'animal_mortandad_sector_potrero'         => $var02,
				'animal_mortandad_latitud'         		  => $var03,
				'animal_mortandad_longitud'               => $var04,
				'animal_mortandad_usuario_carga'  	      => $usu_03,
				'animal_mortandad_fecha_carga'			  => date('Y-m-d H:i:s'),
				'animal_mortandad_observacion'			  => $var16,
				'auditoria_usuario'                       => $usu_03,
				'auditoria_fecha_hora'                    => date('Y-m-d H:i:s'),
				'auditoria_ip'                            => $log_04,
				'auditoria_empresa'                       => $seg_04
			));
		
			switch($work02){
				case 'C':
					$result	= post_curl('000/animalmortandad', $dataJSON);
					break;
				case 'U':
					$result	= put_curl('000/animalmortandad/'.$work01, $dataJSON);
					break;
				case 'D':
					$result = delete_curl('000/animalmortandad/'.$work01, $dataJSON);
					break;
			}
			$result		= json_decode($result, true);
    		$msg1		= str_replace("\n", ' ', $result['message']);
	} else {
        $code       = 400;
        $msg1       = 'Verifique, algún campo esta vacio';
    }


	if($work01 == 0){
		$work01 = $result['codigo'];
	}

	for ($i=1; $i < 5; $i++) {
		$val15			= '';
		$target_ban     = false;
        $target_msn		= '';	
        
		if (!empty($_FILES['var015_'.$i]['tmp_name'])) {
			$target_ban     = true;
			$target_msn     = '';
			$target_nam     = getFechaHora(1).'_'. rand(100, 999).'_'.$work01;
			$target_dir     = '../../upload/animal/';
			$target_file    = $target_dir.basename($_FILES['var015_'.$i]['name']);
			$imageFileType  = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
			$target_file	= $target_nam.'.'.$imageFileType;
			$code			= 400;
			$msg			= $target_msn;

			if(isset($_POST['submit'])) {
				$check = $_FILES['var015_'.$i]['size'];
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
			
			if ($_FILES['var015_'.$i]['size'] > 20000001 && $target_ban == true) {
				$target_msn = 'ERROR: El adjunto es muy pesado, sobrepasa lo permitido de 20MB. Verifique!';
				$target_ban = false;
			}

			if(($imageFileType != 'pdf') && ($imageFileType != 'png') && ($imageFileType != 'jpg') && $target_ban == true) {
				$target_msn = 'ERROR: El formato del adjunto no corresponde, solo permitido pdf, Verifique!';
				$target_ban = false;
			}
			
			if ($target_ban == true) {
				if (move_uploaded_file($_FILES['var015_'.$i]['tmp_name'], $target_dir.''.$target_file)) {
					$var015	   	= $target_file;
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
			if (isset($work01)) {
				$dataJSON1 = json_encode(
					array(
						'animal_mortandad_codigo'                   => $work01,
						'tipo_estado_parametro'     	            => $work05,
						'animal_adjunto_nombre'						=> $var015,
						'animal_adjunto_fecha'						=> date('Y-m-d H:i:s'),
						'auditoria_usuario'         				=> $usu_03,
						'auditoria_fecha_hora'	    				=> date('Y-m-d H:i:s'),
						'auditoria_ip'        	    				=> $log_04,
						'auditoria_empresa'                       	=> $seg_04
					));

				$result1		= post_curl('000/animaladjunto', $dataJSON1);
				$result1		= json_decode($result1, true);
				$code		    = $result1['code'];
				//$msg		    = str_replace("\n", ' ', $result1['message']);
			}
		} else {
			$code       = 400;
			$msg        = 'Verifique, algún campo esta vacio';
		}
	}
	
   header('Location: ../../public/'.$work03.'code='.$result['code'].'&msg='.$msg1);

    ob_end_flush();

?>