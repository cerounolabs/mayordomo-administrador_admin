<?php
	if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
    require '../../class/function/curl_api.php';
    require '../../class/session/session_system.php';

    
	$val11          = $_POST['var11'];
    $val12          = $_POST['var12'];
    $val13          = $_POST['var13'];
	$val14          = $_POST['var14'];
    $val18          = $_POST['var18'];

	$work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
    $work03         = $_POST['workPage'];
    $work04         = $_POST['workEst'];
    $work05         = $_POST['workAnimalPeso'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];
	
	$seg_04         = $_SESSION['seg_04'];

    if (isset($val11) && isset($work01) && $val11 != 0 ){
        $dataJSON = json_encode(
			array(
				'tipo_estado_codigo'            => 1,
				'tipo_peso_codigo'              => $val11,
                'establecimiento_codigo'        => $work04,
				'animal_codigo'                 => $work01,
				'animal_peso_fecha'             => $val13,
                'animal_peso_kilogramos'        => $val12,
                'animal_peso_observacion'       => $val18,
                'auditoria_usuario'             => $usu_03,
                'auditoria_fecha_hora'	        => date('Y-m-d H:i:s'),
				'auditoria_ip'        	        => $log_04,
				'auditoria_empresa'       	    => $seg_04
			));
		
        switch($work02){
			case 'C':
				$result	= post_curl('000/animalpeso', $dataJSON);
				break;
            case 'U':
                $result	= put_curl('000/animalpeso/'.$work05, $dataJSON);
				break;
			case 'D':
                $result    = delete_curl('000/animalpeso/'.$work05, $dataJSON);
				break;
        }

        $result     = json_decode($result, true);
        $code       = $result['code'];
        $msg        = str_replace("\n", ' ', $result['message']);

    } else {
        $code       = 400;
        $msg        = 'Verifique, algún campo esta vacio';
    }

    header('Location: ../../public/'.$work03.'&code='.$code.'&msg='.$msg);

	ob_end_flush();
?>