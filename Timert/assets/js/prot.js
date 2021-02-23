var firebaseConfig = {
  apiKey: "AIzaSyAd3o5B_DQl0Gzt8Sz6borm-W1K4CbnJCo",
  authDomain: "work-hour-manager-9ddbb.firebaseapp.com",
  projectId: "work-hour-manager-9ddbb",
  storageBucket: "work-hour-manager-9ddbb.appspot.com",
  messagingSenderId: "68286602584",
  appId: "1:68286602584:web:71fe66de08a551a305192d",
  measurementId: "G-HKDF8QQM6L",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var workTime = 0;
var employeeRef = db.collection("employees").doc("0");
var timeTest = 0;
var now = 0;
var startTime = null;
var pausedTime = 0;
// A hole lotta vars
var doneWorkD = 0;
var doneWorkH = 0;
var doneWorkM = 0;
var doneWorkS = 0;
var totalTime = 0;
//  Timer running or not
var timerStatus = false;
var timerPaused = false;

// Start timer

$(".start").click(function () {
  console.log("Start");
  if (timerPaused) {
    timerPaused = false;
    timerStatus = true;
  } else {
    now = new Date();
    startTime = now;
    timerStatus = true;
  }
});

function test() {
  console.log("puts");
}

// Pause timer

$(".pause").click(function () {
  console.log("pause");
  timerStatus = false;
  timerPaused = true;
});

// Stop timer

$(".stop").click(function () {
  console.log("pause");

  timerStatus = false;
  var endDate = new Date();

  // Add to server

  db.collection("entries")
    .add({
      userId: "0",
      startDate: now,
      endDate: endDate,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  totalTime = 0;
  pausedTime = 0;
  $("#S").html("00");
  $("#M").html("00");
  $("#H").html("00");
});

//  HTML update interwal
$(function () {
  setInterval(oneSecondFunction, 1000);
});
function oneSecondFunction() {
  // stuff you want to do every second
  if (timerStatus) {
    now = new Date();
    var stopTime = now;
    totalTime = now - startTime - pausedTime;
    doneWorkD = Math.floor(totalTime / (1000 * 60 * 60 * 24));
    doneWorkH = Math.floor(
      (totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    doneWorkM = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
    doneWorkS = Math.floor((totalTime % (1000 * 60)) / 1000);
    console.log(doneWorkS);
    // display sec
    if (doneWorkS <= 9) {
      $("#S").html("0" + doneWorkS.toString());
    } else {
      $("#S").html(doneWorkS.toString());
    }
    // display min
    if (doneWorkM <= 9) {
      $("#M").html("0" + doneWorkM.toString());
    } else {
      $("#M").html(doneWorkM.toString());
    }
    // display h
    if (doneWorkH <= 9) {
      $("#H").html("0" + doneWorkH.toString());
    } else {
      $("#H").html(doneWorkH.toString());
    }
  }
  if (timerPaused) {
    pausedTime += 1000;
  }
}
