const buttonClicked = () => { alert('Button clicked')};
let btnAlert = document.querySelector('#mybutton');
console.log(btnAlert); // check of ik de juiste button heb gepakt
btnAlert.addEventListener('click', buttonClicked);

let bodyPage = document.querySelector('.blue-background');
console.log(bodyPage); // check of ik daadwerkelijk de body heb gepakt
const toggleColor = () => { bodyPage.classList.toggle('red-background')};
let btnColorChange = document.querySelector('#mybutton2');
console.log(btnColorChange); // check of ik de juiste button heb gepakt
btnColorChange.addEventListener('click', toggleColor);