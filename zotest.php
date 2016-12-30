<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>php file_put_contents() function - how to append a string to a file in php</title>
</head>

<body>
    <h2 style="color:Crimson; font-style:italic">php file_put_contents() function example:<br /> how to append a string to a file</h2>
    <hr width="375" align="left" color="Orange" />
    <br />

<?php

 $file = "https://ziboard.github.io/zozo/zo123.txt";
 echo  file_put_contents($file," hello! ",FILE_APPEND);
 
?>
</body>
</html>
