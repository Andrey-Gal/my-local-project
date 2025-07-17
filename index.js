const buttonNode = document.getElementById('button');
let counter = 0;

counter = counter + 1;
buttonNode.innerText = counter;

buttonNode.addEventListener('click', () => {
    alert('hello');
});
