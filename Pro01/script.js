const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// All function
// Function to show Error
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Functio to show Success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// This is an EventListener for the form on script
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === ''){
       showError(username, 'Username is required');
    } else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'Email is required');
     } else{
         showSuccess(email);
     }

     if(password.value === ''){
        showError(password, 'Password is required');
     } else{
         showSuccess(password);
     }

     if(password2.value === ''){
        showError(password2, 'Password2 is required');
     } else{
         showSuccess(password2);
     }

})