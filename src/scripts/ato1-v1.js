import '../css/ato1-v1.css';

document.addEventListener('DOMContentLoaded', function () {
  const startChapter = document.querySelector('.start');

  startChapter.addEventListener('click', function () {
    startChapter.disabled = true;
    var chapter = document.querySelector('.chapter');
    chapter.style.opacity = 0;

    setTimeout(() => {
      chapter.style.display = 'none';
      const container = document.querySelector('.container');
      container.style.display = 'grid';
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.height = "110vh";
      setTimeout(() => {
        const dialogue = document.querySelector('.dialogue');
        dialogue.style.display = 'flex';
        setTimeout(() => {
          dialogue.style.display = 'none';
        }, 2000);
      }, 2000);
    }, 3000);
  });
});
