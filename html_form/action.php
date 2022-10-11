<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actionpage</title>
    <style>
        td {
            border: solid 1px black;
            padding: 3px;
        }
        table {
            border: solid 1px black;
            border-collapse: collapse;
            margin-bottom: 1em;
        }
    </style>
</head>
<body>
<table>
    <th>Contact info</th>
    <tr><td><?php echo $_POST["fname"]; ?></td><td>Preferred contant method:</td></tr> 
    <tr><td><?php echo $_POST["lname"]; ?></td></tr>
    <tr><td><?php echo $_POST["email"]; ?></td> <td><?php if(isset($_POST['preferredEmail'])) {echo "Yes";} else {echo "No";} ?></td></tr>
    <tr><td><?php echo $_POST["phonenumber"]; ?></td> <td><?php if(isset($_POST['preferredPhone'])) {echo "Yes";} else {echo "No";}?></td></tr>
</table>
<table>
    <th>Message</th>
    <tr><td><?php echo $_POST["messagesubject"]; ?></td></tr>
    <tr><td><?php echo $_POST["message"]; ?></td></tr>
</table>
</body>
</html>