<?php
    if(!isset($_SESSION)){ 
        session_start(); 
    }
    
    ob_start();
    
	require '../../class/function/curl_api.php';
	require '../../class/session/session_system.php';
	
    $var01          = $_POST['var001'];
	$var02          = $_POST['var002'];
	$var03          = trim(strtoupper(strtolower($_POST['var003'])));
    $var04          = trim(strtoupper(strtolower($_POST['var004'])));
    $var05          = $_POST['var005'];
    $var06          = $_POST['var006'];
    $var07          = $_POST['var007'];
    $var08          = $_POST['var008'];
    $var09          = $_POST['var009'];
    $var10          = $_POST['var010'];
    $var11          = $_POST['var011'];
    $var12          = $_POST['var012'];
    $var13          = $_POST['var013'];
    $var14          = $_POST['var014'];
    $var15          = $_POST['var015'];
    $var16          = $_POST['var016'];
    $var17          = $_POST['var017'];
    $var18          = $_POST['var018'];
	$var19          = trim(strtoupper(strtolower($_POST['var019'])));
	
	$work01         = $_POST['workCodigo'];
	$work02         = $_POST['workModo'];
	$work03         = $_POST['workPage'];
	$work04         = $_POST['workEstablecimiento'];

	$usu_03         = $_SESSION['usu_03'];

	$log_04         = $_SESSION['log_04'];

	$seg_04         = $_SESSION['seg_04'];
	
    if (isset($var01) && isset($var03)) {
        $dataJSON = json_encode(
            array(
                'tipo_estado_codigo'				=> 1,
				'tipo_mortandad_codigo'				=> $var11,
				'tipo_origen_codigo'				=> $var06,
				'tipo_raza_codigo'					=> $var07,
				'tipo_categoria_codigo'				=> $var08_1,
				'tipo_subcategoria_codigo'			=> $var08_2,
				'establecimiento_codigo'			=> $var01,
				'establecimiento_sector_codigo'		=> $var02_1,
				'establecimiento_potrero_codigo'	=> $var02_2,
				'animal_codigo'						=> $var10,
				'persona_propietario_codigo'		=> $var05,
				'persona_denunciante_codigo'		=> $var13,
				'persona_certificado_codigo'		=> $var14,
				'tarea_mortandad_fecha'				=> $var12,
				'tarea_mortandad_identificado'		=> $var09,
				'tarea_mortandad_latitud'			=> $var03,
				'tarea_mortandad_longitud'			=> $var04,
				'tarea_mortandad_observacion'		=> $var19,
				'auditoria_empresa'					=> $seg_04,
				'auditoria_usuario'					=> $usu_03,
                'auditoria_fecha_hora'				=> date('Y-m-d H:i:s'),
				'auditoria_ip'						=> $log_04
			));
		
		switch($work02){
			case 'C':
				$result	= post_curl('000/tareamortandad', $dataJSON);
				break;
			case 'U':
				$result	= put_curl('000/tareamortandad/'.$work01, $dataJSON);
				break;
			case 'D':
				$result	= delete_curl('000/tareamortandad/'.$work01, $dataJSON);
				break;
		}
	}

    $result		= json_decode($result, true);
    $msg		= str_replace("\n", ' ', $result['message']);

//    header('Location: ../../public/'.$work03.'&code='.$result['code'].'&msg='.$msg);
echo $dataJSON;
echo '<br>';
echo '<br>';
echo '<br>';
echo json_encode($result);
    ob_end_flush();
?>