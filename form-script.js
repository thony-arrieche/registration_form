window.onload = function() {
    let passwordText = document.getElementById('passwordText');
    let confirmPasswordText = document.getElementById('confirmPasswordText');
/*INIT variables*/
    passwordText.onchange = ConfirmPassword;
    confirmPasswordText.onkeyup = ConfirmPassword;
    function ConfirmPassword() {
        confirmPasswordText.setCustomValidity("");
        if(passwordText.value != confirmPasswordText.value) {
            confirmPasswordText.setCustomValidity("Passwords don't match!");
        }
    }
}
