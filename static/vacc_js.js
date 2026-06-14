document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Login Successful") {
            alert("Login Successful!");
            
        
            localStorage.setItem("user_id", data.user_id);
            localStorage.setItem("username", data.username);
            localStorage.setItem("role", data.role);

            if (data.role === "nurse") {
                window.location.href = "/nurse/dashboard";
            } else {
                window.location.href = "/dashboard";
            }
        } else {
            alert("Login Failed: " + data.message);
        }
    });
});