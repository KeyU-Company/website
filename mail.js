const firebaseConfig = {
    apiKey: "AIzaSyDlTCVnTaPb0Bbtx1FFIYDkroOV13hib7E",
    authDomain: "keyupedia-d726c.firebaseapp.com",
    databaseURL: "https://keyupedia-d726c-default-rtdb.firebaseio.com",
    projectId: "keyupedia-d726c",
    storageBucket: "keyupedia-d726c.appspot.com",
    messagingSenderId: "787956068682",
    appId: "1:787956068682:web:ff9766464cd811655b91b3",
    measurementId: "G-Z5BDWSKG2Y"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var KeyupediaDB = firebase.database().ref("Keyupedia");
  
  document.getElementById("Keyupedia").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var name = getElementVal("city");
    var name = getElementVal("org");
    var name = getElementVal("job");
    var name = getElementVal("training");
    var name = getElementVal("days");
    var name = getElementVal("language");
    var name = getElementVal("phone");
    var name = getElementVal("mail");
    var name = getElementVal("message");
  
    saveMessages(name, city, org, job, training, days, language, phone, mail, message);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("Keyupedia").reset();
  }
  
  const saveMessages = (name, city, org, job, training, days, language, phone, mail, message) => {
    var newKeyupedia = KeyupediaDB.push();
  
    newKeyupedia.set({
      name: name,
      city: city,
      org: org,
      training: training,
      days: days,
      language: language,
      phone: phone,
      mail: mail,
      message:  message,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  