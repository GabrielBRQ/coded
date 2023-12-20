function saveStatsLocal(
  jumpscare,
  chapter1,
  years,
  currentYear,
  yearClue,
  backMoodleClue
) {
  const stats = {
    jumpscare,
    chapter1,
    years,
    currentYear,
    yearClue,
    backMoodleClue,
  };

  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  gameStats.push(stats);
  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function verifyNewUser() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  if (gameStats.length < 1) {
    saveStatsLocal(false, false, [2014], '2014', false, false);
  }
}

function changeJumpscare() {
  // Obtém os dados armazenados localmente com a chave 'gameStats'
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  // Verifica se há pelo menos um conjunto de estatísticas no array
  if (gameStats.length > 0) {
    gameStats[gameStats.length - 1].jumpscare = true;

    localStorage.setItem('gameStats', JSON.stringify(gameStats));
  }
}

function changeChapter1() {
  // Obtém os dados armazenados localmente com a chave 'gameStats'
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  // Verifica se há pelo menos um conjunto de estatísticas no array
  if (gameStats.length > 0) {
    gameStats[gameStats.length - 1].chapter1 = true;

    localStorage.setItem('gameStats', JSON.stringify(gameStats));
  }
}

function checkJumpscare() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  if (gameStats.length > 0) {
    if (gameStats[gameStats.length - 1].jumpscare === true) {
      return true;
    }
  }
  return false;
}

function checkChapter1() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  if (gameStats.length > 0) {
    if (gameStats[gameStats.length - 1].chapter1 === true) {
      return true;
    }
  }
  return false;
}

function createYears() {
  const timeLine = document.querySelector('.timeline');
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  let allYears = gameStats[gameStats.length - 1].years;

  if (timeLine.childElementCount === 0) {
    // Itera sobre cada ano no array allYears
    for (let i = 0; i < allYears.length; i++) {
      // Cria uma div com a classe 'year' e o texto igual ao valor no array
      const yearDiv = document.createElement('div');
      yearDiv.classList.add('year');
      yearDiv.textContent = allYears[i];

      // Adiciona a div ao elemento timeLine
      timeLine.appendChild(yearDiv);
    }
  }
}

function addYear(newYear) {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  gameStats[gameStats.length - 1].years.push(newYear);

  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function getYear() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  return gameStats[gameStats.length - 1].currentYear;
}

function changeYear(newYear) {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  gameStats[gameStats.length - 1].currentYear = newYear;
  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function changeYearClue() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  gameStats[gameStats.length - 1].yearClue = true;
  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function checkYearClue() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  if (gameStats.length > 0) {
    if (gameStats[gameStats.length - 1].yearClue === true) {
      return true;
    }
  }
  return false;
}

function changeMoodleClue() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  gameStats[gameStats.length - 1].backMoodleClue = true;
  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function checkMoodleClue() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  if (gameStats.length > 0) {
    if (gameStats[gameStats.length - 1].backMoodleClue === true) {
      return true;
    }
  }
  return false;
}

export {
  verifyNewUser,
  changeJumpscare,
  changeChapter1,
  checkJumpscare,
  checkChapter1,
  createYears,
  addYear,
  getYear,
  changeYear,
  saveStatsLocal,
  changeYearClue,
  checkYearClue,
  changeMoodleClue,
  checkMoodleClue
};
