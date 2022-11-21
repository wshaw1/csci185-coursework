// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;
let guessCount = 0;

function check() {
    guessCount += 1;
    if (guessCount === 1) {
        document.querySelector('#num-guesses').innerHTML = 'you have made ' + guessCount + ' guess';
    } else {
        document.querySelector('#num-guesses').innerHTML = 'you have made ' + guessCount + ' guesses';
    }
    let guess = Number(document.querySelector('#guess').value);
    if (guess > secret) {
        document.querySelector('#message').innerHTML = 'lower';
        document.querySelector('#celebrate').className = 'hide';
    } else if (guess < secret) {
        document.querySelector('#message').innerHTML = 'higher';
        document.querySelector('#celebrate').className = 'hide';
    } else {
        document.querySelector('#message').innerHTML = 'you win';
        if (guessCount === 1) {
            document.querySelector('#num-guesses').innerHTML = 'you took ' + guessCount + ' guess';
        } else {
            document.querySelector('#num-guesses').innerHTML = 'you took ' + guessCount + ' guesses';
        }
        document.querySelector('#celebrate').className = '';
    }
}               