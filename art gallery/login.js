function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var isValid = true;

    // Clear previous error messages
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    // Validate username
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        document.getElementById("usernameError").style.display = "block";
        isValid = false;
    }

    // Validate password
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    // Check username and password correctness (example)
    var correctUsername = "art"; // Replace with the actual correct username
    var correctPassword = "123"; // Replace with the actual correct password
    if (username !== correctUsername) {
        document.getElementById("usernameError").innerText = "Incorrect username.";
        document.getElementById("usernameError").style.display = "block";
        isValid = false;
    }
    if (password !== correctPassword) {
        document.getElementById("passwordError").innerText = "Incorrect password.";
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        // Redirect to homepage
        window.location.href = "index.html"; // Replace with your homepage URL
    }

    return false; // Prevent form submission for demonstration purposes
}
