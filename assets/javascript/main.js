// Initialize Firebase
// var config = import("./keys")

var config = {
  apiKey: "AIzaSyAaOe55IuuTeGDqeNc8CWB9ZY95GqJLrno",
  authDomain: "new-portfolio-6b0f8.firebaseapp.com",
  databaseURL: "https://new-portfolio-6b0f8.firebaseio.com",
  projectId: "new-portfolio-6b0f8",
  storageBucket: "new-portfolio-6b0f8.appspot.com",
  messagingSenderId: "620191851620",
  appId: "1:620191851620:web:e570d8ebd71e0aa151eb71"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("submit",
submitForm);

//  Submit form
function submitForm(e){
e.preventDefault();

// Get value
var name = getInputVal("name");
var message = getInputVal("message");

// Save message
saveMessage(name, message);

// show alert
document.querySelector(".alert").style.display = "block" ;

// hide alert after three seconds
setTimeout(function(){
  document.querySelector(".alert").style.display = "none" ;
},3000);

}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
name: name,
message: message
});
}

