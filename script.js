document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');


    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const userName = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();  

        let isValid = true;
        let messages = [];

        if (userName.length < 3) {
            isValid = false;
            messages.push('user name can not be less than 3 characters');
        }


        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('please enter a valid email');
        };


        if (password.length < 8 ) {
            isValid = false;
            messages.push('please enter a valid password');
        }


        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedBack.textContent = 'Registration Successful!';
            feedBack.style.color = "#28a745";
        } else {
            feedBack.innerHTML = messages.join('<br>');
            feedBack.style.color = '#dc3545';
        }

        


    })


})
