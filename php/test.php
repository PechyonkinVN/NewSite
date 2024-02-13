<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $other = $_POST["other"];

    // Display the submitted data
    echo "Name: " . $name . "<br>";
    echo "Phone: " . $phone . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Other: " . $other . "<br>";
}
?>