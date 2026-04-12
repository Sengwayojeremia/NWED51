const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];

    if(name.value === '' || name.value == null){
        messages.push('Name is required');
        nameError.textContent = 'Name is required';
    } else if (! namePattern.test(name.value)) {
        messages.push('Name must only contain letters');

    }
    
    if(email.value === '' || email.value == null){
        messages.push('Email is required');
        emailError.textContent = 'Email is required';
    }
    
    if(message.value === '' || message.value == null){
        messages.push('Message is required');
        messageError.textContent = 'Message is required';
    }
    if(email.value.indexOf('@') === -1){
        messages.push('Email must be valid');
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }

});


    