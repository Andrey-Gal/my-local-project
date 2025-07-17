const buttonNode = document.getElementById('button');
let counter = 0;

buttonNode.addEventListener('click', () => {
    counter = counter + 1;
    buttonNode.innerText = counter;
});
