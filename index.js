const btnEl = document.querySelector(".escape-btn");

btnEl.addEventListener("mouseenter", escapeMove);

function escapeMove(event) {
  btnEl.style.top = `${randomY()}px`;
  btnEl.style.left = `${randomX()}px`;
}

function randomX() {
  const maxWindowWidth = window.innerWidth;
  return Math.floor(Math.random() * (maxWindowWidth - btnEl.offsetWidth));
}

function randomY() {
  const maxWindowHeight = window.innerHeight;

  return Math.floor(Math.random() * (maxWindowHeight - btnEl.offsetHeight));
}
