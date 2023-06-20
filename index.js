let meter = 3.281;
let liter = 0.264;
let kilogram = 2.204;

const convertBtn = document.querySelector('button');
const inputEl = document.querySelector('input');
let textElOne = document.getElementById('textElOne');
let textElTwo = document.getElementById('textElTwo');
let textElThree = document.getElementById('textElThree');

convertBtn.addEventListener('click', () => {
    let baseInput = inputEl.value;
    textElOne.textContent = `${baseInput} meters = ${baseInput * meter} feet | ${baseInput} feet = ${baseInput / meter} meters`;
    textElTwo.textContent = `${baseInput} meters = ${baseInput * meter} feet | ${baseInput} feet = ${baseInput / meter} meters`;
    textElThree.textContent = `${baseInput} meters = ${baseInput * meter} feet | ${baseInput} feet = ${baseInput / meter} meters`;
    
})