// document.getElementById("count-el").innerText = 5

// let firstBatch = 5;
// let secondBatch = 7;

// let count = 5;

// console.log(count)

let saveEl = document.getElementById("save-el");

let countEl = document.getElementById("count-el");

let allPeopleEl = document.getElementById("all-people");

let count = 0;
let allPeople = 0;

allPeopleEl.textContent = "All people: " + allPeople;


function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  allPeople += count;
  allPeopleEl.textContent = "All people: " + allPeople;
  count = 0;
  countEl.textContent = 0;
}