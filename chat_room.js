const firebaseConfig = {
    apiKey: "AIzaSyDw_-905SsBV3KPuOOQV__-6ePyol5Olpw",
    authDomain: "kwitter-44973.firebaseapp.com",
    databaseURL: "https://kwitter-44973-default-rtdb.firebaseio.com",
    projectId: "kwitter-44973",
    storageBucket: "kwitter-44973.appspot.com",
    messagingSenderId: "456899816885",
    appId: "1:456899816885:web:e408c34e91c9a59c3c7dfd"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItems("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });
});
}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}