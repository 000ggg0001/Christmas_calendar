
function changeImage(id) {
  var image1 = document.getElementById(id);
  if (image1.src.match("100")) {
    image1.src = "icons8-candle-80.png";
  } else {
    image1.src = "candle-100.png";
  }
}
