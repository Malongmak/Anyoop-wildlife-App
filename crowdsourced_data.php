<?php
$servername = "your_database_host";
$username = "your_database_username";
$password = "your_database_password";
$dbname = "wildlife_data";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the database
$result = $conn->query("SELECT * FROM crowdsourced_data");
$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Close the connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Standardized Crowdsourced Data Hub</title>
    <style>
        /* Add your styles for responsiveness */
    </style>
</head>
<body>

<!-- Standardized Crowdsourced Data Hub Section -->
<div id="crowdsourcedDataHub">
    <h2>Standardized Crowdsourced Data Hub</h2>
    <p>This section displays information about poaching threats and strategies.</p>
    <img src="./images/crowdataHub.jpg.jpeg" alt="Poaching illustration">

    <!-- Table for displaying data -->
    <table id="dataTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Location</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($data as $row): ?>
                <tr>
                    <td><?php echo $row['id']; ?></td>
                    <td><?php echo $row['location']; ?></td>
                    <td><?php echo $row['description']; ?></td>
                    <td>
                        <button onclick="editData(<?php echo $row['id']; ?>)">Edit</button>
                        <button onclick="deleteData(<?php echo $row['id']; ?>)">Delete</button>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <!-- Button to trigger adding new data -->
    <button onclick="addData()">Add Data</button>

    <script src="script.js"></script>
</div>

</body>
</html>
