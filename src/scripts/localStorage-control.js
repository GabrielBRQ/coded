function saveStatsLocal(jumpscare, chapter1, years) {
    const stats = { jumpscare, chapter1, years };

    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
    gameStats.push(stats);
    localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function verifyNewUser() {
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
    if (gameStats.length < 1) {
        saveStatsLocal(false, false, [2014]);
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

function addYear(newYear) {
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
    gameStats[gameStats.length - 1].years.push(newYear);

    localStorage.setItem('gameStats', JSON.stringify(gameStats));
}


export {
    verifyNewUser, changeJumpscare, changeChapter1, checkJumpscare, checkChapter1, createYears, addYear
}