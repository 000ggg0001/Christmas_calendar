"use strict";

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateName(){
    var first_name = ["wonderful","blisful","shiny","naughty","cute"];
    
    var last_name = ["Rudolph","Dancer","Comet","Blitzen", "Cupid"];

    var name = capFirst(first_name[getRandomInt(0, first_name.length + 1)]) + ' ' + capFirst(last_name[getRandomInt(0, last_name.length + 1)]);
      document.getElementById("random_name").innerHTML = name;

      
  }

  const last_name = [" Rudolph"," Dancer"," Comet"," Blitzen", " Cupid"];
document.getElementById("demo").innerHTML = last_name;  

function myFunction1() {
  last_name.sort();
  document.getElementById("demo").innerHTML = last_name;
}