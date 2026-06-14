document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const email = document.getElementById("regEmail").value;

    fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password, email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Registration Successful") {
            alert("Registration Successful!");
            window.location.href = "/"; 
        } else {
            alert("Registration Failed: " + data.message);
        }
    });
});