const likeButton = document.getElementById('likeBtn');
const dislikeButton = document.getElementById('dislikeBtn');
const likeCount = document.getElementById('likeCount');
const dislikeCount = document.getElementById('dislikeCount');
const celebrationSound = document.getElementById('celebrationSound');

let likeCounter = 0;
let dislikeCounter = 0;

likeButton.addEventListener('click', () => {
  likeCounter++;
  likeCount.textContent = likeCounter;

  // 🎉 Воспроизведение звука и эффект при 10 лайках
  if (likeCounter === 10) {
    celebrationSound.currentTime = 0;
    celebrationSound.play();

    likeButton.style.boxShadow = '0 0 20px gold';
    setTimeout(() => {
      likeButton.style.boxShadow = '';
    }, 500);
  }
});

dislikeButton.addEventListener('click', () => {
  if (likeCounter > 0) {
    likeCounter--;
    likeCount.textContent = likeCounter;
  }

  dislikeCounter++;
  dislikeCount.textContent = dislikeCounter;
});
