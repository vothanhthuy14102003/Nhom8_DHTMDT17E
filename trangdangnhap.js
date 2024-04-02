document.addEventListener('DOMContentLoaded', function() {
    var registerForm = document.getElementById('register-form');
    var emailInput = document.getElementById('register-form-email');
    var emailErrorMessage = document.getElementById('email-error-message');

    emailInput.addEventListener('blur', function() {
        if (!isValidEmail(emailInput.value)) {
            emailErrorMessage.textContent = 'Vui lòng nhập đúng định dạng email';
        } else {
            emailErrorMessage.textContent = '';
        }
    });

    function isValidEmail(email) {
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var usernameInput = document.getElementById('register-form-name');
    var usernameErrorMessage = document.getElementById('username-error-message');

    usernameInput.addEventListener('blur', function() {
        if (usernameInput.value.length < 6) {
            usernameErrorMessage.textContent = 'Tên người dùng phải có ít nhất 6 ký tự.';
        } else {
            usernameErrorMessage.textContent = '';
        }
    });
        
});
document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('register-form-password');
    var passwordErrorMessage = document.getElementById('password-error-message');

    passwordInput.addEventListener('blur', function() {
        if (!isValidPassword(passwordInput.value)) {
            passwordErrorMessage.textContent = 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt và một số.';
        } else {
            passwordErrorMessage.textContent = '';
        }
    });

    function isValidPassword(password) {
        var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
        return passwordRegex.test(password);
    }
})

