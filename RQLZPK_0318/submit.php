<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<!DOCTYPE html>
<html lang='hu'>
<head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Submitted Data</title>
</head>
<body>";

    echo "<h1>Elküldött adatok:</h1>";
    echo "<p>Név: " . htmlspecialchars($_POST["name"]) . "</p>";
    echo "<p>Pin kód: " . htmlspecialchars($_POST["pin"]) . "</p>";
    echo "<p>Kedvenc gyümölcs: " . htmlspecialchars($_POST["fruit"]) . "</p>";
    echo "<p>Életkor: " . htmlspecialchars($_POST["age"]) . "</p>";
    echo "<p>Lábméret: " . htmlspecialchars($_POST["shoeSize"]) . "</p>";
    echo "<p>Önbizalom: " . htmlspecialchars($_POST["confidence"]) . "</p>";

    echo "</body>
</html>";
}
?>
