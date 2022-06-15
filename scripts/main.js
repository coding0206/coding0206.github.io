// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

var myHTML = document.querySelector('html');

// myHTML.onclick = function() {
//     alert('Ouch! Stop poking me!');
// };

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/MozillaFirefox.png') {
      myImage.setAttribute ('src','images/MozillaFirefox2.png');
    } else {
      myImage.setAttribute ('src','images/MozillaFirefox.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

// myButton.onclick = function() {
//     setUserName();
// }