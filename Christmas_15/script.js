function showText() {
  var replaced = document.getElementById("text");
  var count = document.getElementById("count");

  // let christmasResult = replaceChristmas(
  //   'Christmas is coming, Christmas is coming! christmas','🎅'
  // );

  let christmasResult = replaceChristmas(
    'Christmas is coming, Christmas is coming! christmas'
  );

  replaced.innerHTML = christmasResult.replaced;
  count.innerHTML = christmasResult.count;
}

function replaceChristmas(text, emoji) {
  var replaceTo = '🎄';

  if (emoji !== undefined) {
    replaceTo = emoji;
  }

  var count = (text.match(/Christmas/gi) || []).length;
  var replaced = text.replace(/Christmas/gi, replaceTo);

  return {
    'replaced': replaced,
    'count': count
  };
}