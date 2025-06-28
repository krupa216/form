const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    if (!validateForm()) {
        e.preventDefault(); 
    } else {
        alert("Registration Successful!");
    }
});

function validateForm() {
    let valid = true;

    if (username.value.trim() === '') {
        showError(username, "Username is required");
        valid = false;
    } else {
        showSuccess(username);
    }

    if (email.value.trim() === '') {
        showError(email, "Email is required");
        valid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "Enter a valid email");
        valid = false;
    } else {
        showSuccess(email);
    }

    if (password.value.trim() === '') {
        showError(password, "Password is required");
        valid = false;
    } else if (password.value.trim().length < 8) {
        showError(password, "Password must be at least 8 characters");
        valid = false;
    } else {
        showSuccess(password);
    }

    if (cpassword.value.trim() === '') {
        showError(cpassword, "Confirm Password is required");
        valid = false;
    } else if (cpassword.value.trim() !== password.value.trim()) {
        showError(cpassword, "Passwords do not match");
        valid = false;
    } else {
        showSuccess(cpassword);
    }

    return valid;
}

function showError(input, message) {
    const group = input.parentElement;
    const error = group.querySelector('.error');
    error.innerText = message;
    group.classList.add('error');
    group.classList.remove('success');
}

function showSuccess(input) {
    const group = input.parentElement;
    const error = group.querySelector('.error');
    error.innerText = '';
    group.classList.remove('error');
    group.classList.add('success');
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
