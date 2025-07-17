const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');
let counter = 0;

function updateText() {
  likeButton.innerText = `Like(${counter})`;
}

likeButton.addEventListener('click', function () {
  counter++;
  updateText();
});

dislikeButton.addEventListener('click', function () {
  if (counter > 0) {
    counter--;
    updateText();
  }
});


