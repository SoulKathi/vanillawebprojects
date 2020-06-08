const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 12000;
const breatheTime = (totalTime / 12) * 5;
const holdTime = (totalTime / 12) * 1;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
