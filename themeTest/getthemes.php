<?php
    // Themes array
    $tA = array_diff(scandir('themes/'), array('.', '..')); 
    //
    // Themes string
    $tS = implode(',', $tA);
    //
    // Formatted themes string
    $ftS = str_replace('-theme.css', '', $tS);
    echo $ftS;
?>