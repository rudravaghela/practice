
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAevIa4-QDFuuIa0qOwQu1sZurer1zIzAo",
      authDomain: "kwitter-8cc73.firebaseapp.com",
      databaseURL: "https://kwitter-8cc73-default-rtdb.firebaseio.com",
      projectId: "kwitter-8cc73",
      storageBucket: "kwitter-8cc73.appspot.com",
      messagingSenderId: "646103554819",
      appId: "1:646103554819:web:34dc5bb9c7ad80bdf46736"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
