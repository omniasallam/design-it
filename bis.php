<?php
$username=$_REQUEST['e-mail'];
$password=$_REQUEST['password'];

if(isset($_POST['sub']))
{
    $host="localhost";
    $user="root";
    $password="";
    $db="menna";

    $conn= mysqli_connect($host,$user,$password,$db);
    
    $insert="insert into customer values('$username','$password')";

    mysqli_query($conn,$insert);
    if($conn){
        echo("<h1 style='color:green;'>Your Registration is Done!</h1>");
    }
    else{
        echo("<h1 style='color:red;'>Your Registration is Failed!</h1>");

    }



}




?>