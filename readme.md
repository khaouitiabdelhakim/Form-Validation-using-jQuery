# Form Validation using jQuery

This is a simple HTML form validation script using jQuery. It validates the input fields for name, email, and password.

## Usage

1. Include jQuery library in your HTML file.
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

2. Copy and paste the provided JavaScript code into your HTML file or link it externally.

3. Create your HTML form with appropriate input fields and error placeholders.
```html
<form id="myForm" action="#" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <span class="error" id="nameError"></span><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <span class="error" id="emailError"></span><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <span class="error" id="passwordError"></span><br>

    <input type="submit" value="Submit">
</form>
```

4. Customize error messages and validation rules as needed.

## Explanation

- The script uses jQuery to select the form element with the id `myForm` and listens for the `submit` event.
- When the form is submitted, it retrieves the values of name, email, and password fields.
- Error messages are initially reset to empty.
- It validates each field:
  - Name: Checks if it's empty.
  - Email: Checks if it's empty and validates its format using a regular expression.
  - Password: Checks if it's empty and ensures it's at least 6 characters long.
- If any validation fails, corresponding error messages are displayed, and the form submission is prevented.
- The `isValidEmail` function is used to validate the email format using a regular expression.
