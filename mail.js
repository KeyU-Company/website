const firebaseConfig = {
  apiKey: "AIzaSyANOx_iyd63uIqV5Xj0mjJVIT0-I0UMjH8",
  authDomain: "keyupedia-3ae78.firebaseapp.com",
  databaseURL: "https://keyupedia-3ae78-default-rtdb.firebaseio.com",
  projectId: "keyupedia-3ae78",
  storageBucket: "keyupedia-3ae78.appspot.com",
  messagingSenderId: "704351033096",
  appId: "1:704351033096:web:033db5ebb08b84494d3ebd",
  measurementId: "G-7YFFXXDEV5"
};

  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var KeyupediaDB = firebase.database().ref("Keyupedia");
  
  document.getElementById("Keyupedia").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var fullName = getElementVal("name");
    var city = getElementVal("city");
    var organization = getElementVal("org");
    var jobTitle = getElementVal("job");
    var training = getElementVal("training");
    var daysAvailable = getElementVal("days");
    var language = getElementVal("language");
    var phoneNumber = getElementVal("phone");
    var email = getElementVal("mail");
    var message = getElementVal("message");
  
    saveMessages(fullName, city, organization, jobTitle, training, daysAvailable, language, phoneNumber, email, message);
  
    // Enable alert
    document.querySelector(".alert").style.display = "block";
  
    // Remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // Reset the form
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
  