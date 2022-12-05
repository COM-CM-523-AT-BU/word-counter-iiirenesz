// put your globals here - hint: select elements from the HTML
const countBtn = document.querySelector("#countBtn");
const textInputCount = document.querySelector("#wordCountInput");
const findBtn = document.querySelector("#findBtn");
const findWordInput = document.querySelector("#findWordInput");
const wordFoundInput = document.querySelector("#wordFoundInput");

// dont' forget to add event listeners to teh buttons
countBtn.addEventListener("click", countWords);
findBtn.addEventListener("click", findWords);

function countWords() {
  let str = textInputCount.value;
  const words = str.split(' ');
  const count = words.length;
  printData (count, textInputCount);
}

function findWords() {
  let textInputCount = [];
  let str = document.getElementById("text-area").value;
  const words = str.split(' ');
  words.forEach( (item) => {
    if(item === findWordInput.value){
      textInputCount.push(item);
    }
  });
  printData(textInputCount.length, wordFoundInput);
}

function printData(data, destination) {
  destination.value = data;
}