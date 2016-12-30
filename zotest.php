
<?php
$filename = 'files/test.txt';
$str = 'Free PHP course and tutorials.'. PHP_EOL. 'Web site: http://coursesweb.net';

// creates the 'text.txt' file in the 'files' folder
if (file_put_contents($filename, $str)) echo 'The file was created';
else echo 'The test.txt file can not be created';
?>
