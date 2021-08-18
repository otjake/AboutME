<?php
$connection=new mysqli('localhost','root',"",'portfolio');
if($connection){
    echo "";
}else{
    echo "error".mysqli_connect_error();
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if(isset($_POST["customer_code"])){
    $nameErr="";
        $name=test_input($_POST['name']);
        if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
            $nameErr = "Only letters and white space allowed";
        }
        $email=test_input($_POST['email']);
    if($nameErr=="") {
        $insertSql = "INSERT INTO contact (name,email) VALUES ('{$name}','{$email}')";
        $insertexc = mysqli_query($connection, $insertSql);
        die(json_encode(array('name' => $name, 'email' => $email)));
    }else{
        die(json_encode(array('error'=>"name space accepts letters and space only")));

    }
}

?>