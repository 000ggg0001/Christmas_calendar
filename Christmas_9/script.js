// "use strict";

// function capFirst(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   function getRandomInt(min, max) {
//       return Math.floor(Math.random() * (max - min)) + min;
//   }

//   function generateName(){
//     var first_name = ["wonderful","blisful","shiny","naughty","cute"];
    
//     var last_name = ["Rudolph","Dancer","Comet","Blitzen", "Cupid"];

//     var name = capFirst(first_name[getRandomInt(0, first_name.length + 1)]) + ' ' + capFirst(last_name[getRandomInt(0, last_name.length + 1)]);
//       document.getElementById("random_name").innerHTML = name;

      
//   }

  const last_name = ["Tokyo"," New York"," Paris"," London"];
document.getElementById("demo").innerHTML = last_name;  

function myFunction1() {
  last_name.sort();
  document.getElementById("demo").innerHTML = last_name;
}

var array = ["NewYork", "London" , "Paris", "Tokyo"];

array.sort(function(a, b){return b.length - a.length});
document.getElementsByClassName(JSON.stringify(array, null, '\t')).innerHTML=array;

console.log(JSON.stringify(array, null, '\t'));

