document.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("username");
    const userProfileElement = document.getElementById("userProfileName");
    
    if (savedName && userProfileElement) {
        userProfileElement.innerText = savedName;
    } else if (userProfileElement) {
        userProfileElement.innerText = "Guest";
    }
});

const cards = document.querySelectorAll(".card");
const userRole = localStorage.getItem("role"); 

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        if (userRole === "nurse") {
            if (index === 0) {
                window.location.href = "/records";     
            } else if (index === 1) {
                window.location.href = "/addrecord";     
            } else if (index === 2) {
                window.location.href = "/updaterecord";  
            } else if (index === 3) {
                window.location.href = "/schedule";      
            }
        } else {
            if (index === 0) {
                window.location.href = "/records";       
            } else if (index === 1) {
                window.location.href = "/schedule";      
            } else if (index === 2) {
                window.location.href = "/bookings";      
            }
        }
    });
});

const accountBtn = document.getElementById("accountBtn");
const dropdown = document.getElementById("dropdown");

accountBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    dropdown.classList.toggle("show");
});

window.addEventListener("click", (e) => {
    if (!accountBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
    }
});