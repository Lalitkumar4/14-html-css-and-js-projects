const input = document.querySelector('input.field__input');
const counter = document.querySelector('span.field__counter');

const maxLength = input.getAttribute('maxlength');

counter.innerText = maxLength;

input.addEventListener('input', (e) => {
    const valueLenght = e.target.value.length;
    const charLeftLenght = maxLength - valueLenght;

    if(charLeftLenght < 0) return;

    counter.innerText = charLeftLenght;
});