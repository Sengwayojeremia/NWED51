const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');

// Select Error Display Elements (Missing in your original)
const errorElement = document.getElementById('error');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

 (Missing in your original)
const namePattern = /^[A-Za-z\s]+$/; 

form.addEventListener('submit', (e) => {
    let messages = [];
    
    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Name Validation
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
        nameError.textContent = 'Name is required';
    } else if (!namePattern.test(name.value)) {
        messages.push('Name must only contain letters');
        nameError.textContent = 'Name must only contain letters';
    }

    // Email Validation
    if (email.value === '' || email.value == null) {
        messages.push('Email is required');
        emailError.textContent = 'Email is required';
    } else if (email.value.indexOf('@') === -1) {
        messages.push('Email must be valid');
        emailError.textContent = 'Email must be valid';
    }

    // Message Validation
    if (message.value === '' || message.value == null) {
        messages.push('Message is required');
        messageError.textContent = 'Message is required';
    }

    // Block Submission if errors exist
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});

    