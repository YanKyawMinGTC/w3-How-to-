<?php

// define variables and set to empty values
$fname = $lname = $email = $ph_number = $dd =$mm =$yy =$login_name =$login_pass  ="";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fname = ($_POST["fname"]);
  $lname = ($_POST["lname"]);

  $email = ($_POST["email"]);
  $ph_number = ($_POST["ph_number"]);
  $dd = ($_POST["dd"]);
  $mm = ($_POST["mm"]);
  $yy = ($_POST["yy"]);
  $login_name = ($_POST["login_name"]);
  $login_pass = ($_POST["login_pass"]);
}

echo "<h2>Your Input:</h2>";
echo "Register firstname: $fname";
echo "<br>";
echo "Register Lastname: $lname";
echo "<br>";
echo "Register Email: $email";
echo "<br>";
echo "Register Phone number: $ph_number";
echo "<br>";
echo "Register day(dob) :$dd";
echo "<br>";
echo "Register month(dob) :$mm";
echo "<br>";
echo "Register year(dob) :$yy";
echo "<br>";
echo "Login in email: $login_name";
echo "<br>";
echo "Login in pass: $login_pass";
echo "<br>";


?>