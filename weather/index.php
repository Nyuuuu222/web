<html>
 <body>

 </body>
<?php
  $json_string = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139';
  $jsondata = file_get_contents($json_string);
  $obj = json_decode($jsondata, true);
?>
<i class="owf owf-<?php echo $obj['weather'][0]['id'];?>"></i>

<?php
  $json_string = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139';
  $jsondata = file_get_contents($json_string);
  $obj = json_decode($jsondata, true);
  
  $now = date('U'); //get current time
  
  if($now > $obj['sys']['sunrise'] and $now < $obj['sys']['sunset']){
	$suffix = '-d';
  }else{
	$suffix = '-n';
  }
  
?>
<i class="owf owf-<?php echo $obj['weather'][0]['id'].$suffix;?>"></i>
</html>