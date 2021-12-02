// Add function to Dark mode.
let darkMode = document.querySelector("#darkMode");

darkMode.addEventListener("click", () => {
  if (darkMode.checked) {
    document.body.style.backgroundColor = "#2e2e2e";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

// Score system
let resultBtn = document.querySelector("#getResult");
let score = 0;
let AllSeven = document.querySelector("#questionSeven");
let correctOptionOne = document.querySelector("#correctOption1");
let correctOptionTwo = document.querySelector("#correctOption2");
let wrongOptionOne = document.querySelector("#wrongOption1");
let wrongOptionTwo = document.querySelector("#wrongOption2");

let checkScore = (name) => {
  var value = document.querySelector(`input[name=${name}]:checked`).value;
  if (value === "correct") {
    score++;
  }
  document.querySelector(`input[name=${name}]:checked`).checked = false;
};

let clearCheckbox = (name) => {
    document.querySelector(`input[id=${name}]:checked`).checked = false;
}

let checkButtons = resultBtn.addEventListener("click", () => {
  score = 0;
  checkScore("questionOne");
  checkScore("questionTwo");
  checkScore("questionThree");
  checkScore("questionFour");
  checkScore("questionFive");
  checkScore("questionSix");
  if (
    correctOptionOne.checked &&
    correctOptionTwo.checked & !wrongOptionOne.checked & !wrongOptionTwo.checked
  ) {
    score++;
  }
  console.log(score);
  // Result in DOM
    let result = document.querySelector("#result")
    if (score === 7) {
        result.textContent = (`${score}/7! Grattis du fick alla rätt, Bra jobbat!`);
        result.style.color = "green";
    } else if (score < 4) {
        result.textContent = (`${score}/7! Bra kämpat men bättre lycka nästa gång! :)`);
        result.style.color = "red";
    } else {
        result.textContent = (`${score}/7! Snyggt jobbat! Nästa gång får du nog alla rätt! :)`);
        result.style.color = "orange";
    }
});


