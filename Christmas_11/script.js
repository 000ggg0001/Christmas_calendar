function play(id) {
  candyCane(10, ['red', 'white']);
}

function candyCane(stripes, colors){
  for(i = 0; i < stripes/colors.length; i++) {
    for(n = 0; n < colors.length; n++) {
      var candy = document.createElement("div");
      candy.style.background = colors[n];
      candy.style.width = '30px';
      candy.style.height ='60px';
      candy.style.margin = '0 auto';
      candy.style.display = 'inline-block';
      document.body.appendChild(candy);
    }
  }
}