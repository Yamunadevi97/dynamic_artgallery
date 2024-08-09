function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var isValid = true;

    // Clear previous error messages
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    // Validate username
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        document.getElementById("usernameError").style.display = "block";
        isValid = false;
    }

    // Validate email
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    // Validate password
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        // Redirect to a success page or perform further actions
        alert("Sign up successful!");
    }

    return false; // Prevent form submission for demonstration purposes
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
