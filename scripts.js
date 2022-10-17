const email = document.getElementById('email');
const emailSpan = document.querySelector('#email + span');

const zipCode = document.getElementById('zip-code');
const zipCodeSpan = document.querySelector('#zip-code + span');

//Email validation event listener
email.addEventListener('input', () => {
    email.setCustomValidity("");
    emailSpan.textContent = "";
    if (!email.validity.valid) {
        emailSpan.textContent = "Please enter a valid email address!";
    }
});

//Zip code validation event listener
zipCode.addEventListener('input', () => {
    zipCode.setCustomValidity("");
    zipCodeSpan.textContent = "";
    if (!zipCode.validity.valid) {
        const value = zipCode.value.toString();
        console.log(value);
        if (value.length < 5) { // check if too short
            zipCodeSpan.textContent = "Zip code must be 5 characters!";
        } else if (!value.match(/[0-9]{5}/)) { // check if contains non-numbers
            zipCodeSpan.textContent = "Zip code can only contain numbers!";
        }
    }
});

