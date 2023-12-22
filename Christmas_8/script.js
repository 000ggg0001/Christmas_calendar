function shuffle(array) {
  let currentIndex = array.length,  randomIndex;


  while (currentIndex > 0) {


    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;


    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function generateName(){
  var persons = ["Jingle","Merry","Twinkle","Frosty"];

  var presents = ["Red and Green Striped Socks","Snowflake and Holly Print Socks","Candy Cane Inspired Socks","Christmas Tree Patterned Socks"];

  const randomPresents = shuffle(presents);

  var response = document.getElementById("random_name");
  response.innerHTML = '';

  for (i = 0; i < persons.length; i++) {
    var something = document.createElement("div");
    something.textContent = persons[i] + ': ' + randomPresents[i];
    response.appendChild(something);

  }
}

