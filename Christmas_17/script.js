var gifts = [];

function emptyList() {
  output = document.getElementById("output");
  output.value = '';
  gifts = [];
}

function addGift() {
  let gift = prompt("Please enter gift name:");
  gifts.push(gift);
  showGifts();
}

function showGifts() {
  output = document.getElementById("output");
  output.value = gifts;
}
function removeGift() {
  let remove = prompt("Please write the gift you want to remove:");
  const index = gifts.indexOf(remove);
  if (index !== -1) {
    gifts.splice(index, 1);
  }
  showGifts();
}