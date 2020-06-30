<?php
    require '../class/function/function.php';

    //get location of image
    $img01 = get_image_location("ima01.jpg");


    //latitude & longitude
    echo 'latitude => '.$img01['latitude'];
    echo 'longitude =>'.$img01['longitude'];
    echo "<br>";
    echo "<br>";

?>