var cookieCounter = 0;

function cookiEat() {
  var counter = document.getElementById('counter');
  cookieCounter++;
  counter.innerHTML = cookieCounter;
}
function resetCookie() {
  var counter = document.getElementById('counter');
  cookieCounter = 0;
  counter.innerHTML = cookieCounter;

}