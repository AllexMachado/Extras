const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 5;

document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (attempts > maxAttempts) {
        document.getElementById('result').innerText = `Você perdeu! O número era ${secretNumber}.`;
        return;
    }

    if (guess === secretNumber) {
        document.getElementById('result').innerText = `Parabéns! Você acertou o número ${secretNumber} em ${attempts} tentativas.`;
    } else if (guess < secretNumber) {
        document.getElementById('result').innerText = `Tente novamente! O número é maior que ${guess}. Tentativas restantes: ${maxAttempts - attempts}.`;
    } else {
        document.getElementById('result').innerText = `Tente novamente! O número é menor que ${guess}. Tentativas restantes: ${maxAttempts - attempts}.`;
    }
});