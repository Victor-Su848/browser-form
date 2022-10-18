const email = document.getElementById('email');
const emailSpan = document.querySelector('#email + span');

const zipCode = document.getElementById('zip-code');
const zipCodeSpan = document.querySelector('#zip-code + span');
const password = document.getElementById('password');
const passwordSpan = document.querySelector('#password + span');
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordSpan = document.querySelector('#confirm-password + span');

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
    console.log(zipCode.validity.valid);
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
//Password validation event listerer
password.addEventListener('input', () => {
    console.log("Password input!");
    passwordSpan.textContent = "";
    console.log(password.validity.valid);
    if (!password.validity.valid) {
        const value = password.value.toString();
        console.log(value);
        if (value.length < 8) {
            passwordSpan.textContent = "Password must be atleast 8 characters long!";
        } else {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            if (!specialChars.test(value)) { // check for special characters
                passwordSpan.textContent = "Password needs atleast one special character!";
            } else if (!/[0-9]/.test(value)){ // check for number
                passwordSpan.textContent = "Password needs atleast one number!";
            } else {
                passwordSpan.textContent = "Password needs atleast one letter!";
            }
        }
    }
});
//Confirm password validation event listerer
confirmPassword.addEventListener('input', () => {
    confirmPassword.setCustomValidity("");
    confirmPasswordSpan.textContent = "";
    const password1Value = password.value.toString();
    const password2Value = confirmPassword.value.toString();
    console.log(`password is ${password1Value}`);
    console.log(`confirm password is ${password2Value}`);
    if (!confirmPassword.validity.valid) {
        confirmPasswordSpan.textContent = "Password must be atleast 8 characters long!"
    } else if (password1Value !== password2Value) {
        confirmPassword.setCustomValidity("Passwords must match!");
        confirmPasswordSpan.textContent = "Passwords must match!";
    }
});

