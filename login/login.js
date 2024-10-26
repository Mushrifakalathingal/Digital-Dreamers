// Function to open the login modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

// Function to close the login modal
function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Simulate a login function
function login(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        alert("Login successful!");
        closeLoginModal();
        window.location.href = '../index.html'
    } else {
        alert("Invalid username or password.");
    }
}
