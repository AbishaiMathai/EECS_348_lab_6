document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the passwords from the input fields
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    // Check if the password is at least 8 characters long
    if (password1.length < 8) {
        alert("Password must be at least 8 characters long.");
    } else if (password1 !== password2) {
        // Check if the two passwords match
        alert("The passwords do not match. Please try again.");
    } else {
        // If the passwords match
        alert("The passwords match!");
    }
});
