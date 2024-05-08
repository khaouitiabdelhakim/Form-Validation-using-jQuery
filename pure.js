document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      // Reset error messages
      document.querySelectorAll(".error").forEach(function (element) {
        element.textContent = "";
      });

      // Validate name
      if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        event.preventDefault();
      }

      // Validate email
      if (email.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required";
        event.preventDefault();
      } else if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent =
          "Invalid email format";
        event.preventDefault();
      }

      // Validate password
      if (password.trim() === "") {
        document.getElementById("passwordError").textContent =
          "Password is required";
        event.preventDefault();
      } else if (password.length < 6) {
        document.getElementById("passwordError").textContent =
          "Password must be at least 6 characters long";
        event.preventDefault();
      }
    });

  // Function to validate email format
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
