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

// Function to check if email is vaild
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Function to check if required fields hava data
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value === ''){
            showError(input,  `${getFieldId(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

// Function to get the id of the field
function getFieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// This is an EventListener for the form on script
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);

})