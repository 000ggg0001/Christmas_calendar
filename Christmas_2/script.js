"use strict";

function getData() {
  let n = Number(document.querySelector(`#year`).value);
  let a = String(document.querySelector(`#good`).value);
  
  let result = document.querySelector(`#list`);
  if (n >= 18) {
    result.innerHTML = `<h1>Congratulations! You are on Santa’s Nice 👼 list!</h1>`;
  } else {
    if (a === `yes`) {
      result.innerHTML = `<h1>Congratulations! You are on Santa’s Nice 👼 list!</h1>`; // console.log("Congratulations! You are on Santa’s Nice 👼 list!");
    } else {
      result.innerHTML = `<h1>Aww.. You are on Santa’s “Naughty” 😜 list! Keep up next year if don't wanna get a pile of coals.</h1>`;
    }
  }
}

document.querySelector("#give").addEventListener(`click`, (e) => {
  e.preventDefault();
  getData();
});
