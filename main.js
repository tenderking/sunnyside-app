import './style.css'
const button = document.querySelector('.icon');

button.addEventListener('click', event => {
  myFunction()
});



    function myFunction() {
     var x = document.getElementById("myTopnav");
        console.log('u have clicked me')
        if (x.className === "navUl") {
          x.className += " responsive";
        } else {
          x.className = "navUl";
        }
      }
     