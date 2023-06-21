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
    textElOne.textContent = `${baseInput} meters = ${(baseInput * meter).toFixed(3)} feet | ${baseInput} feet = ${(baseInput / meter).toFixed(3)} meters`;
    textElTwo.textContent = `${baseInput} liters = ${(baseInput * liter).toFixed(3)} gallons | ${baseInput} gallons = ${(baseInput / liter).toFixed(3)} liters`;
    textElThree.textContent = `${baseInput} kilograms = ${(baseInput * kilogram).toFixed(3)} pounds | ${baseInput} pounds = ${(baseInput / kilogram).toFixed(3)} kilos`;
})