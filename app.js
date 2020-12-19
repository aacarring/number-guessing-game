const input = document.querySelector('.input input');
const guessButton = document.querySelector('.guess');
const scoreboard = document.querySelector('.score');
let score = 0;


function checkAnswer() {
    let random = Math.floor(Math.random() * 5 + 1);
    let guessedNumber = parseInt(input.value);

    if (input.value === "") return;
    console.log(random);
    if (guessedNumber === random) {
        score++;
        scoreboard.innerHTML = `Score: ${score}`;
    } else {
        alert("Hmm...try again.");
    }
    input.value = "";
}

guessButton.addEventListener('click', checkAnswer);