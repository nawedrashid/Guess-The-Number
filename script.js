let secretNumber = Math.trunc(Math.random() * 20) + 1;
function displayMessage(msg) {
    document.querySelector('.message').textContent = msg;
}
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    if (!guess) {
        displayMessage('Invalid Input');
    } else if (guess == secretNumber) {
        displayMessage('You Won');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    } else if (guess !== secretNumber) {
        guess > secretNumber ?
            displayMessage('Too High') :
            displayMessage('Too Low');

        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lose');
            document.querySelector('.score').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('body').style.backgroundColor = 'teal';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    displayMessage('Start playing');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});