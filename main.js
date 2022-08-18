// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACUQstqjHUe9QuHiOhjv9b1s2Or60lyMw",
  authDomain: "cogent-transit-359808.firebaseapp.com",
  projectId: "cogent-transit-359808",
  storageBucket: "cogent-transit-359808.appspot.com",
  messagingSenderId: "413922800254",
  appId: "1:413922800254:web:9d5e8673be3362ec565e2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const bodyElement = document.querySelector('body')
const menuToggle = document.querySelector('.hambuger-menu')
const logoElement = document.querySelector('.logo')


menuToggle.addEventListener("click", function(){
    bodyElement.classList.toggle('is-open');
    logoElement.classList.add('is-open');

});

//Add eventListener to the window to close nav when we click on one of it's options or outside
window.addEventListener("click", function(e){
    let clickedElement = e.target;
    if(clickedElement.matches('.is-open') || clickedElement.matches('.nav-link')){
        bodyElement.classList.remove('is-open');
        logoElement.classList.remove('is-open');

    }
});



// Get the modal
var modal = document.querySelector('.contact');

// Get the button that opens the modal
var btn1 = document.querySelector(".cta-btn");
var btn2 = document.getElementById("contact_nav");


// Get the <span> element that closes the modal
var span = document.querySelector(".close_btn");



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on the button, open the modal
function modal_function(){
    modal.style.display = "block";
    return true;
}