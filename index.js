const likeButton = document.getElementById('likeButton');
const dislikeButton = document.getElementById('dislikeButton');

let likeCount = 0;
let dislikeCount = 0;

likeButton.addEventListener('click', () => {
  likeCount++;
  likeButton.innerText = `Like (${likeCount})`;
});

dislikeButton.addEventListener('click', () => {
  dislikeCount++;
  dislikeButton.innerText = `Dislike (${dislikeCount})`;
});

