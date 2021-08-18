<?php
$pdo = new PDO( $dsn = "mysql:host=localhost;dbname=host1825783;charset=utf8mb4",'host1825783', 'ncKb82EDpe');
if(isset( $_POST['Параметр'])){
$int = $_POST['Параметр'];
}
if(isset( $_POST['vvod_name'])){
$int = $_POST['vvod_name'];
}

switch($int){

    case 'vvod_name':
        $stmt = $pdo->prepare( "INSERT INTO `Lines_Grypps`(`name`) VALUE (?)");
        $stmt->execute([$_POST['name']]);
        
        $stmt = $pdo->prepare( "SELECT `id`,`name` FROM `Lines_Grypps` ORDER BY ID DESC LIMIT 1");
        $stmt->execute(  );
        $array = $stmt->fetchAll();
        $param = [];
            array_push($param, $array[0]['id']);
            array_push($param, $array[0]['name']);
        echo json_encode($param, JSON_UNESCAPED_UNICODE);
        break;
    
    
    default:
      $stmt = $pdo->prepare( "SELECT `name` FROM `Lines_Grypps`");
      $stmt->execute(  );
      $array = $stmt->fetchAll();
      $param = [];
      for($i = 0;$i<count($array);$i++){
            array_push($param, $array[$i]['name']);
      }
      echo json_encode( $param, JSON_UNESCAPED_UNICODE);
}