const last_name = ["Tokyo"," New York"," Paris"," London"];

function myFunction1() {
  last_name.sort(function(a, b){return b.length > a.length});
  document.getElementById("demo").innerHTML = last_name;
}
