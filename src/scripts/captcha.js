let lastPressedKey = '';
let correctCount = 0;

function createCaptcha() {
  var container = document.querySelector('.container');

  // Cria a div com a classe "monkey-type".
  var monkeyTypeDiv = document.createElement('div');
  monkeyTypeDiv.classList.add('monkey-type');

  // Cria a div com a classe "monkey-title" e define o texto
  var monkeyTitleDiv = document.createElement('div');
  monkeyTitleDiv.classList.add('monkey-title');
  monkeyTitleDiv.textContent = 'CAPTCHA. PROVE SUA HUMANIDADE';

  // Cria as divs internas com as classes "letter" e "progress-bar"
  var letterDiv = document.createElement('div');
  letterDiv.classList.add('letter');

  var progressBarDiv = document.createElement('div');
  progressBarDiv.classList.add('progress-bar');

  // Adiciona as divs internas à div "monkey-type"
  monkeyTypeDiv.appendChild(monkeyTitleDiv);
  monkeyTypeDiv.appendChild(letterDiv);
  monkeyTypeDiv.appendChild(progressBarDiv);

  // Adiciona a div "monkey-type" ao container existente
  container.appendChild(monkeyTypeDiv);
}

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

function updateLetter() {
  // Adiciona o listener para eventos de teclado
  document.addEventListener('keypress', handleKeyPress);
  const letterDiv = document.querySelector('.monkey-type .letter');

  lastPressedKey = '';
  const randomLetter = generateRandomLetter();
  letterDiv.textContent = randomLetter;
  letterDiv.classList.remove('correct');
}

function handleKeyPress(event) {
  const letterDiv = document.querySelector('.monkey-type .letter');
  const progressBar = document.querySelector('.monkey-type .progress-bar');
  const monkeyType = document.querySelector('.monkey-type');

  const pressedKey = String.fromCharCode(event.keyCode);
  const currentLetter = letterDiv.textContent;

  if (
    (pressedKey.toUpperCase() === currentLetter ||
      pressedKey.toLowerCase() === currentLetter) &&
    pressedKey !== lastPressedKey
  ) {
    lastPressedKey = pressedKey;
    letterDiv.classList.add('correct');
    playRight();
    correctCount++;

    // Atualiza a largura da barra de progresso
    progressBar.style.width = correctCount * 10 + '%';

    if (correctCount === 2 || correctCount === 6) {
      var audio = document.getElementById('earthquake');
      audio.volume = 0.6;
      audio.play();
      const container = document.querySelector('.container');
      container.classList.add('little-shake');
      diminuirVolumeGradualmente(audio);
      setTimeout(() => {
        container.classList.remove('little-shake');
      }, 700);
    }

    if (correctCount === 8) {
      var audio = document.getElementById('earthquake');
      audio.volume = 0.8;
      audio.play();
      const container = document.querySelector('.container');
      container.classList.add('medium-shake');
      setTimeout(() => {
        container.classList.remove('medium-shake');
        diminuirVolumeGradualmente(audio);
        setTimeout(() => {
          container.classList.remove('medium-shake');
        }, 700);
      }, 700);
    }

    if (correctCount === 10) {
      var audio = document.getElementById('earthquake');
      audio.volume = 1;
      audio.play();
      const container = document.querySelector('.container');
      container.classList.add('big-shake');
      const eye = document.querySelector('.eye');
      eye.style.opacity = 0.25;
      monkeyType.style.display = 'none';
      setTimeout(() => {
        const dialogue = document.querySelector('.dialogue p');
        const dialogueDiv = document.querySelector('.dialogue');
        const container = document.querySelector('.container');
        container.style.opacity = 0;
        dialogue.textContent = 'Obrigado!';
        dialogueDiv.style.display = 'flex';
      }, 4000);
      setTimeout(() => {
        eye.style.height = '20vw';
      }, 9750);
    }

    setTimeout(() => {
      updateLetter();
    }, 255);
  } else if (monkeyType.style.display !== 'none') {
    letterDiv.classList.add('incorrect');
    playWrong();
    setTimeout(() => {
      letterDiv.classList.remove('incorrect');
    }, 500);
  }
}

function playWrong() {
  var audio = document.getElementById('teclaErrada');
  audio.volume = 0.7;
  audio.play();
}

function playRight() {
  const fuzzy = document.querySelector('.fuzzy-overlay');
  fuzzy.style.opacity += 0.05;
  var audio = document.getElementById('teclaCorreta');
  audio.volume = 0.2;
  audio.play();
}

function diminuirVolumeGradualmente(audio) {
  setTimeout(() => {
    audio.volume = 0.2;
  }, 600);
}

export {
  createCaptcha,
  updateLetter
};
