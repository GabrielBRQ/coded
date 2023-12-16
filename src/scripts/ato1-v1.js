import '../css/ato1-v1.css';

document.addEventListener('DOMContentLoaded', function () {
  const startChapter = document.querySelector('.start');

  startChapter.addEventListener('click', function () {
    startChapter.disabled = true;
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function() {
        history.pushState(null, null, document.URL);
    });
    var chapter = document.querySelector('.chapter');
    chapter.style.opacity = 0;

    setTimeout(() => {
      chapter.style.display = 'none';
      const container = document.querySelector('.container');
      container.style.display = 'flex';
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.height = "110vh";
      setTimeout(() => {
        container.style.opacity = 1;
      }, 500);
      setTimeout(() => {
        const dialogue = document.querySelector('.dialogue');
        dialogue.style.display = 'flex';
        setTimeout(() => {
          dialogue.style.display = 'none';
        }, 3000);
      }, 5500);
    }, 3000);
  });

  var buttons = document.querySelectorAll('.search-buttons button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const dialogue = document.querySelector('.dialogue');
      dialogue.textContent = 'Não funciona...';
      dialogue.style.display = 'flex';
      setTimeout(() => {
        dialogue.style.display = 'none';
      }, 2000);
    });
  });

  var newsDiv = document.querySelector('.news');

  newsDiv.addEventListener('click', function() {
    window.location.href = './joyJournal.html';
  });

});

