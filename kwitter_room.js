
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDRlBq1jRSi0XrNKJe4MNqYFpRu4_Kp3cY",
      authDomain: "kwitter-d0867.firebaseapp.com",
      databaseURL: "https://kwitter-d0867-default-rtdb.firebaseio.com",
      projectId: "kwitter-d0867",
      storageBucket: "kwitter-d0867.appspot.com",
      messagingSenderId: "106291817134",
      appId: "1:106291817134:web:2838e549b090faa3e21b3f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
    function addRoom(){
          firebase.database().ref("/").child(Room_names).update({
                purpose : "Add Room Name"
          });
          localStorage.setItem("Room Name" , Room_names);
          window.location = "kwitter_page.html";
    } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names = " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
