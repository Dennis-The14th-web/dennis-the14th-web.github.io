// Initialize Firebase
// var config = import("./keys")

var config = {
    apiKey: "AIzaSyBw07HQpEJAG77e0xe_-eW2rjJIhlRo0Zo",
    authDomain: "my-portfolio-92fc8.firebaseapp.com",
    databaseURL: "https://my-portfolio-92fc8.firebaseio.com",
    projectId: "my-portfolio-92fc8",
    storageBucket: "my-portfolio-92fc8.appspot.com",
    messagingSenderId: "255672623201",
    appId: "1:255672623201:web:b21b821fa673a9ec918a20",
    measurementId: "G-ECZXRJNT05"
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

  // Clear message
  reset()
  
  // show alert
  document.querySelector(".alert").style.display = "block" ;
  
  // hide alert after three seconds
  setTimeout(function(){
    document.querySelector(".alert").style.display = "none" ;
  },4000);
  
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
  

  function reset() {
    name = document.getElementById("name").value = "";
    message = document.getElementById("message").value = "";
  };