const username = document.querySelector('.username')
const email = document.querySelector('.email')
const password1 = document.querySelector('.password1')
const password2 = document.querySelector('.password2')
const submit = document.querySelector('.submit')



// MESSAGES
const usernameMessage = document.querySelector('.user-msg')
const emailMessage = document.querySelector('.email-msg')
const password1Message = document.querySelector('.password1-msg')
const password2Message = document.querySelector('.password2-msg')

submit.addEventListener('click', e => {
    e.preventDefault();


    if (username.value === '' && 
    email.value ==='' && 
    password1.value === '' && 
    password2.value === ''
    ){
        alert('Please fill all input fields');
    }

    testField(username, usernameMessage, "Great Name", "Please Provide Your Name")

    testField(email, emailMessage, "Nice Email", "Please Provide Your Email")

    testField(password1, password1Message, "Valid Password", "Please Provide A Password")

    if(password2.value === ''){
        showMessage(password2Message, "Confirm Your Passowrd", "red");
    } else if (password1.value !== password2.value) {
        showMessage(password2Message, "Password does not match", "red");
    } else {
        showMessage(password2Message, "Password Confirmed", "green");
    }

});

function showMessage(element, msg, color) {
    element.style.visibility = "visible"
    element.textContent = msg;
    element.style.color = color;
    element.previousElementSibling.style.border = `2px solid ${color}`;
}

function testField(element, msg, success, fail){
    if (element.value === '') {
        showMessage(msg, fail, "red");
    } else {
        showMessage(msg, success, "green");
    }
}