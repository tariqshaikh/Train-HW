// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDgkT73ir9yV054RFEfq_h5vhRqFTIDtVE",
    authDomain: "trainhw-baa9b.firebaseapp.com",
    databaseURL: "https://trainhw-baa9b.firebaseio.com",
    storageBucket: "trainhw-baa9b.appspot.com",
    messagingSenderId: "859364495930"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();


//variables
  var trainName = $("#trainName").val().trim();
  var trainDestination = $("#trainDestination").val().trim();
  var trainFrequency = $("#trainFrequency").val().trim();
  var trainTime = $("#trainTime").val().trim();

  database.ref().push({
      trainName: trainName,
      trainDestination: trainDestination,
      trainFrequency: trainFrequency,
      trainTime: trainTime,
    });

  return false;
 };

database.ref().on("child_added", function(snapshot){

  var item = snapshot.val()


  var trainName = item.trainName
  var trainDestination = item.trainDestination
  var trainFrequency = item.trainFrequency
  var trainTime = item.trainTime
  var date = moment(trainTime, "hh:mm").format("hh:mm A")
  var now = moment();

  var row = $("<tr>")
    var trainNameTd = $("<td>")
      trainNameTd.text(trainName)

    var trainDestinationTd = $("<td>")
      trainDestinationTd.text(trainDestination)

    var trainFrequencyTd = $("<td>")
      trainFrequencyTd.text(trainFrequency)

    var trainTimeTd = $("<td>")
    trainTimeTd.text(date)


  row.append(trainNameTd, trainDestinationTd, trainFrequencyTd, trainTimeTd)
  $("#trainTable").append(row);


});