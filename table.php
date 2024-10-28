<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication Table</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="container">
    <h2>Multiplication Table</h2>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $number = intval($_POST['number']); // Get the input number

        echo "<table border='1'>";
        echo "<tr><th>&times;</th>"; // Top-left corner cell

        // Print the column indexes
        for ($i = 1; $i <= $number; $i++) {
            echo "<th>$i</th>";
        }
        echo "</tr>";

        // Generate the multiplication table
        for ($i = 1; $i <= $number; $i++) {
            echo "<tr>";
            echo "<th>$i</th>"; // Row index
            for ($j = 1; $j <= $number; $j++) {
                echo "<td>" . ($i * $j) . "</td>"; // Multiplication result
            }
            echo "</tr>";
        }
        echo "</table>";
    }
    ?>
</div>

</body>
</html>
