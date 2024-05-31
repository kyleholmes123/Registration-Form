document.querySelector('form').addEventListener('submit', function (event) {
    var password = document.getElementById('password');
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*?&])[A-Za-z\d@$%*?&]{8,}$/;

    if (!regex.test(password.value)) {
        event.preventDefault();
        alert("Please enter a valid password.");
    }
});
