<?php
    function getUUID(){
        $data = random_bytes(16);
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40); 
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80); 
        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }

    function getFechaHora($var01){
        $result = '';
        
        switch ($var01) {
            case '1':
                $result = date("YmdHis");
                break;
            
            case '2':
                $result = date("YmdHisv");
                break;

            case '3':
                $result = date("YmdHis");
                break;
        }
        
        return $result;
    }

    function gps2Num($coordPart){
        $parts = explode('/', $coordPart);
        if(count($parts) <= 0) return 0;
        if(count($parts) == 1) return $parts[0];
        return floatval($parts[0]) / floatval($parts[1]);
    }

    function get_image_location($image = '') {
        $exif = exif_read_data($image, 0, true);
        
        if($exif && isset($exif['GPS'])) {
            $GPSLatitudeRef = $exif['GPS']['GPSLatitudeRef'];
            $GPSLatitude    = $exif['GPS']['GPSLatitude'];
            $GPSLongitudeRef= $exif['GPS']['GPSLongitudeRef'];
            $GPSLongitude   = $exif['GPS']['GPSLongitude'];
            
            $lat_degrees    = count($GPSLatitude) > 0 ? gps2Num($GPSLatitude[0]) : 0;
            $lat_minutes    = count($GPSLatitude) > 1 ? gps2Num($GPSLatitude[1]) : 0;
            $lat_seconds    = count($GPSLatitude) > 2 ? gps2Num($GPSLatitude[2]) : 0;
            
            $lon_degrees    = count($GPSLongitude) > 0 ? gps2Num($GPSLongitude[0]) : 0;
            $lon_minutes    = count($GPSLongitude) > 1 ? gps2Num($GPSLongitude[1]) : 0;
            $lon_seconds    = count($GPSLongitude) > 2 ? gps2Num($GPSLongitude[2]) : 0;
            
            $lat_direction  = ($GPSLatitudeRef == 'W' or $GPSLatitudeRef == 'S') ? -1 : 1;
            $lon_direction  = ($GPSLongitudeRef == 'W' or $GPSLongitudeRef == 'S') ? -1 : 1;
            
            $latitude       = $lat_direction * ($lat_degrees + ($lat_minutes / 60) + ($lat_seconds / (60*60)));
            $longitude      = $lon_direction * ($lon_degrees + ($lon_minutes / 60) + ($lon_seconds / (60*60)));
    
            return array('latitude'=>$latitude, 'longitude'=>$longitude);
        }else{
            return false;
        }
    }

    function getTitleDominio($var01){
        $result = '';

        switch ($var01) {
            //ACTIVIDAD
            case 'ACTIVIDADESTADO':
                $result = 'ACTIVIDAD TIPO ESTADO';
                break;
            
            case 'ACTIVIDADTIPO':
                $result = 'ACTIVIDAD TIPO';
                break;

            case 'ACTIVIDADTAREA':
                $result = 'ACTIVIDAD TIPO TAREA';
                break;

            //SERVICIO
            case 'SERVICIOTIPO':
                $result = 'SERVICIO TIPO';
                break;

            //MOVIMIENTO
            case 'MOVIMIENTODONACION':
                $result = 'MOVIMIENTO DONACIÓN';
                break;

            case 'MOVIMIENTOFAENA':
                $result = 'MOVIMIENTO FAENA';
                break;

            case 'MOVIMIENTOTIPO':
                $result = 'MOVIMIENTO TIPO';
                break;

            case 'MOVIMIENTOMORTANDAD':
                $result = 'MORTANDAD TIPO';
                break;

            case 'DISTRITOZONA':
                $result = 'DISTRITO TIPO ZONA';
                break;

            case 'DISTRITORIESGO':
                $result = 'DISTRITO TIPO RIESGO';
                break;

            case 'ESTABLECIMIENTOESTADO':
                $result = 'ESTABLECIMIENTO TIPO ESTADO';
                break;

            case 'ESTABLECIMIENTOTIPO':
                $result = 'ESTABLECIMIENTO TIPO';
                break;

            case 'ESTABLECIMIENTOFINALIDAD':
                $result = 'ESTABLECIMIENTO TIPO FINALIDAD';
                break;

            case 'ESTABLECIMIENTOCARGO':
                $result = 'ESTABLECIMIENTO TIPO CARGO';
                break;

            case 'ESTABLECIMIENTOPASTURA':
                $result = 'ESTABLECIMIENTO TIPO PASTURA';
                break;
            
            case 'ANIMALESTADO':
                $result = 'ANIMAL TIPO ESTADO';
                break;

            case 'ANIMALDONACION':
                $result = 'ANIMAL TIPO DONACIÓN';
                break;

            case 'ANIMALGRADOSANGRE':
                $result = 'ANIMAL GRADO SANGRE';
                break;

            case 'ANIMALHACIENDA':
                $result = 'ANIMAL TIPO HACIENDA';
                break;

            case 'ANIMALIDENTIFICACION':
                $result = 'ANIMAL TIPO IDENTIFICACION';
                break;
                
            case 'ANIMALORIGEN':
                $result = 'ANIMAL TIPO ORIGEN';
                break;

            case 'ANIMALPELAJE':
                $result = 'ANIMAL TIPO PELAJE';
                break;

            case 'ANIMALPESO':
                $result = 'ANIMAL TIPO PESO';
                break;

            case 'ANIMALRECUENTO':
                $result = 'ANIMAL TIPO RECUENTO';
                break;

            case 'ANIMALESPECIE':
                $result = 'ANIMAL TIPO ESPECIE';
                break;

            case 'ANIMALRAZA':
                $result = 'ANIMAL TIPO RAZA';
                break;

            case 'ANIMALCATEGORIA':
                $result = 'ANIMAL TIPO CATEGORÍA';
                break;

            case 'ANIMALSUBCATEGORIA':
                $result = 'ANIMAL TIPO SUB-CATEGORÍA';
                break;
            
            //ORDERTRABAJO
            case 'ORDENTRABAJOESTADO':
                $result = 'ORDEN TRABAJO TIPO ESTADO';
                break;
            
            case 'ORDENTRABAJOTIPO':
                $result = 'ORDEN TRABAJO TIPO';
                break;

            //ORDERTRABAJOANDROLOGIA
            case 'ORDENTRABAJOANDROLOGIAESTADO':
                $result = 'ORDEN TRABAJO ANDROLOGÍA TIPO ESTADO';
                break;

            case 'ORDENTRABAJOANDROLOGIAESCROTO':
                $result = 'ORDEN TRABAJO ANDROLOGÍA TIPO ESCROTO';
                break;

            case 'ORDENTRABAJOANDROLOGIACONSISTENCIA':
                $result = 'ORDEN TRABAJO ANDROLOGÍA TIPO CONSISTENCIA';
                break;

            case 'ORDENTRABAJOANDROLOGIAMOTIVO':
                $result = 'ORDEN TRABAJO ANDROLOGÍA TIPO MOTIVO';
                break;

            case 'ORDENTRABAJOANDROLOGIARESULTADO':
                $result = 'ORDEN TRABAJO ANDROLOGÍA TIPO RESULTADO';
                break;

            case 'PERSONATIPO':
                $result = 'PERSONA TIPO';
                break;

            case 'PERSONADOCUMENTO':
                $result = 'PERSONA TIPO DOCUMENTO';
                break;

            case 'DOMINIOESTADO':
                $result = 'SISTEMA TIPO ESTADO';
                break;

            case 'DOMINIOTIPO':
                $result = 'SISTEMA TIPO DOMINIO';
                break;

            case 'USUARIOESTADO':
                $result = 'USUARIO TIPO ESTADO';
                break;

            case 'USUARIOROL':
                $result = 'USUARIO TIPO ROL';
                break;

            case 'USUARIOACCESO':
                $result = 'USUARIO TIPO ACCESO';
                break;

            case 'USUARIOPROGRAMA':
                $result = 'USUARIO TIPO PROGRAMA';
                break;
        }

        return $result;
    }

    function getTitleSubDominio($var01){
        $titulo     = '';
        $titulo1    = '';
        $titulo2    = '';
        $dominio1   = '';
        $dominio2   = '';

        switch ($var01) {
            case 'ANIMALESPECIERAZA':
                $titulo     = 'ANIMAL ESPECIE / RAZA';
                $titulo1    = 'ESPECIE';
                $titulo2    = 'RAZA';
                $dominio1   = 'ANIMALESPECIE';
                $dominio2   = 'ANIMALRAZA';
                break;

            case 'ANIMALESPECIECATEGORIA':
                $titulo     = 'ANIMAL ESPECIE / CATEGORÍA';
                $titulo1    = 'ESPECIE';
                $titulo2    = 'CATEGORÍA';
                $dominio1   = 'ANIMALESPECIE';
                $dominio2   = 'ANIMALCATEGORIA';
                break;

            case 'ANIMALCATEGORIASUBCATEGORIA':
                $titulo     = 'ANIMAL CATEGORÍA / SUBCATEGORÍA';
                $titulo1    = 'CATEGORÍA';
                $titulo2    = 'SUBCATEGORÍA';
                $dominio1   = 'ANIMALCATEGORIA';
                $dominio2   = 'ANIMALSUBCATEGORIA';
                break;
            
            case 'ACTIVIDADTIPOTAREA':
                $titulo     = 'ACTIVIDAD TIPO / TAREA';
                $titulo1    = 'ACTIVIDAD';
                $titulo2    = 'TAREA';
                $dominio1   = 'ACTIVIDADTIPO';
                $dominio2   = 'ACTIVIDADTAREA';
                break;
        }

        return array($titulo, $titulo1, $titulo2, $dominio1, $dominio2);
    }

    function getTitleTriDominio($var01){
        $titulo     = '';
        $titulo1    = '';
        $titulo2    = '';
        $titulo3    = '';
        $dominio1   = '';
        $dominio2   = '';
        $dominio3   = '';

        switch ($var01) {
            case 'ANIMALESPECIECATEGORIASUBCATEGORIA':
                $titulo     = 'ANIMAL ESPECIE / CATEGORIA / SUBCATEGORIA';
                $titulo1    = 'ESPECIE';
                $titulo2    = 'CATEGORIA';
                $titulo3    = 'SUBCATEGORIA';
                $dominio1   = 'ANIMALESPECIE';
                $dominio2   = 'ANIMALCATEGORIA';
                $dominio3   = 'ANIMALSUBCATEGORIA';
                break;
        }

        return array($titulo, $titulo1, $titulo2, $titulo3, $dominio1, $dominio2, $dominio3);
    }
?>