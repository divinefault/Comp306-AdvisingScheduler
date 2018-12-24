<?php
$servername = "localhost";
$username = "ljackson1";
$password = "ithaca";
$DBname = "advisingscheduler";

// Create connection
$conn = new mysqli($servername, $username, $password, $DBname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error . "\n");
} 

$sql = "SELECT id, firstName, lastName, email, standing, major_id  FROM Student";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
//    while($row = $result->fetch_assoc()) {
//        echo "ID: " . $row["nameID"]. " - Name: " . $row["FirstName"]. " - last: " . $row["LastName"]. " email: " . $row["Email"] . "<br>\n";
//    }
//} else {
//    echo "0 results";
//}



//    while($row = $result->fetch_assoc()) {
//        echo "ID: " . $row["id"]. " - Name: " . $row["firstName"]. " - last: " . $row["lastName"]. " Email: " . $row["office_id"] . "<br>\n";
//    }


$theNames = array();
class NameClass
{
  public $ID = 0;
  public $First = "";
  public $Last = "";
  public $Email = "";
  public $Standing ="";
}


    while($row = $result->fetch_assoc()) {
	$aName = new NameClass();
        $aName->ID = $row["id"];
	$aName->First = $row["firstName"];
	$aName->Last = $row["lastName"];
	$aName->Email = $row["email"];
	$aName->Standing = $row["standing"];
	array_push($theNames, $aName);
    }

/*
echo count($theNames);
echo "\n";
echo $theNames[2]->First;
echo "\n";
*/
$myJSON = json_encode($theNames);
echo $myJSON;

} else {
    echo "0 results";
}

$conn->close();

?>
