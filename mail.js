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
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");

  saveMessages(name);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
