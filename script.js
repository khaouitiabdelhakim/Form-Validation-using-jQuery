$(document).ready(function () {
    $('#myForm').submit(function (event) {
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();

        // Reset error messages
        $('.error').text('');

        // Validate name
        if (name.trim() == '') {
            $('#nameError').text('Name is required');
            event.preventDefault();
        }

        // Validate email
        if (email.trim() == '') {
            $('#emailError').text('Email is required');
            event.preventDefault();
        } else if (!isValidEmail(email)) {
            $('#emailError').text('Invalid email format');
            event.preventDefault();
        }

        // Validate password
        if (password.trim() == '') {
            $('#passwordError').text('Password is required');
            event.preventDefault();
        } else if (password.length < 6) {
            $('#passwordError').text('Password must be at least 6 characters long');
            event.preventDefault();
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
