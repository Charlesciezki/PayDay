"use strict";
function myFunction() {
    var person = prompt("Please enter your name", "Darth Raider?");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
};
console.log("I'm 23 years old");
alert("I'm from WI");