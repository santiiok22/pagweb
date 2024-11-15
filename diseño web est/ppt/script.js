function playGame(playerChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result = '';
    if (playerChoice === computerChoice) {
      result = `Empate. Ambos eligieron ${playerChoice}.`;
    } else if (
      (playerChoice === 'piedra' && computerChoice === 'tijera') ||
      (playerChoice === 'papel' && computerChoice === 'piedra') ||
      (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
      result = `¡Ganaste! Tú elegiste ${playerChoice} y la computadora eligió ${computerChoice}.`;
    } else {
      result = `Perdiste. Tú elegiste ${playerChoice} y la computadora eligió ${computerChoice}.`;
    }
  
    document.getElementById('result').textContent = result;
  }